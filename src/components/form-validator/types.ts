import * as Yup from 'yup';
import { SubmitActionType } from '@pages/profile/parts/form-block/types';
import { StringObjectType, FormInnerProps } from '@apptypes/common';

export type YupShapeTypes = {
  [key: string] : Yup.StringSchema<string | undefined>;
}

export type SchemaTypes = (
  inputs: string[]
) => Yup.ObjectSchema<Record<string, unknown> | undefined>

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
  action?          : SubmitActionType;
  startValues?     : StringObjectType;
  requirePassword? : boolean;
  children         : (
    props: {
      inputProps  : { [key: string]: FormInnerProps };
      handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    },
  ) => React.ReactElement;
}
