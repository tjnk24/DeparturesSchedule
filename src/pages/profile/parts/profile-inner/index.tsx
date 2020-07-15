import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '@utils/firebase';
import Form from 'react-bootstrap/esm/Form';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/esm/Button';
import classnames from 'classnames/bind';
import FormValidator from '@components/form-validator';
import SubmitButton from '@components/submit-button';

import FormInner from '../form-inner';
import PasswordBlock from '../password-block';

import { ProfileInnerProps, updateProfileTypes } from './types';

import style from './style.scss';

const cn = classnames.bind(style);

const ProfileInner: FC<ProfileInnerProps> = ({ componentProps }) => {
  const { displayName, email: userEmail } = componentProps;

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [message, setMessage] = useState('');

  const updateProfile = (payload: updateProfileTypes) => {
    console.log('updateProfile', payload);

    const user = auth.currentUser;
    const {
      username,
      email,
      password,
    } = payload;

    const usernameChanged = username !== displayName;
    const emailChanged = email !== userEmail;

    if (usernameChanged || emailChanged || password) {
      setButtonDisabled(true);

      if (usernameChanged) {
        user
          ?.updateProfile({
            displayName: username,
          })
          .catch((error) => {
            setMessage(`Email error: ${error.message}`);
          });
        console.log('username changed');
      }
      if (emailChanged) {
        user
          ?.updateEmail(email)
          .catch((error) => {
            setMessage(`Email error: ${error.message}`);
          });
        console.log('email changed');
      }
      if (password) {
        // TODO: проблема в setMessage, который задаётся неправильно, починить
        // user
        //   ?.updatePassword(password)
        //   .catch((error) => {
        //     setMessage(error);
        //   });
        console.log('password changed');
      }

      setButtonDisabled(false);
      // setMessage('Your profile data successfully updated!');
    } else {
      setMessage('Sorry, there is nothing to update');
    }
  };

  return (
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
        action={updateProfile}
        startValues={{
          username: displayName,
          email: userEmail,
        }}
        requirePassword={false}
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
              <FormInner {...username} />
              <FormInner {...email} />
              <PasswordBlock
                password={password}
                repeatPassword={repeatPassword}
              />
              {
                message !== ''
                && (
                  <Form.Group>
                    <Form.Text>
                      { message }
                    </Form.Text>
                  </Form.Group>
                )
              }
              <Form.Group as={Row}>
                <Col sm={{ span: 10, offset: 2 }}>
                  <SubmitButton
                    disabled={buttonDisabled}
                    innerText="Update profile"
                  />
                  {/* <Button type="submit">Update profile</Button> */}
                </Col>
              </Form.Group>
            </Form>
          );
        }}
      </FormValidator>
    </>
  );
};

export default ProfileInner;
