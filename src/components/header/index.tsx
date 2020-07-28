import React, { FC, useContext, useState, useEffect } from 'react';
import { Context } from '@store/provider';
import { auth } from '@utils/firebase';
import classnames from 'classnames/bind';

import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/esm/Dropdown';
import Button from 'react-bootstrap/esm/Button';
import DropdownButton from 'react-bootstrap/esm/DropdownButton';

import { showLogin } from '@store/actions/modals';

import style from './style.scss';

const cn = classnames.bind(style);

const Header: FC = () => {
  const { state, dispatch } = useContext(Context);
  const { user } = state.authUserState;

  const [inputValue, setInputValue] = useState('Your Airport Schedule');

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setInputValue(event.target.value);
  };

  const loginSignUpButton = (
    <Button
      variant="link"
      onClick={() => dispatch(showLogin())}
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

  useEffect(() => {
    !user && setInputValue('Your Airport Schedule');
  }, [user]);

  return (
    <header className={cn('header')}>
      <input
        value={inputValue}
        onChange={inputHandler}
        disabled={!(user && user.emailVerified) || undefined}
      />
      <div className={cn('header__buttons-wrap')}>
        {
          user !== null && user.emailVerified
            ? profileMenu
            : loginSignUpButton
        }
      </div>
    </header>
  );
};

export default Header;
