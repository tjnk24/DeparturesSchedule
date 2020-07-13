import { MixedValueTypes, AppPropsTypes, AuthUserTypes } from '@apptypes/components';

export type ActionType<T> = {
    type: string;
    payload?: T;
}

type StateType = {
  constructorState : MixedValueTypes[];
  appPropsState    : AppPropsTypes;
  authUserState    : AuthUserTypes;
}

export type ConstructorReducerTypes = (
  state: MixedValueTypes[],
  action: ActionType<MixedValueTypes>
) => MixedValueTypes[];

export type appPropsReducerTypes = (
  state: AppPropsTypes,
  action: ActionType<AppPropsTypes>
) => AppPropsTypes;

export type authUserReducerTypes = (
  state: AuthUserTypes,
  action: ActionType<AuthUserTypes>
) => AuthUserTypes;

export type ContextTypes = {
  state: StateType;
  dispatch: React.Dispatch<ActionType<MixedValueTypes>>;
}
