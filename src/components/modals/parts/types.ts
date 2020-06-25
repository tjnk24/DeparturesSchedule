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

type ValuesTypes = {
  username       : string;
  email          : string;
  password       : string;
  repeatPassword : string;
}

export type formikInnerTypes = (
  props: {
    values: ValuesTypes;
    errors: ValuesTypes;
    handleChange : (e: React.ChangeEvent<EventTarget & HTMLInputElement>) => void;
    handleBlur   : (e: React.FocusEvent<HTMLInputElement>) => void;
    handleSubmit : (e: React.FormEvent<HTMLFormElement>) => void;
  }
) => JSX.Element
