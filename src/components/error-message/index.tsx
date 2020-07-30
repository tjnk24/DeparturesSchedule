import React, { FC } from 'react';
import classnames from 'classnames/bind';
import Form from 'react-bootstrap/esm/Form';

import FormErrorMessageProps from './types';

import style from './style.scss';

const cn = classnames.bind(style);

const FormErrorMessage: FC<FormErrorMessageProps> = ({ message }) => (
  message !== ''
    ? (
      <Form.Group>
        <Form.Text className={cn('error-message')}>
          { message }
        </Form.Text>
      </Form.Group>
    ) : null
);

export default FormErrorMessage;
