import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames/bind';
import Dropdown from 'react-bootstrap/esm/Dropdown';
import Button from 'react-bootstrap/esm/Button';
import DropdownButton from 'react-bootstrap/esm/DropdownButton';

import Backdrop from '@components/modals/backdrop';
import Message from '@components/modals/message';
import SignUp from '@components/modals/sign-up';
import Login from '@components/modals/login';
import ForgotPassword from '@components/modals/forgot-password';

import style from './style.scss';

const cn = classnames.bind(style);

const Header: FC = () => {
  const [modal, setModal] = useState('');
  const [isAuthentificated, setIsAuthentificated] = useState(false);

  const setModals = (
    <Backdrop modal={modal} handler={setModal}>
      <Login />
      <SignUp />
      <Message />
      <ForgotPassword />
    </Backdrop>
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
      <Link to="/profile">
        <Dropdown.Item eventKey="1">Edit profile</Dropdown.Item>
      </Link>
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
