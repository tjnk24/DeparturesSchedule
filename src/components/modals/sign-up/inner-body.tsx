import React, { FC } from 'react';
import classnames from 'classnames/bind';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Form from 'react-bootstrap/esm/Form';
import Button from 'react-bootstrap/esm/Button';
import InnerForm from '../parts/inner-form';

import style from './style.scss';

import { ModalProps, formikInnerTypes } from '../types';

const cn = classnames.bind(style);

const schema = Yup.object()
  .shape({
    username: Yup.string()
      .min(5)
      .max(10)
      .trim()
      .required('please, enter your username'),
    email: Yup.string()
      .email()
      .required('please, enter your email'),
    password: Yup.string()
      .trim()
      .required('please, enter your password'),
    repeatPassword: Yup.string()
      .oneOf([Yup.ref('password'), undefined], 'Passwords must match'),
  });

const InnerBody: FC<ModalProps> = ({ handler }) => {
  const formikInner: formikInnerTypes = (props) => {
    const {
      values,
      errors,
      handleChange,
      handleBlur,
      handleSubmit,
    } = props;

    const usernameProps = {
      name         : 'username',
      placeholder  : 'Enter username',
      type         : 'text',
      labelText    : 'Username',
      values       : values.username,
      errors       : errors.username,
      handleChange,
      handleBlur,
    };

    const emailProps = {
      name         : 'email',
      placeholder  : 'Enter email',
      type         : 'text',
      labelText    : 'Email',
      values       : values.email,
      errors       : errors.email,
      handleChange,
      handleBlur,
    };

    const passwordProps = {
      name         : 'password',
      placeholder  : 'Enter password',
      type         : 'password',
      labelText    : 'Password',
      values       : values.password,
      errors       : errors.password,
      handleChange,
      handleBlur,
    };

    const repeatPasswordProps = {
      name         : 'repeatPassword',
      placeholder  : 'Repeat password',
      type         : 'password',
      labelText    : 'Repeat password',
      values       : values.repeatPassword,
      errors       : errors.repeatPassword,
      handleChange,
      handleBlur,
    };

    return (
      <Form noValidate onSubmit={handleSubmit}>
        <Form.Group>
          <InnerForm {...usernameProps} />
        </Form.Group>

        <Form.Group>
          <InnerForm {...emailProps} />
        </Form.Group>

        <Form.Group>
          <InnerForm {...passwordProps} />
        </Form.Group>

        <Form.Group>
          <InnerForm {...repeatPasswordProps} />
        </Form.Group>

        <Button
          type="submit"
          className={cn('sign-up-button')}
        >
          Sign up!
        </Button>
      </Form>
    );
  };

  return (
    <Formik
      onSubmit={console.log}
      validationSchema={schema}
      initialValues={{
        username: '',
        email: '',
        password: '',
        repeatPassword: '',
      }}
    >
      {formikInner}
    </Formik>
  );
};

export default InnerBody;
