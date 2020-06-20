import React, { FC, useState } from 'react';
import classnames from 'classnames/bind';
import Dropdown from 'react-bootstrap/esm/Dropdown';
import Button from 'react-bootstrap/esm/Button';
import ButtonGroup from 'react-bootstrap/esm/ButtonGroup';
import DropdownButton from 'react-bootstrap/esm/DropdownButton';

import Message from '@components/modals/message';
import SignUp from '@components/modals/sign-up';
import Login from '@components/modals/login';
import ForgotPassword from '@components/modals/forgot-password';

import style from './style.scss';

const cn = classnames.bind(style);

const Header: FC = () => {
  const [modal, setModal] = useState('');
  const [isAuthentificated, setIsAuthentificated] = useState(true);

  const setModals = (
    <>
      <Login modal={modal} handler={setModal} />
      <SignUp modal={modal} handler={setModal} />
      <Message modal={modal} handler={setModal} />
      <ForgotPassword modal={modal} handler={setModal} />
    </>
  );

  const loginSignUpButton = (
    <Button
      variant="link"
      onClick={() => setModal('login')}
    >
            Login / Sign up
    </Button>
  );

  const profileMenu = (
    <DropdownButton title="Username" id="dropdown-basic-button">
      <Dropdown.Item eventKey="1">Edit profile</Dropdown.Item>
    </DropdownButton>
  );

  return (
    <>
      { setModals }
      <header className={cn('header')}>
        <h1 className={cn('header__title')}>Your airport schedule</h1>
        <div className={cn('header__buttons-wrap')}>
          {
            isAuthentificated
              ? profileMenu
              : loginSignUpButton
          }
        </div>
      </header>
    </>
  );
};

export default Header;
