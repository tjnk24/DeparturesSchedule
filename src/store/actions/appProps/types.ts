import { AppPropsState } from '@store/reducers/appProps/types';
import {
  FETCH_APP_PROPS_ERROR,
  FETCH_APP_PROPS_START,
  FETCH_APP_PROPS_SUCCESS,
} from '../constants';

export type FetchPropsStart = {
  type: typeof FETCH_APP_PROPS_START;
  payload: {
    path: string;
  };
}

type FetchPropsSuccess = {
  type: typeof FETCH_APP_PROPS_SUCCESS;
  payload: AppPropsState;
}

type FetchPropsError = {
  type: typeof FETCH_APP_PROPS_ERROR;
  payload: string;
}

export type FetchPropsActions = FetchPropsStart | FetchPropsSuccess | FetchPropsError;
