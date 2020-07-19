import React, { FC } from 'react';
import classnames from 'classnames/bind';
import FormValidator from '@components/form-validator';
import Modal from 'react-bootstrap/esm/Modal';
import Form from 'react-bootstrap/esm/Form';
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import InnerForm from '../inner-form';
import { FORGOT_PASS, LOGIN, SIGN_UP } from '../routes';

import ModalProps from '../types';

import style from './style.scss';

const cn = classnames.bind(style);

const ForgotPassword: FC<ModalProps> = ({ modal, handler }) => (
  <Modal
    show={modal?.route === FORGOT_PASS}
    onHide={() => handler?.({ route: '' })}
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

              <Button onClick={() => handler?.({ route: 'message-email-sent' })}>
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
            onClick={() => handler?.({ route: LOGIN })}
          >
            Login here
          </Button>
        </Row>
        <Row>
          Not a member?
          <Button
            variant="link"
            onClick={() => handler?.({ route: SIGN_UP })}
          >
            Sign up
          </Button>
        </Row>
      </Container>
    </Modal.Footer>
  </Modal>
);

export default ForgotPassword;
