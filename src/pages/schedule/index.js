import React, { useEffect, useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ScheduleItem from '@components/schedule-item';

import { ConstructorContext } from '@store/reducers/constructor-reducer';

import classnames from 'classnames/bind';
import style from './style';
const cn = classnames.bind(style);

const Schedule = () => {
    const { state } = useContext(ConstructorContext);

    useEffect(() => {
        console.log('schedule: ', state);
    }, [state]);

    return <div className={cn('schedule')}>
                <table className={cn('screen')}>
                    <thead>
                        <tr>
                            <th scope="col">Country</th>
                            <th scope="col">Gate</th>
                            <th scope="col">Time remaining</th>
                        </tr>
                    </thead>
                    <tbody>
                        {state.map((item, index) => {
                            return <ScheduleItem key={index} value={item} />
                        })}
                    </tbody>
                </table>
            </div>
}

export default Schedule;
