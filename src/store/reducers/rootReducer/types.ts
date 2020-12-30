import { CombinedState } from 'redux';
import { AppPropsState } from '../appProps/types';
import { AuthUserState } from '../authUser/types';
import { ConstructorState } from '../constructor/types';
import { ModalsState } from '../modals/types';

export type RootState = CombinedState<{
  appProps: AppPropsState;
  authUser: AuthUserState;
  constructor: ConstructorState;
  modals: ModalsState;
}>;
