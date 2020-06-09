import { MixedValueTypes } from '@apptypes/components';

type ActionType = {
    type: string;
    payload: MixedValueTypes;
}

export type ConstructorReducerProps = (
  state: MixedValueTypes[],
  action: ActionType
) => MixedValueTypes[];

export type ContextTypes = {
  state: MixedValueTypes[];
  dispatch: React.Dispatch<ActionType>;
}
