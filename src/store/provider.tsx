import React, { FC, useEffect, useReducer } from 'react';
import api from '@utils/api';
import { ContextTypes } from '@apptypes/store';

import fetchProps from './actions/appProps';
import { combinedReducer, initialState } from './reducers/rootReducer';

export const Context = React.createContext<ContextTypes>({} as ContextTypes);

export const Provider: FC = (props): JSX.Element => {
  const [state, dispatch] = useReducer(combinedReducer, initialState);

  const { children } = props;

  useEffect(() => {
    fetchProps(dispatch, api.appProps);
  }, []);

  return (
    <Context.Provider value={{ state, dispatch }}>
      { children }
    </Context.Provider>
  );
};
