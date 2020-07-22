export type StringObjectType = { [key: string]: string }

export type ValueTypes = {
    country   : string;
    gate      : string;
    hours     : string;
    minutes   : string;
    id        : number;
    isEditing : boolean;
}

export type FormValidationTypes = { [key: string]: string };

export type AppPropsTypes = {
    countries   : string[];
    gates       : { [index: string]: number };
    flagsImages : { [index: string]: string };
    loading     : boolean;
}

export type AuthUserTypes = {
    authUserLoaded : boolean;
    user           : firebase.User | null;
}

export type PayloadType = { [index: string]: string | number | boolean }

export type MixedValueTypes = ValueTypes | PayloadType;

export type FormInnerProps = {
  name          : string;
  placeholder   : string;
  type          : string;
  labeltext     : string;
  value         : string;
  onChange      : (e: React.ChangeEvent<EventTarget & HTMLInputElement>) => void;
  onBlur        : (e: React.FocusEvent<HTMLInputElement>) => void;
  errors        : string | undefined;
  initvalue? : string;
};

export type FormikInnerTypes = (
  props: {
    values       : StringObjectType;
    errors       : StringObjectType;
    handleChange : (e: React.ChangeEvent<EventTarget & HTMLInputElement>) => void;
    handleBlur   : (e: React.FocusEvent<HTMLInputElement>) => void;
    handleSubmit : (e: React.FormEvent<HTMLFormElement>) => void;
  }
) => JSX.Element

export type FormValidatorProps = {
  inputs           : string[];
  action?          : (payload: FormValidationTypes) => void;
  startValues?     : StringObjectType;
  requirePassword? : boolean;
  children         : (
    props: {
      inputProps  : { [key: string]: FormInnerProps };
      handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    },
  ) => React.ReactElement;
}
