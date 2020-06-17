import React, { FC } from 'react';
import Login from '@components/modal/login';

import classnames from 'classnames/bind';
import style from './style.scss';

const cn = classnames.bind(style);

const Header: FC = () => (
  <>
    {/* <Login /> */}
    <header className={cn('header')}>
      <h1 className={cn('header__title')}>Your airport schedule</h1>
      <div className={cn('header__buttons-wrap')}>
        <button type="button">Login / Sign up</button>
      </div>
    </header>
  </>
);

export default Header;
