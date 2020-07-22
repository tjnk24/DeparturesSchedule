import { MessagePayloadType } from '@apptypes/store';

type ModalsActionType = (
  payload?: MessagePayloadType
) => {
  type     : string;
  payload? : MessagePayloadType;
}

export default ModalsActionType;
