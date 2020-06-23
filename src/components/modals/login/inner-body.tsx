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
    email: Yup.string()
      .email()
      .required('please, enter your email'),
    password: Yup.string()
      .trim()
      .required('please, enter your password'),
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

    const emailProps = {
      name         : 'email',
      placeholder  : 'Enter email',
      type         : 'text',
      labelText    : 'Your email',
      values       : values.email,
      errors       : errors.email,
      handleChange,
      handleBlur,
    };

    const passwordProps = {
      name         : 'password',
      placeholder  : 'Enter password',
      type         : 'password',
      labelText    : 'Your password',
      values       : values.password,
      errors       : errors.password,
      handleChange,
      handleBlur,
    };

    return (
      <Form noValidate onSubmit={handleSubmit}>
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
  };

  return (
    <Formik
      onSubmit={console.log}
      validationSchema={schema}
      initialValues={{
        email: '',
        password: '',
      }}
    >
      {formikInner}
    </Formik>
  );
};

export default InnerBody;
