import React, { FC, useState } from 'react';
import classnames from 'classnames/bind';

import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/esm/Dropdown';
import Button from 'react-bootstrap/esm/Button';
import DropdownButton from 'react-bootstrap/esm/DropdownButton';
// import Spinner from 'react-bootstrap/esm/Spinner';

import HeaderProps from './types';

import style from './style.scss';

const cn = classnames.bind(style);

const Header: FC<HeaderProps> = ({ handler }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const loginSignUpButton = (
    <Button
      variant="link"
      onClick={() => handler('login')}
    >
      Login / Sign up
    </Button>
  );

  const profileMenu = (
    <DropdownButton title="Username" id="dropdown-basic-button">
      <Link to="/profile" className={cn('edit-profile')}>
        <Dropdown.Item as="span">Edit profile</Dropdown.Item>
      </Link>
      <Dropdown.Item>Log out</Dropdown.Item>
    </DropdownButton>
  );

  // const setMenu = () => {
  //   if (user !== '') {
  //     if (user !== 'failed') {
  //       return profileMenu;
  //     }

  //     return loginSignUpButton;
  //   }

  //   return <Spinner animation="border" variant="light" />;
  // };

  return (
    <header className={cn('header')}>
      <h1 className={cn('header__title')}>Your airport schedule</h1>
      <div className={cn('header__buttons-wrap')}>
        {
          isAuthenticated
            ? profileMenu
            : loginSignUpButton
        }
      </div>
    </header>
  );
};

export default Header;
