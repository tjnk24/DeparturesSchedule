import { combineReducers } from 'redux';
import appPropsReducer from '../appProps';
import authUserReducer from '../authUser';
import { constructorReducer } from '../constructor';
import modalsReducer from '../modals';

const rootReducer = combineReducers({
  appProps: appPropsReducer,
  authUser: authUserReducer,
  constructorState: constructorReducer,
  modals: modalsReducer,
});

export default rootReducer;
