import React, { FC, useState } from 'react';
import Form from 'react-bootstrap/esm/Form';
import Button from 'react-bootstrap/esm/Button';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import InputGroup from 'react-bootstrap/esm/InputGroup';

import classnames from 'classnames/bind';
import style from './style.scss';

const cn = classnames.bind(style);

const Profile: FC = () => {
  const [changePass, setChangePass] = useState(false);

  return (
    <Form className={cn('profile-form')}>
      <Form.Group as={Row}>
        <Form.Label column sm={2}>
          Username:
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" placeholder="username" />
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Form.Label column sm={2}>
          Email:
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="email" placeholder="email" />
        </Col>
      </Form.Group>

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

      <Form.Group as={Row}>
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit">Update profile</Button>
        </Col>
      </Form.Group>
    </Form>
  );
};

export default Profile;
