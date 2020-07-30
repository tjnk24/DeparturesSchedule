import React, {
  FC,
  useState,
  useContext,
  useEffect,
} from 'react';
import {
  showEmailVerify,
  showLogin,
  closeModal,
} from '@store/actions/modals';
import { Context } from '@store/provider';
import { SIGN_UP } from '@store/actions/constants';
import { auth } from '@utils/firebase';
import classnames from 'classnames/bind';
import Form from 'react-bootstrap/esm/Form';
import Modal from 'react-bootstrap/esm/Modal';
import Button from 'react-bootstrap/esm/Button';
import SubmitButton from '@components/submit-button';
import FormValidator from '@components/form-validator';
import FormErrorMessage from '@components/error-message';
import { FormValidationTypes } from '@apptypes/components';
import InnerForm from '../inner-form';

import style from './style.scss';


const cn = classnames.bind(style);

const SignUp: FC = () => {
  const { state, dispatch } = useContext(Context);
  const { modalsState } = state;

  const [errorMessage, setErrorMessage] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(false);

  useEffect(() => {
    modalsState.route !== SIGN_UP && setErrorMessage('');
  });

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
          dispatch(showEmailVerify());
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
      show={modalsState.route === SIGN_UP}
      onHide={() => dispatch(closeModal())}
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
              <FormErrorMessage
                message={errorMessage}
              />
              <SubmitButton
                disabled={buttonDisabled}
                customCss={() => cn('sign-up-button')}
                innerText="Sign Up!"
              />
            </Form>
          )}
        </FormValidator>
      </Modal.Body>
      <Modal.Footer>
      Already have an account?
        <Button
          variant="link"
          onClick={() => dispatch(showLogin())}
        >
        Login here
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SignUp;
