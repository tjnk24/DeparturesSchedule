import React, { useState, useEffect } from 'react';
import Dropdown from './parts/dropdown';

import bootstrap from '@bootstrap-module';
import classnames from 'classnames/bind';
import style from './style';
const cn = classnames.bind(style);

const ConstructorComposer = ({ countries, gates }) => {
    const [countryValue, setCountryValue] = useState('Armenia');
    const [gateValue, setGateValue] = useState('A1');
    const [hoursValue, setHoursValue] = useState('00');
    const [minutesValue, setMinutesValue] = useState('00');

    const dropdownProps = [
        {
            className: cn('constructor-composer__country'),
            label: 'Country',
            value: countryValue,
            onChangeHandler: setCountryValue,
            children: () => mapCountries(countries)
        },
        {
            className: cn('constructor-composer__gate'),
            label: 'Gate',
            value: gateValue,
            onChangeHandler: setGateValue,
            children: () => mapGates(gates)
        },
        {
            className: cn('constructor-composer__time'),
            label: 'Time',
            value: hoursValue,
            onChangeHandler: setHoursValue,
            children: () => mapTime(23)
        },
        {
            className: cn('constructor-composer__time'),
            value: minutesValue,
            onChangeHandler: setMinutesValue,
            children: () => mapTime(59)
        }
    ];

    useEffect(() => {
        console.log(countryValue, gateValue, hoursValue, minutesValue);
    });

    const mapCountries = (countriesArr) => {
        return countriesArr.map((country, index) => {
            country = country[0].toUpperCase() + country.slice(1);

            return <option key={index} value={country}>{country}</option>
        })
    };

    const mapGates = (terminalsArr) => {
        let gatesArr = [];

        for(let gate in terminalsArr) {
            for(let i = 1; i <= terminalsArr[gate]; i++) {
                const gatesItem = gate + i;
                gatesArr.push(gatesItem);
            }
        }

        return gatesArr.map((gate, index) => {
            return <option key={index} value={gate}>{gate}</option>
        })
    }

    const mapTime = (value) => {
        let numsArr = [];

        for (let i = 0; i <= value; i++) {
            i < 10
            ? numsArr.push('0' + i)
            : numsArr.push(i.toString(10));
        }

        return numsArr.map((num, index) => {
            return <option key={index} value={num}>{num}</option>
        })
    }

    return (
        <div className={cn('constructor-composer')}>
            <div className={cn('constructor-composer__wrap')}>
                { dropdownProps.map((prop, index) =>
                    <Dropdown
                        key={index}
                        className={prop.className}
                        label={prop.label ? prop.label : null}
                        value={prop.value}
                        onChangeHandler={prop.onChangeHandler}
                        children={prop.children()}
                    />
                ) }
            </div>
            <button className={cn(bootstrap.btn, bootstrap['btn-success'])}>ADD TO LIST</button>
        </div>
    );
};

export default ConstructorComposer;