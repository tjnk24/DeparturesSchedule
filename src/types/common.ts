export type StringObjectType = { [key: string]: string }

export type Item = {
    [index: string]: string | number | boolean | undefined;
    country   : string;
    gate      : string;
    hours     : string;
    minutes   : string;
    id?        : number;
    isEditing? : boolean;
}

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
