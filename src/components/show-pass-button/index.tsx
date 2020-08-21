import React, { FC } from 'react';
import { ShowPassIcon, HidePassIcon } from '@components/icons';

import ShowPassButtonProps from './types';

const ShowPassButton: FC<ShowPassButtonProps> = ({ type, setType }) => {
  const showPassHandler = () => {
    type === 'password'
      ? setType('text')
      : setType('password');
  };

  return (
    <button
      type="button"
      onClick={showPassHandler}
    >
      {
      type === 'password'
        ? ShowPassIcon
        : HidePassIcon
      }
    </button>
  );
};

export default ShowPassButton;
