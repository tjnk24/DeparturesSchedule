import React, { FC } from 'react';
import Modal from 'react-bootstrap/esm/Modal';
import Button from 'react-bootstrap/esm/Button';
import classnames from 'classnames/bind';
// import bootstrap from '@bootstrap-module';
import style from './style.scss';

const cn = classnames.bind(style);

const tempEmailPlaceholder = 'test@test.test';

const Message: FC = () => (
  <Modal>
    <Modal.Header closeButton>
      <Modal.Title>Verification email sent</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        A verification email has been sent to your email address:
      {' '}
      {tempEmailPlaceholder}
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
