import React, { FC } from 'react';
import Modal from 'react-bootstrap/esm/Modal';
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';

import classnames from 'classnames/bind';
import style from './style.scss';

import { ModalProps } from '../types';
import InnerBody from './inner-body';

const cn = classnames.bind(style);

const ForgotPassword: FC<ModalProps> = ({ modal, handler }) => (
  <Modal show={modal === 'forgot-password'} onHide={() => handler('')}>
    <Modal.Header closeButton>
      <Modal.Title>Forgot Password</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <InnerBody handler={handler} />
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
