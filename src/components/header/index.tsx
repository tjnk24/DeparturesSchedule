import React, { FC, useContext } from 'react';
import { Context } from '@store/provider';
import { auth } from '@utils/firebase';
import classnames from 'classnames/bind';

import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/esm/Dropdown';
import Button from 'react-bootstrap/esm/Button';
import DropdownButton from 'react-bootstrap/esm/DropdownButton';

import HeaderProps from './types';

import style from './style.scss';

const cn = classnames.bind(style);

const Header: FC<HeaderProps> = ({ handler }) => {
  const { state } = useContext(Context);
  const { user } = state.authUserState;

  const loginSignUpButton = (
    <Button
      variant="link"
      onClick={() => handler('login')}
    >
      Login / Sign up
    </Button>
  );

  const profileMenu = (
    <DropdownButton title={user?.displayName || ''} id="dropdown-basic-button">
      <Link to="/profile" className={cn('edit-profile')}>
        <Dropdown.Item as="span">Edit profile</Dropdown.Item>
      </Link>
      <Dropdown.Item onClick={() => auth.signOut()}>Log out</Dropdown.Item>
    </DropdownButton>
  );

  return (
    <header className={cn('header')}>
      <h1 className={cn('header__title')}>Your airport schedule</h1>
      <div className={cn('header__buttons-wrap')}>
        {
          user !== null
            ? profileMenu
            : loginSignUpButton
        }
      </div>
    </header>
  );
};

export default Header;
