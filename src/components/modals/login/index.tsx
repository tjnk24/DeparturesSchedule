import React, { FC, useState } from 'react';
import classnames from 'classnames/bind';
import Modal from 'react-bootstrap/esm/Modal';
import Form from 'react-bootstrap/esm/Form';
import Button from 'react-bootstrap/esm/Button';
import FormValidator from '@components/form-validator';
import { auth } from '@utils/firebase';
import { FormValidationTypes } from '@apptypes/components';

import SubmitButton from '@components/submit-button';
import InnerForm from '../inner-form';

import ModalProps from '../types';

import style from './style.scss';
import { LOGIN, FORGOT_PASS, SIGN_UP } from '../routes';

const cn = classnames.bind(style);

const Login: FC<ModalProps> = ({ modal, handler }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const login = async (payload: FormValidationTypes) => {
    setButtonDisabled(true);

    await auth
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then((response) => {
        const emailVerified = response.user?.emailVerified;

        emailVerified
          ? handler?.({ route: '' })
          : setErrorMessage('Please, verify your email first.');

        setButtonDisabled(false);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setButtonDisabled(false);
      });
  };

  return (
    <Modal
      show={modal?.route === LOGIN}
      onHide={() => handler?.({ route: '' })}
      backdrop={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Log In</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormValidator
          inputs={['email', 'password']}
          action={login}
        >
          {({ inputProps, handleSubmit }) => {
            const {
              email,
              password,
            } = inputProps;

            return (
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Group>
                  <InnerForm {...email} />
                </Form.Group>

                <Form.Group>
                  <InnerForm {...password} />
                  <Button
                    variant="link"
                    className={cn('forgot-password-button')}
                    onClick={() => handler?.({ route: FORGOT_PASS })}
                  >
                    Forgot your password?
                  </Button>
                </Form.Group>
                {
                  errorMessage !== ''
                  && (
                    <Form.Group>
                      <Form.Text className={cn('error-message')}>
                        { errorMessage }
                      </Form.Text>
                    </Form.Group>
                  )
                }
                <SubmitButton
                  disabled={buttonDisabled}
                  customCss={() => cn('login-button')}
                  innerText="Log me in!"
                />
              </Form>
            );
          }}
        </FormValidator>
      </Modal.Body>
      <Modal.Footer>
        Not a member?
        <Button
          variant="link"
          onClick={() => handler?.({ route: SIGN_UP })}
        >
          Sign up
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Login;
