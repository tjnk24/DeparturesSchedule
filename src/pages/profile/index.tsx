import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/esm/Form';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/esm/Button';
import classnames from 'classnames/bind';
import FormValidator from '@components/form-validator';

import InnerForm from './parts/inner-form';
import PasswordBlock from './parts/password-block';

import style from './style.scss';

const cn = classnames.bind(style);

const Profile: FC = () => (
  <>
    <div className={cn('link')}>
      <Link to="/">
        <Button variant="light">Back to constructor</Button>
      </Link>
    </div>
    <FormValidator
      inputs={[
        'username',
        'email',
        'password',
        'repeatPassword',
      ]}
    >
      {({ inputProps, handleSubmit }) => {
        const {
          username,
          email,
          password,
          repeatPassword,
        } = inputProps;

        return (
          <Form
            className={cn('profile-form')}
            onSubmit={handleSubmit}
            noValidate
          >
            <InnerForm {...username} />
            <InnerForm {...email} />
            <PasswordBlock
              password={password}
              repeatPassword={repeatPassword}
            />

            <Form.Group as={Row}>
              <Col sm={{ span: 10, offset: 2 }}>
                <Button type="submit">Update profile</Button>
              </Col>
            </Form.Group>
          </Form>
        );
      }}
    </FormValidator>
  </>
);

export default Profile;
