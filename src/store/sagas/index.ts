import { all } from 'redux-saga/effects';
import fetchPropsActionWatcher from './fetch-props';

export default function* rootSaga() {
  yield all([
    fetchPropsActionWatcher(),
  ]);
}
