import React, { useState, useEffect, useContext } from 'react';
import Dropdown from '../../../dropdown-list/parts/dropdown';
import CountriesList from '../../../dropdown-list/parts/countries-list';
import GatesList from '../../../dropdown-list/parts/gates-list';
import TimeList from '../../../dropdown-list/parts/time-list';

import { UPDATE_LIST_ITEM } from '@store/actions/actionTypes';
import { ConstructorContext } from '@store/reducers/constructor-reducer';

import airportApi from '../../../../mocks/airportApi.json';

import classnames from 'classnames/bind';
import style from './style';
const cn = classnames.bind(style);

const TableRow = ({ value, index }) => {
    const { country, gate, time, id } = value;
    const { countries, gates } = airportApi;

    const { state, dispatch } = useContext(ConstructorContext);

    const [dropdownsVisible, setDropdownsVisible] = useState(false);

    const [innerValues, setInnerValues] = useState({
        country: country,
        gate: gate,
        hours: time.split(':')[0],
        minutes: time.split(':')[1]
    });

    const addToList = () => {
        const payload = {
            id: id,
            country: innerValues.country,
            gate: innerValues.gate,
            time: `${innerValues.hours}:${innerValues.minutes}`
        };

        dispatch({
            type: UPDATE_LIST_ITEM,
            payload
        });

        setDropdownsVisible(!dropdownsVisible);
    };

    return (
        <React.Fragment>
            {
            !dropdownsVisible
                ? <tr
                    className={cn('table-row', 'table-row-clickable')}
                    onClick={() => setDropdownsVisible(!dropdownsVisible)}
                >
                    <th className={cn('table-row__index')} scope="row">{index + 1}</th>
                    <td className={cn('table-row__country')}>{country}</td>
                    <td className={cn('table-row__gate')}>{gate}</td>
                    <td className={cn('table-row__time')}>{time}</td>
                </tr>
                : <tr className={cn('table-row')}>
                    <th className={cn('table-row__index')} scope="row">{index + 1}</th>
                    <td className={cn('table-row__country')}>
                        <Dropdown
                            name={'country'}
                            value={innerValues.country}
                            prevValues={innerValues}
                            onChangeHandler={setInnerValues}
                            children={<CountriesList countries={countries} />}
                        />
                    </td>
                    <td className={cn('table-row__gate')}>
                        <Dropdown
                            name={'gate'}
                            value={innerValues.gate}
                            prevValues={innerValues}
                            onChangeHandler={setInnerValues}
                            children={<GatesList gates={gates} />}
                        />
                    </td>
                    <td className={cn('table-row__time')}>
                        <div>
                            <Dropdown
                                name={'hours'}
                                value={innerValues.hours}
                                prevValues={innerValues}
                                onChangeHandler={setInnerValues}
                                children={<TimeList timeValue={23} />}
                            />
                            <span>:</span>
                            <Dropdown
                                name={'minutes'}
                                value={innerValues.minutes}
                                prevValues={innerValues}
                                onChangeHandler={setInnerValues}
                                children={<TimeList timeValue={59} />}
                            />
                        </div>
                        <div>
                            <button>
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" className="svg-inline--fa fa-trash fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path fill="currentColor" d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"></path>
                                </svg>
                            </button>
                            <button onClick={addToList}>
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" className="svg-inline--fa fa-check fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                                </svg>
                            </button>
                        </div>
                    </td>
                </tr>
            }
        </React.Fragment>
    )
};

export default TableRow;