import {
  AUTH_USER_UPDATE,
  AUTH_USER_REMOVE,
} from '@store/actions/constants';
import { authUserReducerTypes } from '@apptypes/store';

export const authUserInitial = {
  authUserLoaded: false,
  user: null,
};

export const authUserReducer: authUserReducerTypes = (state, action) => {
  switch (action.type) {
    case AUTH_USER_UPDATE:
      return {
        ...state,
        ...action.payload,
      };
    case AUTH_USER_REMOVE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default authUserReducer;
