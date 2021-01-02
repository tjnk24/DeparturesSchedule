import React, {
  FC,
  useState,
  useEffect,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  showEmailVerify,
  showLogin,
  closeModal,
} from '@store/actions/modals';
import { SIGN_UP } from '@store/actions/constants';
import { auth } from '@utils/firebase';
import classnames from 'classnames/bind';
import Form from 'react-bootstrap/esm/Form';
import Modal from 'react-bootstrap/esm/Modal';
import Button from 'react-bootstrap/esm/Button';
import SubmitButton from '@components/submit-button';
import FormValidator from '@components/form-validator';
import FormErrorMessage from '@components/error-message';
import { StringObjectType } from '@apptypes/common';
import { RootState } from '@store/reducers/rootReducer/types';
import InnerForm from '../inner-form';

import style from './style.scss';

const cn = classnames.bind(style);

const SignUp: FC = () => {
  const dispatch = useDispatch();
  const { route } = useSelector((state: RootState) => state.modals);

  const [errorMessage, setErrorMessage] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(false);

  useEffect(() => {
    route !== SIGN_UP && setErrorMessage('');
  });

  const signUp = async (payload: StringObjectType) => {
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
      show={route === SIGN_UP}
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
