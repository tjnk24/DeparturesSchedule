import React, { FC } from 'react';
import Form from 'react-bootstrap/esm/Form';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

import { InnerFormProps } from '@apptypes/components';

const InnerForm: FC<InnerFormProps> = ({
  labelText,
  errors,
  ...rest
}) => (
  <Form.Group as={Row}>
    <Form.Label column sm={2}>
      { labelText }
    </Form.Label>
    <Col sm={10}>
      <Form.Control
        {...rest}
        isInvalid={!!errors}
        required
      />
      <Form.Control.Feedback type="invalid">
        { errors }
      </Form.Control.Feedback>
    </Col>
  </Form.Group>
);

export default InnerForm;
