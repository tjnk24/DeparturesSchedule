import React, { FC, useState, useRef } from 'react';
import Form from 'react-bootstrap/esm/Form';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/esm/Button';

import FormValidator from '@components/form-validator';
import SubmitButton from '@components/submit-button';
import { FormValidationTypes } from '@apptypes/components';
import AuthPopover from '../auth-popover';

import FormBlockProps from './types';

const FormBlock: FC<FormBlockProps> = ({
  type,
  action,
  disabled,
  startValue,
  startMessage,
  reauth,
}) => {
  const [editing, setEditing] = useState(false);
  const [message, setMessage] = useState('');
  const [showPopover, setShowPopover] = useState(false);
  const [formPayload, setFormPayload] = useState({});

  const buttonRef = useRef<HTMLDivElement | null>(null);

  const submitAction = (payload: FormValidationTypes) => {
    const isSameValue = payload[type] === startValue[type];

    if (!isSameValue && !reauth) {
      action(payload, setMessage, setEditing);
    } else if (!isSameValue && reauth) {
      setFormPayload(payload);
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
      inputs={[type]}
      action={submitAction}
      startValues={startValue}
    >
      {({ inputProps, handleSubmit }) => {
        const validationProps = inputProps[type];

        return (
          <Form
            onSubmit={handleSubmit}
            noValidate
          >
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                { validationProps.labeltext }
              </Form.Label>
              <Col sm={7}>
                <Form.Control
                  isInvalid={!!validationProps.errors}
                  required
                  plaintext={!editing}
                  readOnly={!editing}
                  {...validationProps}
                />
                <Form.Control.Feedback type="invalid">
                  { validationProps.errors }
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
              <Col sm={3}>
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
                          setMessage(startMessage || '');
                        }}
                      >
                        {`Change ${type}`}
                      </Button>
                    )
                }
              </Col>
            </Form.Group>

          </Form>
        );
      }}
    </FormValidator>
  );
};

export default FormBlock;
