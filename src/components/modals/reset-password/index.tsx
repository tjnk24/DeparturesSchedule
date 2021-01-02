import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RESET_PASS } from '@store/actions/constants';
import { closeModal, showMessage } from '@store/actions/modals';
import FormErrorMessage from '@components/error-message';
import FormValidator from '@components/form-validator';
import SubmitButton from '@components/submit-button';
import Modal from 'react-bootstrap/esm/Modal';
import Form from 'react-bootstrap/esm/Form';
import { auth } from '@utils/firebase';

import { StringObjectType } from '@apptypes/common';
import { RootState } from '@store/reducers/rootReducer/types';

import InnerForm from '../inner-form';
import messages from '../message/messages';

const { passwordResetSuccess } = messages.titles;
const { canSignIn } = messages.messagesText;

const ResetPassword: FC = () => {
  const dispatch = useDispatch();
  const { route, actionCode } = useSelector((state: RootState) => state.modals);

  const [errorMessage, setErrorMessage] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const resetPassHandler = (payload: StringObjectType) => {
    setButtonDisabled(true);

    actionCode && auth.confirmPasswordReset(actionCode, payload.password)
      .then(() => {
        dispatch(showMessage({
          title: passwordResetSuccess,
          messageText: canSignIn,
        }));
        setButtonDisabled(false);
      })
      .catch((error) => {
        setButtonDisabled(false);
        setErrorMessage(error.message);
      });
  };

  return (
    <Modal
      show={route === RESET_PASS}
      onHide={() => dispatch(closeModal())}
      backdrop={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Reset your password</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p style={{ fontSize: '14px' }}>
          Please enter a new password.
        </p>
        <br />
        <FormValidator
          inputs={['password', 'repeatPassword']}
          action={resetPassHandler}
        >
          {({ inputProps, handleSubmit }) => {
            const {
              password,
              repeatPassword,
            } = inputProps;

            return (
              <Form
                noValidate
                onSubmit={handleSubmit}
                style={{ marginBottom: '5px' }}
              >
                <Form.Group>
                  <InnerForm {...password} />
                </Form.Group>
                <Form.Group>
                  <InnerForm {...repeatPassword} />
                </Form.Group>
                <FormErrorMessage
                  message={errorMessage}
                />
                <SubmitButton
                  style={{ width: '142px' }}
                  disabled={buttonDisabled}
                  innerText="Reset password"
                />
              </Form>
            );
          }}
        </FormValidator>
      </Modal.Body>
    </Modal>
  );
};

export default ResetPassword;
