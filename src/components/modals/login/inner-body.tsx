import React, { FC } from 'react';
import classnames from 'classnames/bind';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Form from 'react-bootstrap/esm/Form';
import Button from 'react-bootstrap/esm/Button';
import InnerForm from '../parts/input';

import style from './style.scss';

import { ModalProps } from '../types';

const cn = classnames.bind(style);

const schema = Yup.object()
  .shape({
    email: Yup.string()
      .email()
      .required('please, enter your email'),
    password: Yup.string()
      .trim()
      .required('please, enter your password'),
  });

const InnerBody: FC<ModalProps> = ({ handler }) => (
  <Formik
    onSubmit={console.log}
    validationSchema={schema}
    initialValues={{
      email: '',
      password: '',
    }}
  >
    {(props) => {
      const handlers = {
        handleChange : props.handleChange,
        handleBlur   : props.handleBlur,
      };

      const emailProps = {
        name         : 'email',
        placeholder  : 'Enter email',
        type         : 'text',
        labelText    : 'Your email',
        values       : props.values.email,
        errors       : props.errors.email,
        ...handlers,
      };

      const passwordProps = {
        name         : 'password',
        placeholder  : 'Enter password',
        type         : 'password',
        labelText    : 'Your password',
        values       : props.values.password,
        errors       : props.errors.password,
        ...handlers,
      };

      return (
        <Form noValidate onSubmit={props.handleSubmit}>
          <Form.Group>
            <InnerForm {...emailProps} />
          </Form.Group>

          <Form.Group>
            <InnerForm {...passwordProps} />
            <Button
              variant="link"
              className={cn('forgot-password-button')}
              onClick={() => handler('forgot-password')}
            >
                  Forgot your password?
            </Button>
          </Form.Group>

          <Button type="submit" className={cn('login-button')}>
                Log me in!
          </Button>
        </Form>
      );
    }}
  </Formik>
);

export default InnerBody;
