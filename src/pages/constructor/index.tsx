import React, { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import ConstructorTable from '@components/constructor-table';
import ConstructorComposer from '@components/constructor-composer';

import { Context } from '@store/provider';

import { ValueTypes } from '@apptypes/components';

import classnames from 'classnames/bind';
import style from './style.scss';

const cn = classnames.bind(style);

const Constructor: FC = (): JSX.Element => {
  const { state } = useContext(Context);
  const { constructorState, appPropsState } = state;

  return (
    <>
      <div className={cn('heading')}>
        <h5>Сompose your schedule here</h5>
        <Link to="/schedule">
          <Button
            variant={constructorState.length ? 'success' : 'secondary'}
            disabled={!constructorState.length}
          >
            Compose
          </Button>
        </Link>
      </div>
      <ConstructorTable state={constructorState as ValueTypes[]} />
      { appPropsState.loading === false && (
        <ConstructorComposer
          countries={appPropsState.countries}
          gates={appPropsState.gates}
        />
      )}
    </>
  );
};

export default Constructor;
