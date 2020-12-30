import { AuthUserState } from '@store/reducers/authUser/types';
import { AUTH_USER_UPDATE } from '../constants';

export type AuthUserUpdate = {
    type: typeof AUTH_USER_UPDATE;
    payload: AuthUserState;
}

export type AuthUserActions = AuthUserUpdate;
