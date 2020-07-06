import React, { FC, useState } from 'react';
import classnames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/esm/Dropdown';
import Button from 'react-bootstrap/esm/Button';
import DropdownButton from 'react-bootstrap/esm/DropdownButton';

import HeaderProps from './types';

import style from './style.scss';

const cn = classnames.bind(style);

const Header: FC<HeaderProps> = ({ handler }) => {
  const [isAuthentificated, setIsAuthentificated] = useState(false);

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
      <Link to="/profile">
        <Dropdown.Item eventKey="1">Edit profile</Dropdown.Item>
      </Link>
    </DropdownButton>
  );

  return (
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
  );
};

export default Header;
