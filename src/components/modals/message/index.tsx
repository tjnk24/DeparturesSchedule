import React, { FC, useContext } from 'react';
import Modal from 'react-bootstrap/esm/Modal';

import { Context } from '@store/provider';
import { MESSAGE } from '@store/actions/constants';
import { closeModal } from '@store/actions/modals';

import ModalProps from '../types';

const Message: FC<ModalProps> = () => {
  const { state, dispatch } = useContext(Context);
  const { modalsState } = state;

  return (
    <Modal
      show={modalsState.route === MESSAGE}
      onHide={() => dispatch(closeModal())}
      backdrop={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {modalsState.message?.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {modalsState.message?.messageText}
      </Modal.Body>
    </Modal>
  );
};

export default Message;
