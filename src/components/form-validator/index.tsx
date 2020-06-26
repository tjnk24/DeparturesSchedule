import React, { FC } from 'react';
import { Formik } from 'formik';
import capitalize from '@utils/capitalize';

import {
  formikInnerTypes,
  InnerFormProps,
  FormValidatorProps,
} from '@apptypes/components';

import makeSchema from './make-schema';


const FormValidator: FC<FormValidatorProps> = ({
  inputs,
  children,
}) => {
  const schema = makeSchema(inputs);

  const formikInner: formikInnerTypes = ({
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
      onSubmit={console.log}
      validationSchema={schema}
      initialValues={
        inputs.reduce((current, item) => {
          const tempCurrent: { [key: string] : string } = current;
          tempCurrent[item] = '';
          return tempCurrent;
        }, {})
      }
    >
      {formikInner}
    </Formik>
  );
};

export default FormValidator;
