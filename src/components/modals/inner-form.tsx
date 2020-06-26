import React, { FC } from 'react';
import Form from 'react-bootstrap/esm/Form';

import { InnerFormProps } from '@apptypes/components';

const InnerForm: FC<InnerFormProps> = ({
  labelText,
  errors,
  ...rest
}) => (
  <>
    <Form.Label>{ labelText }</Form.Label>
    <Form.Control
      {...rest}
      isInvalid={!!errors}
      required
    />
    <Form.Control.Feedback type="invalid">
      { errors }
    </Form.Control.Feedback>
  </>
);

export default InnerForm;
