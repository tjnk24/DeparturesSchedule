import React, { FC } from 'react';
import Modal from 'react-bootstrap/esm/Modal';
import Button from 'react-bootstrap/esm/Button';

import classnames from 'classnames/bind';
import style from './style.scss';

import ModalProps from '../types';

const cn = classnames.bind(style);

const tempEmailPlaceholder = 'test@test.test';

const Message: FC<ModalProps> = ({ modal, handler }) => (
  <Modal
    show={modal === 'message'}
    onHide={() => handler?.('')}
    backdrop={false}
  >
    <Modal.Header closeButton>
      <Modal.Title>Verification email sent</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      A verification email has been sent to your email address:
      <br />
      <br />
      {tempEmailPlaceholder}
      <br />
      <br />
      After verifying your email address, you can log in
      to your account and use features for registered users.
    </Modal.Body>
    <Modal.Footer className={cn('footer-wrap')}>
      Email did not arrive?
      <Button variant="link">Resend the verification email</Button>
    </Modal.Footer>
  </Modal>
);

export default Message;
