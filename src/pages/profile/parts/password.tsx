import React, { FC, useState } from 'react';
import Form from 'react-bootstrap/esm/Form';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import InputGroup from 'react-bootstrap/esm/InputGroup';
import Button from 'react-bootstrap/esm/Button';

const Password: FC = () => {
  const [changePass, setChangePass] = useState(false);

  return (
    <>
      <Form.Group as={Row}>
        <Form.Label column sm={2}>
          Password:
        </Form.Label>
        <Col sm={10}>
          <InputGroup>
            <Form.Control
              type="password"
              placeholder="password"
              readOnly={!changePass}
            />
            <InputGroup.Append>
              <Button
                variant="outline-secondary"
                onClick={() => setChangePass(!changePass)}
              >
                Change password
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Form.Group>

      {changePass
        ? (
          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
              <Form.Control type="password" placeholder="repeat password" />
            </Col>
          </Form.Group>
        )
        : null}
    </>
  );
};

export default Password;
