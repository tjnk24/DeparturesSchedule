import React, { FC, useContext } from 'react';
import Button from 'react-bootstrap/esm/Button';
import ConstructorTable from '@components/constructor-table';
import ConstructorComposer from '@components/constructor-composer';

import { Context } from '@store/provider';

import ConstructedHandlerType from '@apptypes/pages';

import { ValueTypes } from '@apptypes/components';

import classnames from 'classnames/bind';
import style from './style.scss';

const cn = classnames.bind(style);

const Constructor: FC<ConstructedHandlerType> = ({ setConstructed }): JSX.Element => {
  const { state } = useContext(Context);
  const { constructorState, appPropsState } = state;

  return (
    <div className={cn('constructor')}>
      <div className={cn('constructor__heading')}>
        <h5>Сompose your schedule here</h5>
        <Button
          variant={constructorState.length ? 'success' : 'secondary'}
          disabled={!constructorState.length}
          onClick={() => setConstructed(true)}
        >
          Compose
        </Button>
      </div>
      <ConstructorTable state={constructorState as ValueTypes[]} />
      { appPropsState.loading === false && (
        <ConstructorComposer
          countries={appPropsState.countries}
          gates={appPropsState.gates}
        />
      )}
    </div>
  );
};

export default Constructor;
