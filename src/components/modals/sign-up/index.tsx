import React, { FC, useState } from 'react';
import { auth } from '@utils/firebase';
import classnames from 'classnames/bind';
import Modal from 'react-bootstrap/esm/Modal';
import Form from 'react-bootstrap/esm/Form';
import Button from 'react-bootstrap/esm/Button';
import Spinner from 'react-bootstrap/esm/Spinner';
import FormValidator from '@components/form-validator';
import { FormValidationTypes } from '@apptypes/components';
import InnerForm from '../inner-form';

import ModalProps from '../types';

import style from './style.scss';

const cn = classnames.bind(style);

const SignUp: FC<ModalProps> = ({ modal, handler }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const signUp = async (payload: FormValidationTypes) => {
    setButtonDisabled(true);

    await auth
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then(() => {
        const user = auth.currentUser;

        user?.updateProfile({
          displayName: payload.username,
        })
        .then(() => {
          user?.sendEmailVerification();
          handler?.('email-verify-send');
          setButtonDisabled(false);
        });
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setButtonDisabled(false);
      });
  };

  return (
    <Modal
      show={modal === 'sign-up'}
      onHide={() => handler?.('')}
      backdrop={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Create an account</Modal.Title>
      </Modal.Header>
      <Modal.Body className={cn('modal-wrap')}>
        <FormValidator
          inputs={[
            'username',
            'email',
            'password',
            'repeatPassword',
          ]}
          action={signUp}
        >
          {({ inputProps, handleSubmit }) => (
            <Form noValidate onSubmit={handleSubmit}>
              {
                Object.keys(inputProps).map((key) => (
                  <Form.Group key={key}>
                    <InnerForm {...inputProps[key]} />
                  </Form.Group>
                ))
              }
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
                className={cn('sign-up-button')}
                disabled={buttonDisabled}
              >
                {
                  buttonDisabled
                    ? (
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />
                    )
                    : 'Sign up!'
                }
              </Button>
            </Form>
          )}
        </FormValidator>
      </Modal.Body>
      <Modal.Footer>
      Already have an account?
        <Button
          variant="link"
          onClick={() => handler?.('login')}
        >
        Login here
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SignUp;
