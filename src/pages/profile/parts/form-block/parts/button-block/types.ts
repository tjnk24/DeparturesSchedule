import { Dispatch, SetStateAction } from 'react';
import { FormValidationTypes } from '@apptypes/components';

type ButtonBlockProps = {
  type             : string;
  reauth           : boolean | undefined;
  editing          : boolean;
  disabled         : boolean;
  showPopover      : boolean;
  startMessage?    : string;
  authSubmitAction : (popoverPayload: FormValidationTypes) => void;
  setEditing       : Dispatch<SetStateAction<boolean>>;
  setReadOnly      : Dispatch<SetStateAction<boolean>>;
  setMessage       : Dispatch<SetStateAction<string>>;
}

export default ButtonBlockProps;
