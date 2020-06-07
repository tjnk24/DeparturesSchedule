import React, { FC } from 'react';
import classnames from 'classnames/bind';
import style from './style.scss';

const cn = classnames.bind(style);

const Header: FC = () => (
  <header className={cn('header')}>
    <h1 className={cn('header__title')}>Your airport schedule</h1>
  </header>
);

export default Header;
