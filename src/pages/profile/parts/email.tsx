import React, { FC } from 'react';
import Form from 'react-bootstrap/esm/Form';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

const Email: FC = () => (
  <Form.Group as={Row}>
    <Form.Label column sm={2}>
          Email:
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="email" placeholder="email" />
    </Col>
  </Form.Group>
);

export default Email;
