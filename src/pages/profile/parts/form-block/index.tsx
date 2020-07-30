import React, { FC, useState } from 'react';
import Form from 'react-bootstrap/esm/Form';
import Row from 'react-bootstrap/esm/Row';

import FormValidator from '@components/form-validator';
import { FormValidationTypes } from '@apptypes/components';
import RepeatPass from './parts/repeat-pass';
import InputBlock from './parts/input-block';
import ButtonBlock from './parts/button-block';

import { FormBlockProps, SubmitActionType, ResetFormType } from './types';

const FormBlock: FC<FormBlockProps> = ({
  type,
  action,
  reauth,
  disabled,
  startValue,
  startMessage,
}) => {
  const [message, setMessage] = useState('');
  const [editing, setEditing] = useState(false);
  const [readOnly, setReadOnly] = useState(true);
  const [formPayload, setFormPayload] = useState({});
  const [showPopover, setShowPopover] = useState(false);
  const [resetFormHandler, setResetFormHandler] = useState<ResetFormType | null | undefined>(null);

  const validationInputs = type !== 'password'
    ? [type]
    : ['password', 'repeatPassword'];

  const isPassword = type === 'password';

  const [inputType, setInputType] = useState(isPassword ? 'password' : type);

  const submitAction: SubmitActionType = (payload, { resetForm }) => {
    const isSameValue = payload[type] === startValue?.[type];

    if (!isSameValue && !reauth) {
      action(payload, setMessage, setEditing);
    } else if (!isSameValue && reauth) {
      setResetFormHandler(() => resetForm);
      setFormPayload(payload);
      setReadOnly(true);
      setShowPopover(true);
    } else {
      setMessage('Sorry, there is nothing to update.');
    }
  };

  const authSubmitAction = (popoverPayload: FormValidationTypes) => {
    action(
      formPayload,
      setMessage,
      setEditing,
      setShowPopover,
      popoverPayload,
      resetFormHandler,
    );
  };

  return (
    <FormValidator
      inputs={validationInputs}
      action={submitAction}
      startValues={startValue}
    >
      {({ inputProps, handleSubmit }) => {
        const {
          type: validationType,
          errors,
          labeltext,
          ...validationRest
        } = inputProps[type];

        let repeatPassProps = null;

        if (type === 'password') {
          repeatPassProps = inputProps.repeatPassword;
          delete repeatPassProps.type;
        }

        const InputBlockProps = {
          type,
          errors,
          message,
          editing,
          readOnly,
          inputType,
          isPassword,
          setInputType,
          validationRest,
        };

        const ButtonBlockProps = {
          type,
          reauth,
          editing,
          disabled,
          setEditing,
          setMessage,
          setReadOnly,
          showPopover,
          startMessage,
          authSubmitAction,
        };

        const RepeatBlockProps = {
          editing,
          message,
          readOnly,
          inputType,
          repeatPassProps,
        };

        return (
          <Form
            onSubmit={handleSubmit}
            noValidate
          >
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                { labeltext }
              </Form.Label>
              <InputBlock {...InputBlockProps} />
              <ButtonBlock {...ButtonBlockProps} />
            </Form.Group>
            {
              type === 'password'
              && (
                <RepeatPass {...RepeatBlockProps} />
              )
            }
          </Form>
        );
      }}
    </FormValidator>
  );
};

export default FormBlock;
