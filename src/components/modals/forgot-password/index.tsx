import React, { FC } from 'react';
import classnames from 'classnames/bind';
import Modal from 'react-bootstrap/esm/Modal';
import Form from 'react-bootstrap/esm/Form';
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import InnerForm from '../parts/inner-form';

import style from './style.scss';

import { ModalProps } from '../types';
import FormValidator from '../parts/form-validator';

const cn = classnames.bind(style);

const ForgotPassword: FC<ModalProps> = ({ modal, handler }) => (
  <Modal show={modal === 'forgot-password'} onHide={() => handler('')}>
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

              <Button onClick={() => handler('message')}>
              Send email
              </Button>
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
            onClick={() => handler('login')}
          >
            Login here
          </Button>
        </Row>
        <Row>
          Not a member?
          <Button
            variant="link"
            onClick={() => handler('sign-up')}
          >
            Sign up
          </Button>
        </Row>
      </Container>
    </Modal.Footer>
  </Modal>
);

export default ForgotPassword;
