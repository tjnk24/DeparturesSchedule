import React, { FC, useState } from 'react';
import classnames from 'classnames/bind';
import { Button } from 'react-bootstrap';

import Message from '@components/modals/message';
import SignUp from '@components/modals/sign-up';
import Login from '@components/modals/login';
import ForgotPassword from '@components/modals/forgot-password';

import style from './style.scss';

const cn = classnames.bind(style);

const Header: FC = () => {
  const [modal, setModal] = useState('');

  const setModals = () => (
    <>
      <Login modal={modal} handler={setModal} />
      <SignUp modal={modal} handler={setModal} />
      <Message modal={modal} handler={setModal} />
      <ForgotPassword modal={modal} handler={setModal} />
    </>
  );

  return (
    <>
      { setModals() }
      <header className={cn('header')}>
        <h1 className={cn('header__title')}>Your airport schedule</h1>
        <div className={cn('header__buttons-wrap')}>
          <Button
            variant="link"
            onClick={() => setModal('login')}
          >
            Login / Sign up
          </Button>
        </div>
      </header>
    </>
  );
};

export default Header;
