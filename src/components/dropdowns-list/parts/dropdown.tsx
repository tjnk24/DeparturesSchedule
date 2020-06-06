import React, { FC } from 'react';
import classnames from 'classnames/bind';
import bootstrap from '@bootstrap-module';

import { DropdownProps } from '../types';

const cn = classnames;

const Dropdown: FC<DropdownProps> = ({
  name,
  value,
  prevValues,
  onChangeHandler,
  children,
}) => (
  <select
    className={cn(bootstrap['form-control'])}
    name={name}
    value={value}
    onChange={(e) => {
      if (prevValues) {
        onChangeHandler({
          ...prevValues,
          [e.target.name]: e.target.value,
        });
      } else {
        onChangeHandler({ [e.target.name]: e.target.value });
      }
    }}
  >
    {children}
  </select>
);

export default Dropdown;
