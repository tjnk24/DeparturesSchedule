import { appPropsReducerPropTypes } from '@apptypes/store';
import {
  FETCH_APP_PROPS_START,
  FETCH_APP_PROPS_SUCCESS,
  FETCH_APP_PROPS_ERROR,
} from '@store/actions/constants';

let appPropsLocalState = {};

const appPropsReducer: appPropsReducerPropTypes = (state, action) => {
  switch (action.type) {
    case FETCH_APP_PROPS_START:
      appPropsLocalState = {
        ...state,
        loading: true,
      };
      return appPropsLocalState;

    case FETCH_APP_PROPS_SUCCESS:
      appPropsLocalState = {
        ...state,
        ...action.appProps,
        loading: false,
      };
      return appPropsLocalState;

    case FETCH_APP_PROPS_ERROR:
      appPropsLocalState = {
        ...state,
        loading: false,
        error: action.error,
      };
      return appPropsLocalState;

    default:
      return state;
  }
};

export default appPropsReducer;
