import {
  FETCH_APP_PROPS_ERROR,
  FETCH_APP_PROPS_START,
  FETCH_APP_PROPS_SUCCESS,
} from '@store/actions/constants';
import { ForkEffect, put, takeLatest } from 'redux-saga/effects';
import { database } from '@utils/firebase';
import { FetchPropsStart } from '@store/actions/appProps/types';

function* fetchProps(action: FetchPropsStart) {
  const { path } = action.payload;

  try {
    const snapshotValue = yield database
      .ref(path)
      .once('value')
      .then((snapshot) => snapshot.val());

    yield put({
      type: FETCH_APP_PROPS_SUCCESS,
      payload: snapshotValue,
    });
  } catch (error) {
    yield put({
      type: FETCH_APP_PROPS_ERROR,
      payload: error.message,
    });

    throw new Error(error.message);
  }
}

export default function* fetchPropsActionWatcher(): Generator<ForkEffect<never>, void, unknown> {
  yield takeLatest(FETCH_APP_PROPS_START, fetchProps);
}
