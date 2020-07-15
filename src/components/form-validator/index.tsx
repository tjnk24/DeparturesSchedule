import React, { FC } from 'react';
import { Formik, yupToFormErrors, validateYupSchema } from 'formik';
import { capitalize } from '@utils/helpers';

import {
  StringObjectType,
  FormikInnerTypes,
  FormInnerProps,
  FormValidatorProps,
  FormValidationTypes,
} from '@apptypes/components';

import makeSchema from './make-schema';
import { ValidateHandlerTypes } from './types';

const FormValidator: FC<FormValidatorProps> = ({
  inputs,
  action,
  startValues,
  requirePassword,
  children,
}) => {
  const schema = makeSchema(inputs, requirePassword);

  const getInitialValues = () => {
    let tempInputs = inputs.reduce((current, item) => {
      const tempCurrent: StringObjectType & FormValidationTypes = current;
      tempCurrent[item] = '';
      return tempCurrent;
    }, {} as FormValidationTypes);

    if (startValues) {
      tempInputs = {
        ...tempInputs,
        ...startValues,
      };
    }

    return tempInputs;
  };

  const validate = (values: ValidateHandlerTypes) => {
    try {
      validateYupSchema<ValidateHandlerTypes>(values, schema, true, { requirePassword });
    } catch (err) {
      return yupToFormErrors(err);
    }
    return {};
  };

  const formikInner: FormikInnerTypes = ({
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  }) => {
    const inputProps = inputs.reduce((current, item) => {
      const tempCurrent: { [key: string] : FormInnerProps } = current;
      tempCurrent[item] = {
        name        : item,
        placeholder : `Enter ${item}`,
        type        : 'text',
        labelText   : capitalize(item),
        value       : values[item],
        errors      : errors[item],
        onChange    : handleChange,
        onBlur      : handleBlur,
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
      initialValues={getInitialValues()}
      // validationSchema={schema}
      validate={validate}
    >
      {formikInner}
    </Formik>
  );
};

export default FormValidator;
