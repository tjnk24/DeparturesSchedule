import { AUTH_USER_UPDATE } from '../constants';
import { authUserUpdateTypes } from './types';

const authUserUpdate: authUserUpdateTypes = (user) => ({
  type: AUTH_USER_UPDATE,
  payload: {
    authUserLoaded: true,
    user,
  },
});

export default authUserUpdate;
