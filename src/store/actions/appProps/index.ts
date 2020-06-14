import { AxiosResponse } from 'axios';
import axios from '@utils/axios';

import { AppPropsTypes } from '@apptypes/components';
import {
  FetchPropsStartTypes,
  FetchPropsSuccessTypes,
  FetchPropsErrorTypes,
  FetchPropsTypes,
} from './types';

import {
  FETCH_APP_PROPS_START,
  FETCH_APP_PROPS_SUCCESS,
  FETCH_APP_PROPS_ERROR,
} from '../constants';

const fetchPropsStart: FetchPropsStartTypes = () => ({
  type: FETCH_APP_PROPS_START,
});

const fetchPropsSuccess: FetchPropsSuccessTypes = (appProps) => ({
  type: FETCH_APP_PROPS_SUCCESS,
  payload: appProps,
});

const fetchPropsError: FetchPropsErrorTypes = (error) => ({
  type: FETCH_APP_PROPS_ERROR,
  payload: error,
});

const fetchProps: FetchPropsTypes = async (dispatch, path)  => {
  dispatch(fetchPropsStart());
  try {
    const appProps: AxiosResponse<AppPropsTypes> = await axios.get(path);
    dispatch(fetchPropsSuccess(appProps.data));
  } catch (error) {
    dispatch(fetchPropsError(error));

    throw new Error(error);
  }
};

export default fetchProps;
