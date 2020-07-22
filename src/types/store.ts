import { MixedValueTypes, AppPropsTypes, AuthUserTypes } from '@apptypes/components';

export type ActionType<T> = {
    type: string;
    payload?: T;
}

type ModalsStateType = {
  route   : string;
  message : MessagePayloadType | undefined;
}

type StateType = {
  constructorState : MixedValueTypes[];
  appPropsState    : AppPropsTypes;
  authUserState    : AuthUserTypes;
  modalsState      : ModalsStateType;
}

export type MessagePayloadType = {
  title: string;
  messageText: string;
}

export type ConstructorReducerTypes = (
  state  : MixedValueTypes[],
  action : ActionType<MixedValueTypes>
) => MixedValueTypes[];

export type AppPropsReducerTypes = (
  state  : AppPropsTypes,
  action : ActionType<AppPropsTypes>
) => AppPropsTypes;

export type AuthUserReducerTypes = (
  state  : AuthUserTypes,
  action : ActionType<AuthUserTypes>
) => AuthUserTypes;

export type ModalsReducerTypes = (
  state  : ModalsStateType,
  action : ActionType<MessagePayloadType>
) => ModalsStateType;

export type ContextTypes = {
  state: StateType;
  dispatch: React.Dispatch<ActionType<MixedValueTypes>>;
}
