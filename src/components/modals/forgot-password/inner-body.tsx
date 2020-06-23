import React, { FC } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Form from 'react-bootstrap/esm/Form';
import Button from 'react-bootstrap/esm/Button';
import { ModalProps, formikInnerTypes } from '../types';
import InnerForm from '../parts/inner-form';

const schema = Yup.object()
  .shape({
    email: Yup.string()
      .email()
      .required('please, enter your email'),
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

    return (
      <>
        <p style={{ fontSize: '14px' }}>
          When you fill in your register email address and push the button below,
          we&apos;ll send an email message with instructions how to reset your password.
        </p>
        <br />
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group>
            <InnerForm {...emailProps} />
          </Form.Group>

          <Button onClick={() => handler('message')}>
            Send email
          </Button>
        </Form>
      </>
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
