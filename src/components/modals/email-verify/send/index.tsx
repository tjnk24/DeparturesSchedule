import React, { FC, useState } from 'react';
import Modal from 'react-bootstrap/esm/Modal';
import Button from 'react-bootstrap/esm/Button';
import { auth } from '@utils/firebase';

import classnames from 'classnames/bind';
import style from './style.scss';

import ModalProps from '../../types';

const cn = classnames.bind(style);

const EmailVerifySend: FC<ModalProps> = ({ modal, handler }) => {
  const user = auth.currentUser;

  const [resendTimer, setResendTimer] = useState(0);

  const resendEmail = () => {
    user?.sendEmailVerification();
    setResendTimer(5);
    let timer = 5;

    const timerInterval = setInterval(() => {
      timer -= 1;

      timer >= 0
        ? setResendTimer(timer)
        : clearInterval(timerInterval);
    }, 1000);
  };

  return (
    <Modal
      show={modal === 'email-verify-send'}
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
        {user?.email}
        <br />
        <br />
      After verifying your email address, you can log in
      to your account and use features for registered users.
      </Modal.Body>
      <Modal.Footer className={cn('footer-wrap')}>
        Email did not arrive?
        <Button
          variant="link"
          onClick={resendEmail}
          disabled={resendTimer !== 0}
        >
          Resend the verification email
        </Button>
        {
          resendTimer !== 0
            ? (
              <span style={{ margin: 0 }}>
                We sent the email again. If it didn&apos;t arrive, try again in
                {' '}
                {resendTimer}
                {' '}
                seconds.
              </span>
            )
            : null
        }
      </Modal.Footer>
    </Modal>
  );
};

export default EmailVerifySend;
