import React, { FC, useState, useContext } from 'react';
import Button from 'react-bootstrap/esm/Button';
import { addListItem } from '@store/actions/constructor';

import { Context } from '@store/provider';

import classnames from 'classnames/bind';
import { StringObjectType } from '@apptypes/components';
import DropdownsList from '../dropdowns-list';
import style from './style.scss';

import ConstructorComposerProps from './types';

const cn = classnames.bind(style);

const ConstructorComposer: FC<ConstructorComposerProps> = ({ countries, gates }): JSX.Element => {
  const { dispatch } = useContext(Context);

  const [composerValues, setComposerValues] = useState<StringObjectType>({
    country: 'Bulgaria',
    gate: 'C1',
    hours: '00',
    minutes: '00',
  });

  const addToList = () => {
    dispatch(addListItem(composerValues));
  };

  return (
    <div className={cn('constructor-composer')}>
      <DropdownsList
        values={composerValues}
        handler={setComposerValues}
        countries={countries}
        gates={gates}
      />
      <Button
        variant="success"
        onClick={addToList}
      >
                ADD TO LIST
      </Button>
    </div>
  );
};

export default ConstructorComposer;
