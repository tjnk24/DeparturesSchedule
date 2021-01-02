import { Item } from '@apptypes/common';
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
    onChange={(event) => {
      if (prevValues) {
        onChangeHandler({
          ...prevValues,
          [event.target.name]: event.target.value,
        });
      } else {
        onChangeHandler({ [event.target.name]: event.target.value } as Item);
      }
    }}
  >
    {children}
  </FormControl>
);

export default Dropdown;
