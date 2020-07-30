import { FormInnerProps } from '@apptypes/components';

type RepeatPassProps = {
  inputType       : string;
  editing         : boolean;
  repeatPassProps : FormInnerProps | null;
  readOnly        : boolean;
  message         : string;
}

export default RepeatPassProps;
