import { all } from 'redux-saga/effects';
import fetchPropsActionWatcher from './fetch-props';
import { RootSagaReturnType } from './types';

export default function* rootSaga(): RootSagaReturnType {
  yield all([
    fetchPropsActionWatcher(),
  ]);
}
