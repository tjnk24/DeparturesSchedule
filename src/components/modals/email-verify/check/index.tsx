import React, { FC } from 'react';
import Modal from 'react-bootstrap/esm/Modal';

import CheckSuccessProps from './types';

const EmailCheck: FC<CheckSuccessProps> = ({ modal, handler, success }) => (
  <Modal
    show={modal === 'email-verify-check'}
    onHide={() => handler?.('')}
    backdrop={false}
  >
    <Modal.Header closeButton>
      <Modal.Title>
        {
          success
            ? 'Your email has been verified'
            : 'Try verifying your email again'
        }
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {
        success
          ? 'You can now sign in with your new account'
          : 'Your request to verify your email has expired or the link has already been used'
      }
    </Modal.Body>
  </Modal>
);

export default EmailCheck;
