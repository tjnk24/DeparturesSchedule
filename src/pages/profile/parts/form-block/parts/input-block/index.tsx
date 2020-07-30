import React, { FC } from 'react';
import classnames from 'classnames/bind';
import ShowPassButton from '@components/show-pass-button';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/esm/Form';

import InputBlockProps from './types';

import style from './style.scss';

const cn = classnames.bind(style);

const InputBlock: FC<InputBlockProps> = ({
  type,
  errors,
  message,
  editing,
  readOnly,
  inputType,
  isPassword,
  setInputType,
  validationRest,
}) => (
  <Col sm={7} className={cn('input-wrap')}>
    <Form.Control
      className={
        isPassword && !!errors
          ? cn('password-error')
          : undefined
      }
      type={inputType}
      isInvalid={editing && !!errors}
      required
      plaintext={!editing}
      readOnly={readOnly}
      {...validationRest}
    />
    {
      isPassword && editing
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
    {
      type !== 'password'
      && message !== ''
      && (
      <Form.Text>
        { message }
      </Form.Text>
      )
    }
  </Col>
);

export default InputBlock;
