import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-bootstrap/esm/Modal';

import { MESSAGE } from '@store/actions/constants';
import { closeModal } from '@store/actions/modals';

import { RootState } from '@store/reducers/rootReducer/types';

const Message: FC = () => {
  const dispatch = useDispatch();
  const { route, message } = useSelector((state: RootState) => state.modals);

  return (
    <Modal
      show={route === MESSAGE}
      onHide={() => dispatch(closeModal())}
      backdrop={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {message?.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {message?.messageText}
      </Modal.Body>
    </Modal>
  );
};

export default Message;
