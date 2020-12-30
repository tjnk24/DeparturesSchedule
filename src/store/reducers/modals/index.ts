import { Reducer } from 'redux';
import {
  LOGIN,
  SIGN_UP,
  FORGOT_PASS,
  RESET_PASS,
  EMAIL_VERIFY,
  MESSAGE,
  CLOSE_MODAL,
} from '@store/actions/constants';
import { ModalsActions } from '@store/actions/modals/types';
import { ModalsState } from './types';

const initialState: ModalsState = {
  route: undefined,
  message: undefined,
  actionCode: undefined,
};

const modalsReducer: Reducer<ModalsState, ModalsActions> = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
    case SIGN_UP:
    case FORGOT_PASS:
    case EMAIL_VERIFY:
    case CLOSE_MODAL:
      return {
        ...state,
        route: action.type,
      };
    case MESSAGE:
      return {
        ...state,
        route: action.type,
        message: action.payload,
      };
    case RESET_PASS: {
      const { actionCode } = action.payload;
      return {
        ...state,
        route: action.type,
        actionCode,
      };
    }
    default:
      return state;
  }
};

export default modalsReducer;
