import React, { FC, useContext, useState } from 'react';

import { FORGOT_PASS } from '@store/actions/constants';
import {
  showLogin, showSignUp, showMessage, closeModal,
} from '@store/actions/modals';
import { Context } from '@store/provider';
import { auth } from '@utils/firebase';

import classnames from 'classnames/bind';
import FormValidator from '@components/form-validator';
import SubmitButton from '@components/submit-button';
import FormErrorMessage from '@components/error-message';
import Modal from 'react-bootstrap/esm/Modal';
import Form from 'react-bootstrap/esm/Form';
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';

import { StringObjectType } from '@apptypes/common';

import InnerForm from '../inner-form';
import messages from '../message/messages';

import style from './style.scss';

const cn = classnames.bind(style);

const ForgotPassword: FC = () => {
  const { state, dispatch } = useContext(Context);
  const { modalsState } = state;

  const [errorMessage, setErrorMessage] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const resetEmailHandler = (payload: StringObjectType) => {
    setButtonDisabled(true);

    auth.sendPasswordResetEmail(payload.email)
      .then(() => {
        dispatch(showMessage({
          title: messages.titles.emailSent,
          messageText: messages.messagesText.passwordSent,
        }));
        setButtonDisabled(false);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setButtonDisabled(false);
      });
  };

  return (
    <Modal
      show={modalsState.route === FORGOT_PASS}
      onHide={() => dispatch(closeModal())}
      backdrop={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Forgot Password</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p style={{ fontSize: '14px' }}>
        When you fill in your register email address and push the button below,
        we&apos;ll send an email message with instructions how to reset your password.
        </p>
        <br />
        <FormValidator
          inputs={['email']}
          action={resetEmailHandler}
        >
          {({ inputProps, handleSubmit }) => {
            const {
              email,
            } = inputProps;

            return (
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Group>
                  <InnerForm {...email} />
                </Form.Group>

                <FormErrorMessage
                  message={errorMessage}
                />

                <SubmitButton
                  style={{ width: '110px' }}
                  disabled={buttonDisabled}
                  innerText="Send email"
                />
              </Form>
            );
          }}
        </FormValidator>
      </Modal.Body>
      <Modal.Footer>
        <Container className={cn('footer-container')}>
          <Row>
          Already have an account?
            <Button
              variant="link"
              onClick={() => dispatch(showLogin())}
            >
            Login here
            </Button>
          </Row>
          <Row>
          Not a member?
            <Button
              variant="link"
              onClick={() => dispatch(showSignUp())}
            >
            Sign up
            </Button>
          </Row>
        </Container>
      </Modal.Footer>
    </Modal>
  );
};

export default ForgotPassword;
