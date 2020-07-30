import { Dispatch, SetStateAction } from 'react';

type InputBlockProps = {
  type           : string;
  errors         : string | undefined;
  message        : string;
  inputType      : string;
  editing        : boolean;
  readOnly       : boolean;
  isPassword     : boolean;
  setInputType   : Dispatch<SetStateAction<string>>;
  validationRest : {
      name: string;
      value: string;
      placeholder: string;
      initvalue?: string | undefined;
      onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
      onChange: (e: React.ChangeEvent<EventTarget & HTMLInputElement>) => void;
  };
};

export default InputBlockProps;
