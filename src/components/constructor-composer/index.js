import React, { useState, useReducer } from 'react';
import DropdownsList from './parts/dropdowns-list';

import { ADD_TO_LIST } from '../../store/actions/actionTypes';

import { initialState, constructorReducer } from '../../store/reducers/constructor-reducer';

import bootstrap from '@bootstrap-module';
import classnames from 'classnames/bind';
import style from './style';
const cn = classnames.bind(style);

const ConstructorComposer = ({
    countries,
    gates }) => {

    const [, dispatch] = useReducer(constructorReducer, initialState);

    const [composerValues, setComposerValues] = useState({
        country: 'Bulgaria',
        gate: 'C1',
        hours: '00',
        minutes: '00'
    })

    const addToList = () => {
        dispatch({
            type: ADD_TO_LIST,
            payload: composerValues
        })
    };

    return (
        <div className={cn('constructor-composer')}>
                <DropdownsList
                    values={composerValues}
                    handler={setComposerValues}
                    countries={countries}
                    gates={gates}
                />
            <button
                className={cn(bootstrap.btn, bootstrap['btn-success'])}
                onClick={addToList}
            >
                ADD TO LIST
            </button>
        </div>
    );
};

export default ConstructorComposer;