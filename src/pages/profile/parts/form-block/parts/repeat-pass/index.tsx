import React, { FC } from 'react';
import Form from 'react-bootstrap/esm/Form';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';

import RepeatPassProps from './types';

const RepeatPass: FC<RepeatPassProps> = ({
  inputType,
  editing,
  repeatPassProps,
  readOnly,
  message,
}) => (
  <Form.Group as={Row}>
    <Col sm={{ span: 7, offset: 2 }}>
      <Form.Control
        type={inputType}
        isInvalid={editing && !!repeatPassProps?.errors}
        required
        plaintext={!editing}
        readOnly={readOnly}
        {...repeatPassProps}
      />
      <Form.Control.Feedback type="invalid">
        { repeatPassProps?.errors }
      </Form.Control.Feedback>
      {
        message !== ''
        && (
        <Form.Text>
          { message }
        </Form.Text>
        )
      }
    </Col>
  </Form.Group>
);

export default RepeatPass;
