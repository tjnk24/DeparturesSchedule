import { MixedValueTypes } from '@apptypes/components';

type ActionType<T> = {
    type: string;
    payload: T;
}

export type AppPropsTypes = {
  countries: string[];
  gates: { [index: string]: number };
}

export type ConstructorReducerPropTypes = (
  state: MixedValueTypes[],
  action: ActionType<MixedValueTypes>
) => MixedValueTypes[];

export type appPropsReducerPropTypes = (
  state: AppPropsTypes,
  action: ActionType<AppPropsTypes>
) => AppPropsTypes

export type ContextTypes = {
  state: MixedValueTypes[];
  dispatch: React.Dispatch<ActionType<MixedValueTypes>>;
}
