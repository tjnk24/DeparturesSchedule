import React, {useState, useEffect} from 'react';
import evaluateTime from './utils';

import classnames from 'classnames/bind';
import style from './style';
const cn = classnames.bind(style);

const ScheduleItem = ({ value }) => {
    const { country, gate, hours, minutes } = value;
    const countryLowerCase = country[0].toLowerCase() + country.slice(1);

    let duration = evaluateTime(hours, minutes);

    const [timer, setTimer] = useState('');

    useEffect(() => {
        evaluateCount();

        const interval = setInterval(() => evaluateCount(), 1000);

        return () => clearInterval(interval);
    }, []);

    const evaluateCount = () => {
        let hours = parseInt(duration / 3600, 10);
        let minutes = parseInt((duration % 3600) / 60, 10);
        let seconds = parseInt((duration % 3600) % 60, 10);

        hours = hours < 10
                    ? '0' + hours
                    : hours;
        minutes = minutes < 10
                    ? '0' + minutes
                    : minutes;
        seconds = seconds < 10
                    ? '0' + seconds
                    : seconds;

        if (--duration < 0) {
            setTimer('Departed');
        } else {
            const result = hours + ':' + minutes + ":" + seconds;
            console.log(result);

            setTimer(result);
        }
    }

    return (
        <tr className={cn('schedule-item')}>
            <td>
                <img src={require(`./img/${countryLowerCase}.png`)} alt={`${country} logo`} />
                <div>{country}</div>
            </td>
            <td>{gate}</td>
            <td className={cn(timer === 'Departed' && 'schedule-item__departed')}>{timer}</td>
        </tr>
    );
};

export default ScheduleItem;