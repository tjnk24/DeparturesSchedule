import React, { FC, useEffect, useReducer } from 'react';
import api from '@utils/api';
import { auth } from '@utils/firebase';
import { ContextTypes } from '@apptypes/store';

import fetchProps from './actions/appProps';
import { authUserUpdate } from './actions/authUser';
import { combinedReducer, initialState } from './reducers/rootReducer';

export const Context = React.createContext<ContextTypes>({} as ContextTypes);

export const Provider: FC = (props): JSX.Element => {
  const [state, dispatch] = useReducer(combinedReducer, initialState);

  const { children } = props;

  useEffect(() => {
    fetchProps(dispatch, api.appProps);

    const listener = auth.onAuthStateChanged((user) => {
      dispatch(authUserUpdate(user));
      console.log('provider', user);
    });
    return () => {
      listener();
    };
  }, []);

  return (
    <Context.Provider value={{ state, dispatch }}>
      { children }
    </Context.Provider>
  );
};
