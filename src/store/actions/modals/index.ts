import {
  LOGIN,
  SIGN_UP,
  FORGOT_PASS,
  EMAIL_VERIFY,
  MESSAGE,
  CLOSE_MODAL,
  RESET_PASS,
} from '../constants';
import ModalsActionType from './types';

export const showLogin: ModalsActionType = () => ({
  type: LOGIN,
});

export const showSignUp: ModalsActionType = () => ({
  type: SIGN_UP,
});

export const showForgotPass: ModalsActionType = () => ({
  type: FORGOT_PASS,
});

export const showResetPass: ModalsActionType = (payload) => ({
  type: RESET_PASS,
  payload,
});

export const showEmailVerify: ModalsActionType = () => ({
  type: EMAIL_VERIFY,
});

export const showMessage: ModalsActionType = (payload) => ({
  type: MESSAGE,
  payload,
});

export const closeModal: ModalsActionType = () => ({
  type: CLOSE_MODAL,
});
