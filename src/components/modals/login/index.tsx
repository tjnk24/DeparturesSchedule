import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classnames from 'classnames/bind';
import Modal from 'react-bootstrap/esm/Modal';
import Form from 'react-bootstrap/esm/Form';
import Button from 'react-bootstrap/esm/Button';
import FormValidator from '@components/form-validator';
import { auth } from '@utils/firebase';
import { StringObjectType } from '@apptypes/common';

import { closeModal, showForgotPass, showSignUp } from '@store/actions/modals';
import { LOGIN } from '@store/actions/constants';
import { RootState } from '@store/reducers/rootReducer/types';

import FormErrorMessage from '@components/error-message';
import SubmitButton from '@components/submit-button';
import InnerForm from '../inner-form';

import style from './style.scss';

const cn = classnames.bind(style);

const Login: FC = () => {
  const dispatch = useDispatch();
  const { route } = useSelector((state: RootState) => state.modals);

  const [errorMessage, setErrorMessage] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const login = async (payload: StringObjectType) => {
    setButtonDisabled(true);

    await auth
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then((response) => {
        const emailVerified = response.user?.emailVerified;

        emailVerified
          ? dispatch(closeModal())
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
      show={route === LOGIN}
      onHide={() => dispatch(closeModal())}
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
                    onClick={() => dispatch(showForgotPass())}
                  >
                    Forgot your password?
                  </Button>
                </Form.Group>
                <FormErrorMessage
                  message={errorMessage}
                />
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
          onClick={() => dispatch(showSignUp())}
        >
          Sign up
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Login;
