import { Dispatch, SetStateAction } from 'react';
import { StringObjectType } from '@apptypes/common';

type ButtonBlockProps = {
  type             : string;
  reauth           : boolean | undefined;
  editing          : boolean;
  disabled         : boolean;
  showPopover      : boolean;
  startMessage?    : string;
  authSubmitAction : (popoverPayload: StringObjectType) => void;
  setEditing       : Dispatch<SetStateAction<boolean>>;
  setReadOnly      : Dispatch<SetStateAction<boolean>>;
  setMessage       : Dispatch<SetStateAction<string>>;
}

export default ButtonBlockProps;
