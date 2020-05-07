import React from 'react';
import Dropdown from './parts/dropdown';
import CountriesList from './parts/countries-list';
import GatesList from './parts/gates-list';
import TimeList from './parts/time-list';

import classnames from 'classnames/bind';
import style from './style';
const cn = classnames.bind(style);

const DropdownsList = ({ values, handler, countries, gates }) => {

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
                <React.Fragment key={prop.name}>
                    <div className={prop.className}>
                        { prop.label
                            ? <label>{prop.label}</label>
                            : null
                        }
                        <Dropdown
                            name={prop.name}
                            value={prop.value}
                            prevValues={values}
                            onChangeHandler={handler}
                            children={prop.children()}
                        />
                    </div>
                    { prop.label === 'Time' ? <span>:</span> : null }
                </React.Fragment>
            )}
        </div>
    );
};

export default DropdownsList;