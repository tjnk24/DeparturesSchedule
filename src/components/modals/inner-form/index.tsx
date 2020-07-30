import React, { FC, useState } from 'react';
import ShowPassButton from '@components/show-pass-button';
import classnames from 'classnames/bind';
import Form from 'react-bootstrap/esm/Form';
import { FormInnerProps } from '@apptypes/components';

import style from './style.scss';

const cn = classnames.bind(style);

const InnerForm: FC<FormInnerProps> = ({
  labeltext: labelText,
  errors,
  type,
  ...rest
}) => {
  const isPassword = type === ('password' || 'repeatPassword');

  const [inputType, setInputType] = useState(isPassword ? 'password' : type);

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
              <ShowPassButton
                type={inputType}
                setType={setInputType}
              />
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
