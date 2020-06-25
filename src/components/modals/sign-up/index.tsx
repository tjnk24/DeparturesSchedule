import React, { FC } from 'react';
import classnames from 'classnames/bind';
import Modal from 'react-bootstrap/esm/Modal';
import Form from 'react-bootstrap/esm/Form';
import Button from 'react-bootstrap/esm/Button';
import FormValidator from '../parts/form-validator';
import InnerForm from '../parts/inner-form';

import { ModalProps } from '../types';

import style from './style.scss';

const cn = classnames.bind(style);

const SignUp: FC<ModalProps> = ({ modal, handler }) => (
  <Modal show={modal === 'sign-up'} onHide={() => handler('')}>
    <Modal.Header closeButton>
      <Modal.Title>Create an account</Modal.Title>
    </Modal.Header>
    <Modal.Body className={cn('modal-wrap')}>
      <FormValidator
        handler={handler}
        inputs={[
          'username',
          'email',
          'password',
          'repeatPassword',
        ]}
      >
        {({ inputProps, handleSubmit }) => {
          const {
            username,
            email,
            password,
            repeatPassword,
          } = inputProps;

          return (
            <Form noValidate onSubmit={handleSubmit}>
              <Form.Group>
                <InnerForm {...username} />
              </Form.Group>

              <Form.Group>
                <InnerForm {...email} />
              </Form.Group>

              <Form.Group>
                <InnerForm {...password} />
              </Form.Group>

              <Form.Group>
                <InnerForm {...repeatPassword} />
              </Form.Group>

              <Button
                type="submit"
                className={cn('sign-up-button')}
              >
                Sign up!
              </Button>
            </Form>
          );
        }}
      </FormValidator>
    </Modal.Body>
    <Modal.Footer>
      Already have an account?
      <Button
        variant="link"
        onClick={() => handler('login')}
      >
        Login here
      </Button>
    </Modal.Footer>
  </Modal>
);

export default SignUp;
