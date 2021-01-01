import React, {
  FC,
  useState,
  useEffect,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '@utils/firebase';
import classnames from 'classnames/bind';

import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/esm/Dropdown';
import Button from 'react-bootstrap/esm/Button';
import DropdownButton from 'react-bootstrap/esm/DropdownButton';

import { showLogin } from '@store/actions/modals';
import { saveHeaderText } from '@store/actions/constructor';

import { RootState } from '@store/reducers/rootReducer/types';

import style from './style.scss';

const cn = classnames.bind(style);

const Header: FC = () => {
  const dispatch = useDispatch();
  const { authUser, constructorState } = useSelector((state: RootState) => state);

  const { user } = authUser;
  const { headerText } = constructorState;

  const [inputValue, setInputValue] = useState(`${headerText}`);

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

  const saveHeaderState = () => {
    dispatch(saveHeaderText(inputValue));
  };

  useEffect(() => {
    !user && setInputValue('Your Airport Schedule');
  }, [user]);

  return (
    <header className={cn('header')}>
      <input
        value={inputValue}
        onChange={inputHandler}
        onBlur={saveHeaderState}
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
