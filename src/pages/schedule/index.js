import React, { useState, useEffect, useContext } from 'react';
import { Transition, CSSTransition } from 'react-transition-group';
import _ from 'lodash-es';
import ScheduleItem from '@components/schedule-item';

import { ConstructorContext } from '@store/reducers/constructor-reducer';

import classnames from 'classnames/bind';
import style from './style';
const cn = classnames.bind(style);

const Schedule = ({ setConstructed }) => {
    const { state } = useContext(ConstructorContext);

    const [scheduleIn, setScheduleIn] = useState(false);
    const [screenIn, setScreenIn] = useState(false);

    const chunkedState = _.chunk(state, 6);

    const [screens, setScreens] = useState(chunkedState);
    const [screenIndex, setScreenIndex] = useState(0);

    const [linkVisible, setLinkVisible] = useState(false);

    useEffect(() => {
        setScheduleIn(true);
    }, []);

    useEffect(() => {
        let count = 0;

        const countInterval = setInterval(() => {
            if (count >= screens.length) {
              count = 0;
            }

            if (count < screens.length) {
              setScreenIndex(count)
              count = count + 1;
            }

        }, 3000);

        return () => clearInterval(countInterval);
    }, [screenIn]);

    const screenClasses = {
        enter    : cn('screen-enter'),
        enterDone: cn('screen-enter')
    }

    return <div className={cn('schedule')}>
              <Transition in={scheduleIn} timeout={1500} onEntered={() => setScreenIn(true)}>
                <div
                  className={cn('screenwrap')}
                  onMouseOver={() => setLinkVisible(true)}
                  onMouseOut={() => setLinkVisible(false)}
                >
                  <CSSTransition in={screenIn} timeout={2000} classNames={screenClasses}>
                    <div className={cn('screen', screens.length === 1 && 'screen__single-screen')}>
                      <div className={cn('screen__heading')}>
                        <div>Country</div>
                        <div>Gate</div>
                        <div>Time remaining</div>
                      </div>
                      <div className={cn('screen__schedule-wrap')}>
                        {screens[screenIndex].map((item, index) => <ScheduleItem key={index} value={item}/>)}
                      </div>
                    </div>
                  </CSSTransition>
                  <a className={cn('screenwrap__link-hidden', linkVisible && 'screenwrap__link-visible')} href='#' onClick={() => setConstructed(false)}>Edit schedule</a>
                </div>
              </Transition>
            </div>
}

export default Schedule;
