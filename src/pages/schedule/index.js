import React, { useState, useEffect, useContext } from 'react';
import { Transition, CSSTransition } from 'react-transition-group';
import _ from 'lodash-es';
import ScheduleItem from '@components/schedule-item';

import { ConstructorContext } from '@store/reducers/constructor-reducer';

import classnames from 'classnames/bind';
import style from './style';
const cn = classnames.bind(style);

const Schedule = () => {
    const { state } = useContext(ConstructorContext);

    const [scheduleIn, setScheduleIn] = useState(false);
    const [screenIn, setScreenIn] = useState(false);

    const chunkedState = _.chunk(state, 6);

    const [screens, setScreens] = useState(chunkedState);
    const [screenIndex, setScreenIndex] = useState(0);

    useEffect(() => {
        setScheduleIn(true);
    }, []);

    useEffect(() => {
        let count = 0;

        const countInterval = setInterval(() => {
            if (count >= screens.length) {
              count = 0;
            }

            console.log(count);

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
                <div className={cn('screenwrap')}>
                  <CSSTransition in={screenIn} timeout={2000} classNames={screenClasses}>
                    <div className={cn('screen')}>
                      <div>Country</div>
                      <div>Gate</div>
                      <div>Time remaining</div>
                          {screens[screenIndex].map((item, index) => <ScheduleItem key={index} value={item}/>)}
                    </div>
                  </CSSTransition>
                </div>
              </Transition>
            </div>
}

export default Schedule;
