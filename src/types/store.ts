import {
  ValueTypes,
} from '@apptypes/common';

export type AppPropsTypes = {
  countries   : string[];
  gates       : { [index: string]: number };
  flagsImages : { [index: string]: string };
  loading     : boolean;
}

export type MixedValueTypes = {
  items: ValueTypes[];
  isLoggedIn: boolean | null;
};

export type ActionType<T> = {
    type: string;
    payload?: T;
}

export type AuthUserTypes = {
  authUserLoaded : boolean;
  user           : firebase.User | null;
}

type ModalsStateType = {
  route      : string;
  message    : MessagePayloadType;
  actionCode : string;
}

type StateType = {
  constructorState : MixedValueTypes;
  appPropsState    : AppPropsTypes;
  authUserState    : AuthUserTypes;
  modalsState      : ModalsStateType;
}

export type ResetPassPayloadType = {
  actionCode: string;
}

export type MessagePayloadType = {
  title       : string;
  messageText : string;
}

export type ConstructorReducerTypes = (
  state  : MixedValueTypes,
  action : ActionType<ValueTypes | boolean>
) => MixedValueTypes | null;

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
  action : ActionType<MessagePayloadType | ResetPassPayloadType>
) => ModalsStateType;

export type PayloadType = { [index: string]: string | number | boolean }

export type ContextTypes = {
  state: StateType;
  dispatch: React.Dispatch<ActionType<MixedValueTypes['items'] | boolean | PayloadType>>;
}
