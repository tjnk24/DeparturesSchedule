import {
  LOGIN,
  SIGN_UP,
  FORGOT_PASS,
  EMAIL_VERIFY,
  MESSAGE,
  CLOSE_MODAL,
  RESET_PASS,
} from '../constants';
import {
  CloseModal,
  MessagePayload,
  ResetPassPayload,
  ShowEmailVerify,
  ShowForgotPass,
  ShowLogin,
  ShowMessage,
  ShowResetPass,
  ShowSignUp,
} from './types';

export const showLogin = (): ShowLogin => ({
  type: LOGIN,
});

export const showSignUp = (): ShowSignUp => ({
  type: SIGN_UP,
});

export const showForgotPass = (): ShowForgotPass => ({
  type: FORGOT_PASS,
});

export const showResetPass = (payload: ResetPassPayload): ShowResetPass => ({
  type: RESET_PASS,
  payload,
});

export const showEmailVerify = (): ShowEmailVerify => ({
  type: EMAIL_VERIFY,
});

export const showMessage = (payload: MessagePayload): ShowMessage => ({
  type: MESSAGE,
  payload,
});

export const closeModal = (): CloseModal => ({
  type: CLOSE_MODAL,
});
