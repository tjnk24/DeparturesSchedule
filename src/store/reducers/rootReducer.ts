import combineReducers from 'react-combine-reducers';
import { constructorReducer, constructorLocalState } from './constructor';
import appPropsReducer from './appProps';

const [combinedReducer, initialState] = combineReducers({
  constructorState: [constructorReducer, constructorLocalState || []],
  appPropsState   : [appPropsReducer, {}],
});

export { combinedReducer, initialState };
