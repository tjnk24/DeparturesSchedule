import React, { FC } from 'react';
import Spinner from 'react-bootstrap/esm/Spinner';
import Button from 'react-bootstrap/esm/Button';

import SubmitButtonProps from './types';

const SubmitButton: FC<SubmitButtonProps> = ({
  style,
  customCss,
  disabled,
  innerText,
}) => (
  <Button
    style={style}
    type="submit"
    className={customCss?.() || ''}
    disabled={disabled}
  >
    {
        disabled
          ? (
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          )
          : innerText
        }
  </Button>
);

export default SubmitButton;
