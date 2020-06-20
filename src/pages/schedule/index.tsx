import React, {
  FC,
  useState,
  useEffect,
  useContext,
} from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import ScheduleItem from '@components/schedule-item';
import { Transition, CSSTransition } from 'react-transition-group';
import chunk from 'lodash.chunk';

import { Context } from '@store/provider';
import fetchProps from '@store/actions/appProps';

import path from '@utils/api';

import { MixedValueTypes } from '@apptypes/components';

import classnames from 'classnames/bind';
import style from './style.scss';

const cn = classnames.bind(style);

const Schedule: FC = (): JSX.Element => {
  const { state, dispatch } = useContext(Context);
  const { constructorState, appPropsState } = state;

  const screens: MixedValueTypes[][] = chunk(constructorState, 6);

  const [scheduleIn, setScheduleIn] = useState(false);
  const [screenIn, setScreenIn] = useState(false);
  const [screenIndex, setScreenIndex] = useState(0);

  useEffect(() => {
    !appPropsState.flagsImages && fetchProps(dispatch, path.images.countryFlags);

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

  const countryName = (name: string) => {
    const countryLowerCase = name[0].toLowerCase() + name.slice(1);

    return appPropsState.flagsImages[`${countryLowerCase}`];
  };

  const mapScreen = (screen: MixedValueTypes[]) => screen.map(
    (item) => (
      <ScheduleItem
        key={item.id as number}
        value={item}
        image={countryName(item.country as string)}
      />
    ),
  );

  const screenClasses = {
    enter: cn('screen-enter'),
    enterDone: cn('screen-enter'),
  };

  return (
    <div className={cn('schedule')}>
      <Link to="/">
        <Button variant="link">
          Edit schedule
        </Button>
      </Link>
      <Transition in={scheduleIn} timeout={1500} onEntered={() => setScreenIn(true)}>
        <div
          className={cn('screenwrap')}
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
                      key={screen[0].id as number}
                      className={cn('screen__schedule-item',
                        index === screenIndex && 'screen__schedule-item-visible',
                        screens.length > 1 && 'screen__schedule-item-multiple')}
                    >
                      { appPropsState.flagsImages && mapScreen(screen) }
                    </div>
                  ))
                  : null}
              </div>
            </div>
          </CSSTransition>
        </div>
      </Transition>
    </div>
  );
};

export default Schedule;
