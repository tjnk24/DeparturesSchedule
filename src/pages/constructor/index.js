import React, { useState, useEffect } from 'react';
import ConstructorList from '@components/constructor-list';
import ConstructorComposer from '@components/constructor-composer';
import classnames from 'classnames/bind';

import style from './style';
const cn = classnames.bind(style);

import bootstrap from '@bootstrap-module';

import airportApi from '../../mocks/airportApi.json';

const Constructor = props => {

    // const [composerValues, setComposerValues] = useState({
    //     country: 'Bulgaria',
    //     gate: 'C1',
    //     hours: '00',
    //     minutes: '00'
    // })

    // const [listValues, setListValues] = useState([]);

    // useEffect(() => {
    //     console.log(listValues);
    // }, [listValues]);

    return (
        <div className={cn('constructor')}>
            <div className={cn('constructor__heading')}>
                <h5>Сompose your schedule here</h5>
                <button className={cn(bootstrap.btn, bootstrap['btn-secondary'])} disabled={true}>Compose</button>
            </div>
            <ConstructorList />
            <ConstructorComposer
                countries={airportApi.countries}
                gates={airportApi.gates}
            />
        </div>
    );
};

export default Constructor;
