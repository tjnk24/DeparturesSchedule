import React, { FC, useContext } from 'react';
import ConstructorTable from '@components/constructor-table';
import ConstructorComposer from '@components/constructor-composer';

import { ConstructorContext } from '@store/constructor-reducer';

import ConstructedHandlerType from '@apptypes/pages';

import { ValueTypes } from '@apptypes/components';

import airportApi from '@mocks/airportApi.json';

import classnames from 'classnames/bind';
import style from './style.scss';

import bootstrap from '@bootstrap-module';


const cn = classnames.bind(style);

const Constructor: FC<ConstructedHandlerType> = ({ setConstructed }): JSX.Element => {
  const { state } = useContext(ConstructorContext);

  return (
    <div className={cn('constructor')}>
      <div className={cn('constructor__heading')}>
        <h5>Сompose your schedule here</h5>
        <button
          type="button"
          className={cn(
            bootstrap.btn,
            bootstrap[state.length ? 'btn-success' : 'btn-secondary'],
          )}
          disabled={!state.length}
          onClick={() => setConstructed(true)}
        >
                    Compose
        </button>
      </div>
      <ConstructorTable state={state as ValueTypes[]} />
      <ConstructorComposer
        countries={airportApi.countries}
        gates={airportApi.gates}
      />
    </div>
  );
};

export default Constructor;
