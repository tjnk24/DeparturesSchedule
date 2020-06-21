import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/esm/Form';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/esm/Button';
import classnames from 'classnames/bind';

import UserName from './parts/username';
import Email from './parts/email';
import Password from './parts/password';

import style from './style.scss';

const cn = classnames.bind(style);

const Profile: FC = () => (
  <>
    <div className={cn('link')}>
      <Link to="/">
        <Button variant="light">Back to constructor</Button>
      </Link>
    </div>
    <Form className={cn('profile-form')}>
      <UserName />
      <Email />
      <Password />

      <Form.Group as={Row}>
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit">Update profile</Button>
        </Col>
      </Form.Group>
    </Form>
  </>
);

export default Profile;
