import { Reducer } from 'redux';
import {
  FETCH_APP_PROPS_START,
  FETCH_APP_PROPS_SUCCESS,
  FETCH_APP_PROPS_ERROR,
} from '@store/actions/constants';

import { FetchPropsActions } from '@store/actions/appProps/types';
import { AppPropsState } from './types';

const initialState: AppPropsState = {
  countries: [],
  gates: {},
  flagsImages: {},
  loading: false,
  error: '',
};

const appPropsReducer:
  Reducer<AppPropsState, FetchPropsActions> = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_APP_PROPS_START:
        return {
          ...state,
          loading: true,
        };

      case FETCH_APP_PROPS_SUCCESS:
        return {
          ...state,
          ...action.payload,
          loading: false,
        };

      case FETCH_APP_PROPS_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };

      default:
        return state;
    }
  };

export default appPropsReducer;
