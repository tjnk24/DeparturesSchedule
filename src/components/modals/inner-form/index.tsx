import React, { FC, useState } from 'react';
import classnames from 'classnames/bind';
import Form from 'react-bootstrap/esm/Form';
import { InnerFormProps } from '@apptypes/components';
import { ShowPassIcon, HidePassIcon } from './icons';

import style from './style.scss';

const cn = classnames.bind(style);

const InnerForm: FC<InnerFormProps> = ({
  labelText,
  errors,
  type,
  ...rest
}) => {
  const isPassword = type === ('password' || 'repeatPassword');

  const [inputType, setInputType] = useState(isPassword ? 'password' : type);

  const showPassHandler = () => {
    inputType === 'password'
      ? setInputType('text')
      : setInputType('password');
  };

  return (
    <>
      <Form.Label>{ labelText }</Form.Label>
      <div className={cn('input-wrap')}>
        <Form.Control
          className={isPassword && !!errors ? cn('password-error') : undefined}
          type={inputType}
          isInvalid={!!errors}
          required
          {...rest}
        />
        {
          isPassword
            ? (
              <button
                type="button"
                onClick={showPassHandler}
              >
                {
                inputType === 'password'
                  ? ShowPassIcon
                  : HidePassIcon
              }
              </button>
            )
            : null
        }
        <Form.Control.Feedback type="invalid">
          { errors }
        </Form.Control.Feedback>
      </div>
    </>
  );
};

export default InnerForm;
