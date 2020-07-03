import { database } from '@utils/firebase';

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
    await database
      .ref(path)
      .once('value')
      .then((snapshot) => {
        dispatch(fetchPropsSuccess(snapshot.val()));
      });
  } catch (error) {
    dispatch(fetchPropsError(error));

    throw new Error(error);
  }
};

export default fetchProps;
