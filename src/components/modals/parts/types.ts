import * as Yup from 'yup';

type ValuesTypes = { [key: string]: string }

export type InnerFormProps = {
  name         : string;
  placeholder  : string;
  type         : string;
  labelText    : string;
  values       : string;
  handleChange : (e: React.ChangeEvent<EventTarget & HTMLInputElement>) => void;
  handleBlur   : (e: React.FocusEvent<HTMLInputElement>) => void;
  errors       : string | undefined;
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

export type YupShapeTypes = { [key: string] : Yup.StringSchema<string | undefined> }

export type SchemaTypes = (
  inputs: string[]
) => Yup.ObjectSchema<Record<string, unknown> | undefined>
