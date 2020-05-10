import React, { useState, useContext } from 'react';
import DropdownsList from '../dropdowns-list';

import { ADD_LIST_ITEM } from '@store/actions/actionTypes';

import { ConstructorContext } from '@store/reducers/constructor-reducer';

import bootstrap from '@bootstrap-module';
import classnames from 'classnames/bind';
import style from './style';
const cn = classnames.bind(style);

const ConstructorComposer = ({
    countries,
    gates }) => {

    const { dispatch } = useContext(ConstructorContext);

    const [composerValues, setComposerValues] = useState({
        country: 'Bulgaria',
        gate: 'C1',
        hours: '00',
        minutes: '00'
    })

    const addToList = () => {
        const payload = {
            ...composerValues,
            isEditing: false
        };

        dispatch({
            type: ADD_LIST_ITEM,
            payload
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