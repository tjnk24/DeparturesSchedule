import { Reducer } from 'redux';
import { AUTH_USER_UPDATE } from '@store/actions/constants';
import { AuthUserActions } from '@store/actions/authUser/types';
import { AuthUserState } from './types';

const initialState: AuthUserState = {
  authUserLoaded: false,
  user: null,
};

const authUserReducer: Reducer<AuthUserState, AuthUserActions> = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_USER_UPDATE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default authUserReducer;
