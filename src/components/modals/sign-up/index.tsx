import React, { FC } from 'react';
import Modal from 'react-bootstrap/esm/Modal';
import Form from 'react-bootstrap/esm/Form';
import Button from 'react-bootstrap/esm/Button';


import classnames from 'classnames/bind';
import style from './style.scss';

import { ModalProps } from '../types';

const cn = classnames.bind(style);

const SignUp: FC<ModalProps> = ({ modal, handler }) => (
  <Modal show={modal === 'sign-up'} onHide={() => handler('')}>
    <Modal.Header closeButton>
      <Modal.Title>Create an account</Modal.Title>
    </Modal.Header>
    <Modal.Body className={cn('modal-wrap')}>
      <Form>
        <Form.Group>
          <Form.Label>
            Your Name:
            <Form.Control type="text" placeholder="Name" />
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Your Email:
            <Form.Control type="text" placeholder="Email" />
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Your password:
            <Form.Control type="password" />
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Repeat your password:
            <Form.Control type="password" />
          </Form.Label>
        </Form.Group>
      </Form>
      <Button className={cn('sign-up-button')}>Sign up!</Button>
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
