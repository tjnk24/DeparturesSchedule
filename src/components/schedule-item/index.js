import React, { useState, useEffect } from 'react';
import classnames from 'classnames/bind';
import evaluateTime from './utils';

import style from './style';

const cn = classnames.bind(style);

const ScheduleItem = ({ value }) => {
  const {
    country, gate, hours, minutes,
  } = value;
  const countryLowerCase = country[0].toLowerCase() + country.slice(1);

  let duration = evaluateTime(hours, minutes);

  const [timer, setTimer] = useState('');

  const evaluateCount = () => {
    let countHours = parseInt(duration / 3600, 10);
    let countMinutes = parseInt((duration % 3600) / 60, 10);
    let countSeconds = parseInt((duration % 3600) % 60, 10);

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
    <div className={cn('schedule-item')}>
      <div className={cn('schedule-item__country')}>
        <img src={require(`./img/${countryLowerCase}.png`)} alt={`${country} logo`} />
        <div>{country}</div>
      </div>
      <div>{gate}</div>
      <div className={cn(timer === 'Departed' && 'schedule-item__departed')}>{timer}</div>
    </div>
  );
};

export default ScheduleItem;
