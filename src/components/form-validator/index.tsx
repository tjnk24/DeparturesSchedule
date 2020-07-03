import React, { FC } from 'react';
import { Formik } from 'formik';
import capitalize from '@utils/capitalize';

import {
  FormikInnerTypes,
  InnerFormProps,
  FormValidatorProps,
  FormValidationTypes,
} from '@apptypes/components';

import makeSchema from './make-schema';

const FormValidator: FC<FormValidatorProps> = ({
  inputs,
  action,
  children,
}) => {
  const schema = makeSchema(inputs);

  const formikInner: FormikInnerTypes = ({
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  }) => {
    const inputProps = inputs.reduce((current, item) => {
      const tempCurrent: { [key: string] : InnerFormProps } = current;
      tempCurrent[item] = {
        name         : item,
        placeholder  : `Enter ${item}`,
        type         : 'text',
        labelText    : capitalize(item),
        value        : values[item],
        errors       : errors[item],
        onChange     : handleChange,
        onBlur       : handleBlur,
      };

      if (item === 'password') {
        tempCurrent[item] = {
          ...tempCurrent[item],
          type: 'password',
        };
      }

      if (item === 'repeatPassword') {
        tempCurrent[item] = {
          ...tempCurrent[item],
          placeholder  : 'Repeat password',
          type         : 'password',
          labelText    : 'Repeat password',
        };
      }

      return tempCurrent;
    }, {});

    return (
      <>
        { children({ inputProps, handleSubmit }) }
      </>
    );
  };

  return (
    <Formik
      onSubmit={action || console.log}
      validationSchema={schema}
      initialValues={
        inputs.reduce((current, item) => {
          const tempCurrent: { [key: string] : string } & FormValidationTypes = current;
          tempCurrent[item] = '';
          return tempCurrent;
        }, {} as FormValidationTypes)
      }
    >
      {formikInner}
    </Formik>
  );
};

export default FormValidator;
