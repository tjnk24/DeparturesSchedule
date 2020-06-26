export type StringObjectType = { [index: string]: string }

export type ValueTypes = {
    country   : string;
    gate      : string;
    hours     : string;
    minutes   : string;
    id        : number;
    isEditing : boolean;
}

export type AppPropsTypes = {
    countries   : string[];
    gates       : { [index: string]: number };
    flagsImages : { [index: string]: string };
    loading     : boolean;
}

export type PayloadType = { [index: string]: string | number | boolean }

export type MixedValueTypes = ValueTypes | PayloadType;

type ValuesTypes = { [key: string]: string }

export type InnerFormProps = {
  name        : string;
  placeholder : string;
  type        : string;
  labelText   : string;
  value       : string;
  onChange    : (e: React.ChangeEvent<EventTarget & HTMLInputElement>) => void;
  onBlur      : (e: React.FocusEvent<HTMLInputElement>) => void;
  errors      : string | undefined;
};

export type formikInnerTypes = (
  props: {
    values       : ValuesTypes;
    errors       : ValuesTypes;
    handleChange : (e: React.ChangeEvent<EventTarget & HTMLInputElement>) => void;
    handleBlur   : (e: React.FocusEvent<HTMLInputElement>) => void;
    handleSubmit : (e: React.FormEvent<HTMLFormElement>) => void;
  }
) => JSX.Element

export type FormValidatorProps = {
  inputs   : string[];
  children : (
    props: {
      inputProps  : { [key: string]: InnerFormProps };
      handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    },
  ) => React.ReactElement;
}
