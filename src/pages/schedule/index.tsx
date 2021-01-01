import React, {
  FC,
  useState,
  useEffect,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import ScheduleItem from '@components/schedule-item';
import { Transition, CSSTransition } from 'react-transition-group';
import chunk from 'lodash.chunk';

import getProps from '@store/actions/appProps';

import api from '@utils/api';

import { Item } from '@apptypes/common';

import classnames from 'classnames/bind';
import Spinner from 'react-bootstrap/esm/Spinner';
import { RootState } from '@store/reducers/rootReducer/types';
import style from './style.scss';

const cn = classnames.bind(style);

const Schedule: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const { appProps, constructorState } = useSelector((state: RootState) => state);
  const { items } = constructorState;
  const { flagsImages } = appProps;

  const flagsFetched = Object.keys(flagsImages).length !== 0;

  const screens: Item[][] = chunk(items, 6);

  const [scheduleIn, setScheduleIn] = useState(false);
  const [screenIn, setScreenIn] = useState(false);
  const [screenIndex, setScreenIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    !flagsFetched
      ? dispatch(getProps(api.images.countryFlags))
      : setScheduleIn(true);
  }, [flagsImages]);

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

    return appProps.flagsImages[`${countryLowerCase}`];
  };

  const mapScreen = (screen: Item[]) => screen.map(
    (item) => (
      <ScheduleItem
        key={item.id as number}
        value={item}
        image={countryName(item.country as string)}
      />
    ),
  );

  const preloader = (
    <div className={cn('preloader-wrap')}>
      <Spinner animation="border" />
    </div>
  );

  const screenClasses = {
    enter: cn('screen-enter'),
    enterDone: cn('screen-enter'),
  };

  return (
    items.length
      ? (
        <>
          {loading ? preloader : null}
          <div className={cn('schedule')}>
            <div className={cn('schedule__background')}>
              <img
                src={require('./img/bg.jpg')}
                alt="background"
                onLoad={() => setLoading(false)}
              />
            </div>
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
                            { mapScreen(screen) }
                          </div>
                        ))
                        : null}
                    </div>
                  </div>
                </CSSTransition>
              </div>
            </Transition>
          </div>
        </>
      )
      : <Redirect to="/" />
  );
};

export default Schedule;
