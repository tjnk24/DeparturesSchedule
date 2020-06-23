import React, { FC } from 'react';
import Form from 'react-bootstrap/esm/Form';

import { InnerFormProps } from './types';

const InnerForm: FC<InnerFormProps> = ({
  name,
  placeholder,
  type,
  labelText,
  values,
  handleChange,
  handleBlur,
  errors,
}) => (
  <>
    <Form.Label>{ labelText }</Form.Label>
    <Form.Control
      name={name}
      placeholder={placeholder}
      type={type}
      value={values}
      onChange={handleChange}
      onBlur={handleBlur}
      isInvalid={!!errors}
      required
    />
    <Form.Control.Feedback type="invalid">
      { errors }
    </Form.Control.Feedback>
  </>
);

export default InnerForm;
