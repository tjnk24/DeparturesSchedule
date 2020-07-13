import {
  AUTH_USER_UPDATE,
  AUTH_USER_REMOVE,
} from '../constants';
import { authUserUpdateTypes, authUserRemoveTypes } from './types';

export const authUserUpdate: authUserUpdateTypes = (user) => ({
  type: AUTH_USER_UPDATE,
  payload: {
    authUserLoaded: true,
    user,
  },
});

// TODO: это нужно?
export const authUserRemove: authUserRemoveTypes = () => ({
  type: AUTH_USER_REMOVE,
  payload: {
    user: null,
  },
});
