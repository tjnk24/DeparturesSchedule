import React, { FC } from 'react';
import Modal from 'react-bootstrap/esm/Modal';

import { MESSAGE } from '../routes';

import ModalProps from '../types';

const Message: FC<ModalProps> = ({ modal, handler }) => (
  <Modal
    show={modal?.route === MESSAGE}
    onHide={() => handler?.({ route: '' })}
    backdrop={false}
  >
    <Modal.Header closeButton>
      <Modal.Title>
        {modal?.message?.title}
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {modal?.message?.messageText}
    </Modal.Body>
  </Modal>
);

export default Message;
