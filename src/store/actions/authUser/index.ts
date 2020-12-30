import { AuthUserState } from '@store/reducers/authUser/types';
import { AUTH_USER_UPDATE } from '../constants';
import { AuthUserUpdate } from './types';

const authUserUpdate = (user: AuthUserState['user']): AuthUserUpdate => ({
  type: AUTH_USER_UPDATE,
  payload: {
    authUserLoaded: true,
    user,
  },
});

export default authUserUpdate;
