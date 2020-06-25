import React, { FC } from 'react';
import { Formik } from 'formik';
import capitalize from '@utils/capitalize';
import makeSchema from './make-schema';

import { ModalProps } from '../../types';
import { formikInnerTypes } from '../types';

const FormValidator: FC<ModalProps> = ({
  inputs,
  children,
}) => {
  const schema = makeSchema(inputs);

  const formikInner: formikInnerTypes = (props) => {
    const {
      values,
      errors,
      handleChange,
      handleBlur,
      handleSubmit,
    } = props;

    const inputProps = inputs.reduce((current, item) => {
      const tempCurrent = current;
      tempCurrent[item] = {
        name         : item,
        placeholder  : `Enter ${item}`,
        type         : 'text',
        labelText    : capitalize(item),
        values       : values[item],
        errors       : errors[item],
        handleChange,
        handleBlur,
      };

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
          const tempCurrent = {};
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
