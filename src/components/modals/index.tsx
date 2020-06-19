import React, { FC } from 'react';
import Login from './login';
import SignUp from './sign-up';
import Message from './message';

import { ModalProps } from './types';

const Modal: FC<ModalProps> = ({ modal, modalHandler }) => (
  <>
    { console.log(modal) }
    <Message />
    <SignUp />
    <Login modal={modal} handler={modalHandler} />
  </>
);

export default Modal;
