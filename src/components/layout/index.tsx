import React, { FC } from 'react';

import classnames from 'classnames/bind';
import style from './style.scss';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const cn = classnames.bind(style);

const Layout: FC = ({ children }) => (
  <main>
    { children }
  </main>
);

export default Layout;
