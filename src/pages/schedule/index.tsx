import React, { useState, useEffect, useContext } from 'react';
import { Transition, CSSTransition } from 'react-transition-group';
import _ from 'lodash-es';
import ScheduleItem from '@components/schedule-item';

import { ConstructorContext } from '@store/constructor-reducer';

import classnames from 'classnames/bind';
import style from './style.scss';

const cn = classnames.bind(style);

const Schedule = ({ setConstructed }) => {
  const { state } = useContext(ConstructorContext);

  const screens = _.chunk(state, 6);

  const [scheduleIn, setScheduleIn] = useState(false);
  const [screenIn, setScreenIn] = useState(false);
  const [screenIndex, setScreenIndex] = useState(0);
  const [linkVisible, setLinkVisible] = useState(false);

  useEffect(() => {
    !screens.length && setConstructed(false);
    setScheduleIn(true);
  }, []);

  useEffect(() => {
    let count = 0;

    const countInterval = setInterval(() => {
      if (count < screens.length) {
        setScreenIndex(count);
        count = (count + 1) % screens.length;
      }
    }, 3000);

    return () => clearInterval(countInterval);
  }, [screenIn]);

  const mapScreen = (screen) => screen.map(
    (item) => <ScheduleItem key={item.id} value={item} />,
  );

  const screenClasses = {
    enter: cn('screen-enter'),
    enterDone: cn('screen-enter'),
  };

  return (
    <div className={cn('schedule')}>
      <Transition in={scheduleIn} timeout={1500} onEntered={() => setScreenIn(true)}>
        <div
          className={cn('screenwrap')}
          onMouseOver={() => setLinkVisible(true)}
          onFocus={() => setLinkVisible(true)}
          onMouseOut={() => setLinkVisible(false)}
          onBlur={() => setLinkVisible(false)}
        >
          <CSSTransition in={screenIn} timeout={2000} classNames={screenClasses}>
            <div className={cn('screen', screens.length === 1 && 'screen__single-screen')}>
              <div className={cn('screen__heading')}>
                <div>Country</div>
                <div>Gate</div>
                <div>Time remaining</div>
              </div>
              <div className={cn('screen__schedule-wrap')}>
                {screens.length
                  ? screens.map((screen, index) => (
                    <div
                      key={screen[0].id}
                      className={cn('screen__schedule-item', index === screenIndex && 'screen__schedule-item-visible')}
                    >
                      { mapScreen(screen) }
                    </div>
                  ))
                  : null}
              </div>
            </div>
          </CSSTransition>
          <button
            type="button"
            className={cn('screenwrap__link-hidden', linkVisible && 'screenwrap__link-visible')}
            onClick={() => setConstructed(false)}
          >
            Edit schedule
          </button>
        </div>
      </Transition>
    </div>
  );
};

export default Schedule;