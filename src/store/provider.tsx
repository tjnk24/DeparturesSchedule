import React, { FC, useEffect, useReducer } from 'react';
import { ContextTypes } from '@apptypes/store';
import { combinedReducer, initialState } from './reducers/rootReducer';
import fetchProps from './actions/appProps';

export const Context = React.createContext<ContextTypes>({} as ContextTypes);

export const Provider: FC = (props): JSX.Element => {
  const [state, dispatch] = useReducer(combinedReducer, initialState);

  const { children } = props;

  useEffect(() => {
    fetchProps(dispatch);
  }, []);

  return (
    <Context.Provider value={{ state, dispatch }}>
      { children }
    </Context.Provider>
  );
};
