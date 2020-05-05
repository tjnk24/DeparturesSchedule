import React, { useContext } from 'react';
import Dropdown from '../dropdown';
import CountriesList from '../countries-list';
import GatesList from '../gates-list';
import TimeList from '../time-list';

import { ConstructorContext } from '../../../../reducers/constructor-reducer';

import classnames from 'classnames/bind';
import style from './style';
const cn = classnames.bind(style);

const DropdownsList = ({ values, handler, countries, gates }) => {

    const { state, dispatch } = useContext(ConstructorContext);

    const {
        country,
        gate,
        hours,
        minutes
    } = values;

    const dropdownListProps = [
        {
            className: cn('dropdown-list__country'),
            label: 'Country',
            name: 'country',
            value: country,
            children: () => <CountriesList countries={countries} />
        },
        {
            className: cn('dropdown-list__gate'),
            label: 'Gate',
            name: 'gate',
            value: gate,
            children: () => <GatesList gates={gates} />
        },
        {
            className: cn('dropdown-list__time'),
            label: 'Time',
            name: 'hours',
            value: hours,
            children: () => <TimeList timeValue={23} />
        },
        {
            className: cn('dropdown-list__time'),
            name: 'minutes',
            value: minutes,
            children: () => <TimeList timeValue={59} />
        }
    ];

    return (
        <div className={cn('dropdown-list')}>
            { dropdownListProps.map(prop =>
                <Dropdown
                    key={prop.name}
                    className={prop.className}
                    label={prop.label ? prop.label : null}
                    name={prop.name}
                    value={prop.value}
                    prevValues={values}
                    onChangeHandler={handler}
                    children={prop.children()}
                />
            )}
        </div>
    );
};

export default DropdownsList;