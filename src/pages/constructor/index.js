import React, { useContext } from 'react';
import ConstructorTable from '@components/constructor-table';
import ConstructorComposer from '@components/constructor-composer';

import { ConstructorContext } from '@store/reducers/constructor-reducer';

import classnames from 'classnames/bind';
import style from './style';
const cn = classnames.bind(style);

import bootstrap from '@bootstrap-module';

import airportApi from '../../mocks/airportApi.json';

const Constructor = ({ setConstructed }) => {
    const { state } = useContext(ConstructorContext);

    return (
        <div className={cn('constructor')}>
            <div className={cn('constructor__heading')}>
                <h5>Сompose your schedule here</h5>
                <button
                    className={cn(
                        bootstrap.btn,
                        bootstrap[state.length ? 'btn-success' : 'btn-secondary']
                    )}
                    disabled={!state.length}
                    onClick={() => setConstructed(true)}
                >
                    Compose
                </button>
            </div>
            <ConstructorTable state={ state } />
            <ConstructorComposer
                countries={airportApi.countries}
                gates={airportApi.gates}
            />
        </div>
    );
};

export default Constructor;
