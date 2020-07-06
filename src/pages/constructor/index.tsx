import React, { FC, useContext } from 'react';
import classnames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import Spinner from 'react-bootstrap/esm/Spinner';
import ConstructorTable from '@components/constructor-table';
import ConstructorComposer from '@components/constructor-composer';

import { Context } from '@store/provider';

import { ValueTypes } from '@apptypes/components';

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
      { appPropsState.loading === false
        ? (
          <ConstructorComposer
            countries={appPropsState.countries}
            gates={appPropsState.gates}
          />
        )
        : <Spinner className={cn('preloader')} animation="border" />}
    </>
  );
};

export default Constructor;
