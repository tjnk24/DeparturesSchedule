import React, { FC } from 'react';
import FormControl from 'react-bootstrap/esm/FormControl';

import { DropdownProps } from '../types';

const Dropdown: FC<DropdownProps> = ({
  name,
  value,
  prevValues,
  onChangeHandler,
  children,
}) => (
  <FormControl
    as="select"
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
  </FormControl>
);

export default Dropdown;
