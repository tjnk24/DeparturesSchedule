import React, { FC, useState, useContext } from 'react';
import Modal from 'react-bootstrap/esm/Modal';
import Button from 'react-bootstrap/esm/Button';
import { auth } from '@utils/firebase';

import { Context } from '@store/provider';
import { EMAIL_VERIFY } from '@store/actions/constants';
import { closeModal } from '@store/actions/modals';

import classnames from 'classnames/bind';
import style from './style.scss';

const cn = classnames.bind(style);

const EmailVerify: FC = () => {
  const { state, dispatch } = useContext(Context);
  const { modalsState } = state;

  const [resendTimer, setResendTimer] = useState(0);

  const user = auth.currentUser;

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
      show={modalsState.route === EMAIL_VERIFY}
      onHide={() => dispatch(closeModal())}
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

export default EmailVerify;
