import React, { FC } from 'react';
import Modal from 'react-bootstrap/esm/Modal';
import Form from 'react-bootstrap/esm/Form';
import Button from 'react-bootstrap/esm/Button';

import classnames from 'classnames/bind';
import style from './style.scss';

import { ModalProps } from '../types';

const cn = classnames.bind(style);

const Login: FC<ModalProps> = ({ modal, handler }) => (
  <Modal show={modal === 'login'} onHide={() => handler('')}>
    <Modal.Header closeButton>
      <Modal.Title>Log In</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group>
          <Form.Label>Your Email:</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Your Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
          <Button
            variant="link"
            className={cn('forgot-password-button')}
            onClick={() => handler('forgot-password')}
          >
              Forgot your password?
          </Button>
        </Form.Group>
        <Button className={cn('login-button')}>
            Log me in!
        </Button>
      </Form>
    </Modal.Body>
    <Modal.Footer>
        Not a member?
      <Button
        variant="link"
        onClick={() => handler('sign-up')}
      >
        Sign up
      </Button>
    </Modal.Footer>
  </Modal>
);

export default Login;
