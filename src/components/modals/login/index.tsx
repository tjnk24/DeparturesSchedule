import React, { FC } from 'react';
import Modal from 'react-bootstrap/esm/Modal';
import Button from 'react-bootstrap/esm/Button';
import InnerBody from './inner-body';

import { ModalProps } from '../types';

const Login: FC<ModalProps> = ({ modal, handler }) => (
  <Modal show={modal === 'login'} onHide={() => handler('')}>
    <Modal.Header closeButton>
      <Modal.Title>Log In</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <InnerBody handler={handler} />
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
