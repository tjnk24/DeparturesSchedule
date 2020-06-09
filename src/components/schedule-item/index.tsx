import React, { FC, useState, useEffect } from 'react';
import classnames from 'classnames/bind';
import style from './style.scss';

import ScheduleItemProps from './types';

import evaluateTime from './utils';

const cn = classnames.bind(style);

const ScheduleItem: FC<ScheduleItemProps> = ({ value }) => {
  const {
    country, gate, hours, minutes,
  } = value;

  const countryName = country as string;
  const countryLowerCase = countryName[0].toLowerCase() + countryName.slice(1);

  let duration = evaluateTime(hours as string, minutes as string);

  const [timer, setTimer] = useState('');

  const evaluateCount = () => {
    let countHours: string | number = Math.floor(duration / 3600);
    let countMinutes: string | number = Math.floor((duration % 3600) / 60);
    let countSeconds: string | number = Math.floor((duration % 3600) % 60);

    countHours = countHours < 10
      ? `0${countHours}`
      : countHours;
    countMinutes = countMinutes < 10
      ? `0${countMinutes}`
      : countMinutes;
    countSeconds = countSeconds < 10
      ? `0${countSeconds}`
      : countSeconds;

    duration -= 1;

    if (duration < 0) {
      setTimer('Departed');
    } else {
      const result = `${countHours}:${countMinutes}:${countSeconds}`;

      setTimer(result);
    }
  };

  useEffect(() => {
    evaluateCount();

    const interval = setInterval(() => evaluateCount(), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={cn('schedule-row')}>
      <div className={cn('schedule-row__country')}>
        <img src={require(`./img/${countryLowerCase}.png`)} alt={`${country} logo`} />
        <div>{country}</div>
      </div>
      <div>{gate}</div>
      <div className={cn(timer === 'Departed' && 'schedule-row__departed')}>{timer}</div>
    </div>
  );
};

export default ScheduleItem;
