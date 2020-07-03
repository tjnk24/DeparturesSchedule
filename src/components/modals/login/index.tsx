import React, { FC, useState } from 'react';
import classnames from 'classnames/bind';
import Modal from 'react-bootstrap/esm/Modal';
import Form from 'react-bootstrap/esm/Form';
import Button from 'react-bootstrap/esm/Button';
import FormValidator from '@components/form-validator';
import { auth } from '@utils/firebase';
import { FormValidationTypes } from '@apptypes/components';

import InnerForm from '../inner-form';

import ModalProps from '../types';

import style from './style.scss';

const cn = classnames.bind(style);

const Login: FC<ModalProps> = ({ modal, handler }) => {
  const [errorMessage, setErrorMessage] = useState('');

  const login = async (payload: FormValidationTypes) => {
    await auth
      .signInWithEmailAndPassword(payload.email, payload.password)
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <Modal
      show={modal === 'login'}
      onHide={() => handler?.('')}
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
                    onClick={() => handler?.('forgot-password')}
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
                <Button
                  type="submit"
                  className={cn('login-button')}
                >
                Log me in!
                </Button>
              </Form>
            );
          }}
        </FormValidator>
      </Modal.Body>
      <Modal.Footer>
        Not a member?
        <Button
          variant="link"
          onClick={() => handler?.('sign-up')}
        >
        Sign up
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Login;
