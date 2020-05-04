import React from 'react';
import ConstructorList from '@components/constructor-list';
import ConstructorComposer from '@components/constructor-composer';
import classnames from 'classnames/bind';

import style from './style';
const cn = classnames.bind(style);

import bootstrap from '@bootstrap-module';

import airportApi from '../../mocks/airportApi.json';

const Constructor = props => {
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
