import React, { useState, useEffect, useReducer } from 'react';
import DropdownsList from './parts/dropdowns-list';

import { ConstructorContext, initialState, constructorReducer } from '../../reducers/constructor-reducer';

import bootstrap from '@bootstrap-module';
import classnames from 'classnames/bind';
import style from './style';
const cn = classnames.bind(style);

const ConstructorComposer = ({
    countries,
    gates }) => {

    const [state, dispatch] = useReducer(constructorReducer, initialState);

    const [composerValues, setComposerValues] = useState({
        country: 'Bulgaria',
        gate: 'C1',
        hours: '00',
        minutes: '00'
    })

    // const [listValues, setListValues] = useState([]);

    useEffect(() => {
        console.log(state);
    });

    const addToList = () => {
        dispatch({
            type: 'add',
            payload
        })
        // setListValues([
        //     ...listValues,
        //     composerValues
        // ])
    };

    return (
        <div className={cn('constructor-composer')}>
            <ConstructorContext.Provider value={{ state, dispatch }}>
                <DropdownsList
                    values={state}
                    handler={setComposerValues}
                    countries={countries}
                    gates={gates}
                />
            </ConstructorContext.Provider>
            <button
                className={cn(bootstrap.btn, bootstrap['btn-success'])}
                // onClick={addToList}
            >
                ADD TO LIST
            </button>
        </div>
    );
};

export default ConstructorComposer;