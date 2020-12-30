import {
  CLOSE_MODAL,
  EMAIL_VERIFY,
  FORGOT_PASS,
  LOGIN,
  MESSAGE,
  RESET_PASS,
  SIGN_UP,
} from '../constants';

export type ResetPassPayload = {
  actionCode: string;
}

export type MessagePayload = {
  title       : string;
  messageText : string;
}

export type ShowLogin = {
  type: typeof LOGIN;
}

export type ShowSignUp = {
  type: typeof SIGN_UP;
}

export type ShowForgotPass = {
  type: typeof FORGOT_PASS;
}

export type ShowResetPass = {
  type: typeof RESET_PASS;
  payload: ResetPassPayload;
}

export type ShowEmailVerify = {
  type: typeof EMAIL_VERIFY;
}

export type ShowMessage = {
  type: typeof MESSAGE;
  payload: MessagePayload;
}

export type CloseModal = {
  type: typeof CLOSE_MODAL;
}

export type ModalsActions = (
  ShowLogin
  | ShowSignUp
  | ShowForgotPass
  | ShowResetPass
  | ShowEmailVerify
  | ShowMessage
  | CloseModal
)
