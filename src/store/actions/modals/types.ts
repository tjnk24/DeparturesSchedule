import { MessagePayloadType, ResetPassPayloadType } from '@apptypes/store';

type ModalsActionType = (
  payload?: MessagePayloadType | ResetPassPayloadType
) => {
  type     : string;
  payload? : MessagePayloadType | ResetPassPayloadType;
}

export default ModalsActionType;
