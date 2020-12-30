// import combineReducers from 'react-combine-reducers';
// import { CLOSE_MODAL } from '@store/actions/constants';
// import { constructorReducer, constructorLocalState } from './constructor';
// import appPropsReducer from './appProps';
// import { authUserReducer, authUserInitial } from './authUser';
// import modalsReducer from './modalsReducer';

// const [combinedReducer, initialState] = combineReducers({
//   constructorState: [constructorReducer, constructorLocalState || {}],
//   appPropsState   : [appPropsReducer, {}],
//   authUserState   : [authUserReducer, authUserInitial],
//   modalsState     : [modalsReducer, { route: CLOSE_MODAL }],
// });

// export { combinedReducer, initialState };

import { combineReducers } from 'redux';
import appPropsReducer from '../appProps';
import authUserReducer from '../authUser';
import { constructorReducer } from '../constructor';
import modalsReducer from '../modals';

const rootReducer = combineReducers({
  appProps: appPropsReducer,
  authUser: authUserReducer,
  constructor: constructorReducer,
  modals: modalsReducer,
});

export default rootReducer;
