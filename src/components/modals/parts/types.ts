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
