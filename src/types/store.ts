import { MixedValueTypes, AppPropsTypes } from '@apptypes/components';

type ActionType<T> = {
    type: string;
    payload: T;
}

type StateType = {
  constructorState: MixedValueTypes[];
  appPropsState: AppPropsTypes;
}

export type ConstructorReducerTypes = (
  state: MixedValueTypes[],
  action: ActionType<MixedValueTypes>
) => MixedValueTypes[];

export type appPropsReducerTypes = (
  state: AppPropsTypes,
  action: ActionType<AppPropsTypes>
) => AppPropsTypes

export type ContextTypes = {
  state: StateType;
  dispatch: React.Dispatch<ActionType<MixedValueTypes>>;
}
