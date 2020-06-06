import React, { FC, useState, useContext } from 'react';

import { ADD_LIST_ITEM } from '@store/actionTypes';

import { ConstructorContext } from '@store/constructor-reducer';

import classnames from 'classnames/bind';
import DropdownsList from '../dropdowns-list';
import bootstrap from '@bootstrap-module';
import style from './style.scss';

import ConstructorComposerProps from './types';

const cn = classnames.bind(style);

const ConstructorComposer: FC<ConstructorComposerProps> = ({ countries, gates }): JSX.Element => {
  const { dispatch } = useContext(ConstructorContext);

  const [composerValues, setComposerValues] = useState({
    country: 'Bulgaria',
    gate: 'C1',
    hours: '00',
    minutes: '00',
  });

  const addToList = () => {
    const payload = {
      ...composerValues,
      isEditing: false,
    };

    dispatch({
      type: ADD_LIST_ITEM,
      payload,
    });
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
        type="button"
        className={cn(bootstrap.btn, bootstrap['btn-success'])}
        onClick={addToList}
      >
                ADD TO LIST
      </button>
    </div>
  );
};

export default ConstructorComposer;
