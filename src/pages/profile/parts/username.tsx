import React, { FC } from 'react';
import Form from 'react-bootstrap/esm/Form';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

const UserName: FC = () => (
  <Form.Group as={Row}>
    <Form.Label column sm={2}>
      Username:
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" placeholder="username" />
    </Col>
  </Form.Group>
);

export default UserName;
