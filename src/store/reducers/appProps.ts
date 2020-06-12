import { appPropsReducerTypes } from '@apptypes/store';
import {
  FETCH_APP_PROPS_START,
  FETCH_APP_PROPS_SUCCESS,
  FETCH_APP_PROPS_ERROR,
} from '@store/actions/constants';

// let appPropsLocalState = {};

const appPropsReducer: appPropsReducerTypes = (state, action) => {
  switch (action.type) {
    case FETCH_APP_PROPS_START:
      return {
        ...state,
        loading: true,
      };
      // return appPropsLocalState;

    case FETCH_APP_PROPS_SUCCESS:
      return {
        ...state,
        ...action.payload,
        loading: false,
      };
      // return appPropsLocalState;

    case FETCH_APP_PROPS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      // return appPropsLocalState;

    default:
      return state;
  }
};

export default appPropsReducer;
