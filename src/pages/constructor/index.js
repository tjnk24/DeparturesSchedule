import React from 'react';
import ConstructorTable from '@components/constructor-table';
import ConstructorComposer from '@components/constructor-composer';

import classnames from 'classnames/bind';
import style from './style';
const cn = classnames.bind(style);

import bootstrap from '@bootstrap-module';

import airportApi from '../../mocks/airportApi.json';

const Constructor = ({ setConstructed }) => {

    const composeHandler = () => {
        setConstructed(true);
    };

    return (
        <div className={cn('constructor')}>
            <div className={cn('constructor__heading')}>
                <h5>Сompose your schedule here</h5>
                <button
                    className={cn(bootstrap.btn, bootstrap['btn-secondary'])}
                    disabled={true}
                    onClick={composeHandler}
                >
                    Compose
                </button>
            </div>
            <ConstructorTable />
            <ConstructorComposer
                countries={airportApi.countries}
                gates={airportApi.gates}
            />
        </div>
    );
};

export default Constructor;
