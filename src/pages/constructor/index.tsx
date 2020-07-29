import React, { FC, useContext } from 'react';
import classnames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import Spinner from 'react-bootstrap/esm/Spinner';
import ConstructorTable from '@components/constructor-table';
import ConstructorComposer from '@components/constructor-composer';

import { Context } from '@store/provider';

import style from './style.scss';

const cn = classnames.bind(style);

const Constructor: FC = (): JSX.Element => {
  const { state } = useContext(Context);
  const { loading, countries, gates } = state.appPropsState;
  const { user } = state.authUserState;
  const { items } = state.constructorState;

  return (
    <>
      <div className={cn('heading')}>
        <h5>Сompose your schedule here</h5>
        <Link to="/schedule">
          <Button
            variant={items?.length ? 'success' : 'secondary'}
            disabled={!items.length}
          >
            Compose
          </Button>
        </Link>
      </div>
      {
        !(user && user.emailVerified)
        && (
          <p className={cn('edit-info')}>
            *Please sign in to edit and save this schedule and the header text above.
          </p>
        )
      }
      <ConstructorTable state={items} />
      { loading === false
        ? (
          <ConstructorComposer
            countries={countries}
            gates={gates}
          />
        )
        : <Spinner className={cn('preloader')} animation="border" />}
    </>
  );
};

export default Constructor;
