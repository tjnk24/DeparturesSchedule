import React, { useState, useEffect } from 'react';
import Dropdown from '../../../dropdown-list/parts/dropdown';
import CountriesList from '../../../dropdown-list/parts/countries-list';
import GatesList from '../../../dropdown-list/parts/gates-list';
import TimeList from '../../../dropdown-list/parts/time-list';

import airportApi from '../../../../mocks/airportApi.json';

import classnames from 'classnames/bind';
import style from './style';
const cn = classnames.bind(style);

const TableRow = ({ value, index }) => {

    const { countries, gates } = airportApi;

    const [dropdownsVisible, setDropdownsVisible] = useState(false);

    useEffect(() => {
        console.log(value.country);
    });

    const showDropdowns = () => {
        setDropdownsVisible(true);
    }

    return (
        <React.Fragment>
            {
            !dropdownsVisible
                ? <tr
                    onClick={showDropdowns}
                >
                    <th scope="row">{index + 1}</th>
                    <td>{value.country}</td>
                    <td>{value.gate}</td>
                    <td>{value.time}</td>
                </tr>
                : <tr className={cn('table-row')}>
                    {/* TODO: поместить Dropdown в каждый td / размапить, как в DropdownList  */}
                    <th scope="row">{index + 1}</th>
                    <td>
                        <Dropdown
                            label={null}
                            children={<CountriesList countries={countries} />}
                        />
                    </td>
                    <td>
                        <Dropdown
                            label={null}
                            children={<GatesList gates={gates} />}
                        />
                    </td>
                    <td>
                        <Dropdown
                            label={null}
                            children={<TimeList timeValue={23} />}
                        />
                        <span>:</span>
                        <Dropdown
                            label={null}
                            children={<TimeList timeValue={59} />}
                        />
                    </td>
                    <td>
                        <button>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" class="svg-inline--fa fa-trash fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path fill="currentColor" d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"></path>
                            </svg>
                        </button>
                        <button>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="svg-inline--fa fa-check fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                            </svg>
                        </button>
                    </td>
                </tr>
            }
        </React.Fragment>
    )
};

export default TableRow;