/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useState, useRef } from 'react';
import classnames from 'classnames/bind';
import Form from 'react-bootstrap/esm/Form';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/esm/Button';

// TODO: вынести иконки в отдельную директорию
import { ShowPassIcon, HidePassIcon } from '@components/modals/inner-form/icons';
import FormValidator from '@components/form-validator';
import SubmitButton from '@components/submit-button';
import { FormValidationTypes } from '@apptypes/components';
import AuthPopover from '../auth-popover';

import FormBlockProps from './types';

import style from './style.scss';

const cn = classnames.bind(style);

const FormBlock: FC<FormBlockProps> = ({
  type,
  action,
  disabled,
  startValue,
  startMessage,
  reauth,
}) => {
  const [editing, setEditing] = useState(false);
  const [readOnly, setReadOnly] = useState(true);
  const [message, setMessage] = useState('');
  const [showPopover, setShowPopover] = useState(false);
  const [formPayload, setFormPayload] = useState({});

  const buttonRef = useRef<HTMLDivElement | null>(null);

  const validationInputs = type !== 'password'
    ? [type]
    : ['password', 'repeatPassword'];

  const isPassword = type === 'password';

  const [inputType, setInputType] = useState(isPassword ? 'password' : type);

  const showPassHandler = () => {
    inputType === 'password'
      ? setInputType('text')
      : setInputType('password');
  };

  const submitAction = (payload: FormValidationTypes) => {
    const isSameValue = payload[type] === startValue?.[type];

    if (!isSameValue && !reauth) {
      action(payload, setMessage, setEditing);
    } else if (!isSameValue && reauth) {
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

        return (
          <Form
            onSubmit={handleSubmit}
            noValidate
          >
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                { labeltext }
              </Form.Label>
              <Col sm={7} className={cn('input-wrap')}>
                <Form.Control
                  className={isPassword && !!errors ? cn('password-error') : undefined}
                  type={inputType}
                  isInvalid={editing && !!errors}
                  required
                  plaintext={!editing}
                  readOnly={readOnly}
                  {...validationRest}
                />
                {
                  isPassword && editing
                    ? (
                      <button
                        type="button"
                        onClick={showPassHandler}
                      >
                        {
                        inputType === 'password'
                          ? ShowPassIcon
                          : HidePassIcon
                      }
                      </button>
                    )
                    : null
                }
                <Form.Control.Feedback type="invalid">
                  { errors }
                </Form.Control.Feedback>
                {
                  message !== ''
                  && (
                  <Form.Text>
                    { message }
                  </Form.Text>
                  )
                }
              </Col>
              <Col sm={3} className={cn('button-wrap')}>
                {
                  editing
                    ? (
                      <>
                        <div ref={buttonRef}>
                          <SubmitButton
                            disabled={disabled}
                            innerText="Submit!"
                          />
                        </div>
                        { reauth && (
                          <AuthPopover
                            target={buttonRef}
                            show={showPopover}
                            action={authSubmitAction}
                            disabled={disabled}
                          />
                        )}
                      </>
                    )
                    : (
                      <Button
                        variant="secondary"
                        onClick={() => {
                          setEditing(true);
                          setReadOnly(false);
                          setMessage(startMessage || '');
                        }}
                      >
                        {`Change ${type}`}
                      </Button>
                    )
                }
              </Col>
            </Form.Group>
            {
              type === 'password'
              && (
                <Form.Group as={Row}>
                  <Col sm={{ span: 7, offset: 2 }}>
                    <Form.Control
                      type={inputType}
                      isInvalid={editing && !!repeatPassProps?.errors}
                      required
                      plaintext={!editing}
                      readOnly={readOnly}
                      {...repeatPassProps}
                    />
                    <Form.Control.Feedback type="invalid">
                      { repeatPassProps?.errors }
                    </Form.Control.Feedback>
                    {
                      message !== ''
                      && (
                      <Form.Text>
                        { message }
                      </Form.Text>
                      )
                    }
                  </Col>
                </Form.Group>
              )
            }
          </Form>
        );
      }}
    </FormValidator>
  );
};

export default FormBlock;
