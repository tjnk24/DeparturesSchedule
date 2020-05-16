import React from 'react';

import classnames from 'classnames/bind';
import bootstrap from '@bootstrap-module';

const cn = classnames.bind();

const Dropdown = ({
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
