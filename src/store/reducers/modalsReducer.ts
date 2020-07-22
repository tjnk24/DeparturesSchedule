import {
  LOGIN,
  SIGN_UP,
  FORGOT_PASS,
  EMAIL_VERIFY,
  MESSAGE,
  CLOSE_MODAL,
} from '@store/actions/constants';
import { ModalsReducerTypes } from '@apptypes/store';

const modalsReducer: ModalsReducerTypes = (state, action) => {
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
    default:
      return state;
  }
};

export default modalsReducer;
