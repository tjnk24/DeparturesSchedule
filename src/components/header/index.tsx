import React, { FC, useState } from 'react';
import Modals from '@components/modals';
import { Button } from 'react-bootstrap';

import classnames from 'classnames/bind';
import style from './style.scss';

const cn = classnames.bind(style);

const Header: FC = () => {
  const [modal, setModal] = useState('');

  return (
    <>
      <Modals modal={modal} modalHandler={setModal} />
      <header className={cn('header')}>
        <h1 className={cn('header__title')}>Your airport schedule</h1>
        <div className={cn('header__buttons-wrap')}>
          <button
            type="button"
            onClick={() => setModal('login')}
          >
            Login / Sign up
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
