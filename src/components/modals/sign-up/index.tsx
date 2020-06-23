import React, { FC } from 'react';
import classnames from 'classnames/bind';
import Modal from 'react-bootstrap/esm/Modal';
import Button from 'react-bootstrap/esm/Button';
import InnerBody from './inner-body';

import { ModalProps } from '../types';

import style from './style.scss';

const cn = classnames.bind(style);

const SignUp: FC<ModalProps> = ({ modal, handler }) => (
  <Modal show={modal === 'sign-up'} onHide={() => handler('')}>
    <Modal.Header closeButton>
      <Modal.Title>Create an account</Modal.Title>
    </Modal.Header>
    <Modal.Body className={cn('modal-wrap')}>
      <InnerBody handler={handler} />
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
