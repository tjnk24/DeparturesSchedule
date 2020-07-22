import combineReducers from 'react-combine-reducers';
import { constructorReducer, constructorLocalState } from './constructor';
import appPropsReducer from './appProps';
import { authUserReducer, authUserInitial } from './authUser';
import modalsReducer from './modalsReducer';

const [combinedReducer, initialState] = combineReducers({
  constructorState: [constructorReducer, constructorLocalState || []],
  appPropsState   : [appPropsReducer, {}],
  authUserState   : [authUserReducer, authUserInitial],
  modalsState     : [modalsReducer, { route: '' }],
});

export { combinedReducer, initialState };
