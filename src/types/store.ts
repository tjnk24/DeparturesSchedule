export type ActionType<T> = {
    type: string;
    payload?: T;
}

// type ModalsStateType = {
//   route      : string;
//   message    : MessagePayloadType;
//   actionCode : string;
// }

export type ResetPassPayloadType = {
  actionCode: string;
}

export type MessagePayloadType = {
  title       : string;
  messageText : string;
}

// export type ModalsReducerTypes = (
//   state  : ModalsStateType,
//   action : ActionType<MessagePayloadType | ResetPassPayloadType>
// ) => ModalsStateType;

export type PayloadType = { [index: string]: string | number | boolean }

// export type ContextTypes = {
//   state: StateType;
//   dispatch: React.Dispatch<
//       ActionType<MixedValueTypes['items'] | boolean | string | PayloadType
//   >>;
// }
