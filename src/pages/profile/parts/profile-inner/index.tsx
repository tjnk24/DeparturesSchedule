import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '@utils/firebase';
import Button from 'react-bootstrap/esm/Button';
import classnames from 'classnames/bind';

import { ProfileInnerProps, SubmitHandlerTypes } from './types';

import FormBlock from '../form-block';
import PasswordBlock from '../password-block';


import style from './style.scss';

const cn = classnames.bind(style);

const ProfileInner: FC<ProfileInnerProps> = ({ componentProps }) => {
  const [buttonsDisabled, setButtonsDisabled] = useState(false);
  const { displayName, email } = componentProps;

  // const updateProfile = (payload: updateProfileTypes) => {
  //   console.log('updateProfile', payload);

  //   const user = auth.currentUser;
  //   const {
  //     username,
  //     email,
  //     password,
  //   } = payload;

  //   const usernameChanged = username !== displayName;
  //   const emailChanged = email !== userEmail;

  //   if (usernameChanged || emailChanged || password) {
  //     setButtonDisabled(true);

  //     if (usernameChanged) {
  //       user
  //         ?.updateProfile({
  //           displayName: username,
  //         })
  //         .catch((error) => {
  //           setMessage(`Email error: ${error.message}`);
  //         });
  //       console.log('username changed');
  //     }
  //     if (emailChanged) {
  //       user
  //         ?.updateEmail(email)
  //         .catch((error) => {
  //           setMessage(`Email error: ${error.message}`);
  //         });
  //       console.log('email changed');
  //     }
  //     if (password) {
  //       // TODO: проблема в setMessage, который задаётся неправильно, починить
  //       // user
  //       //   ?.updatePassword(password)
  //       //   .catch((error) => {
  //       //     setMessage(error);
  //       //   });
  //       console.log('password changed');
  //     }

  //     setButtonDisabled(false);
  //     // setMessage('Your profile data successfully updated!');
  //   } else {
  //     setMessage('Sorry, there is nothing to update');
  //   }
  // };

  const updateUsername: SubmitHandlerTypes = (payload, messageHandler, editingHandler) => {
    setButtonsDisabled(true);
    const user = auth.currentUser;

    user
      ?.updateProfile({
        displayName: payload.username,
      })
      .then(() => {
        setButtonsDisabled(false);
        editingHandler(false);
        messageHandler('Your username successfully updated!');
      })
      .catch((error) => {
        editingHandler(false);
        messageHandler(error.handler);
      });
  };

  const updateEmail: SubmitHandlerTypes = (payload, messageHandler, editingHandler) => {
    setButtonsDisabled(true);
    const user = auth.currentUser;

    user
      ?.updateEmail(payload.email)
      .then(() => {
        setButtonsDisabled(false);
        editingHandler(false);
        messageHandler('We sent an email message to specified address, please verify your new email to proceed using this site.');
      })
      .catch((error) => {
        setButtonsDisabled(false);
        editingHandler(false);
        messageHandler(error.message);
      });
  };

  return (
    <>
      <div className={cn('link')}>
        <Link to="/">
          <Button variant="light">Back to constructor</Button>
        </Link>
      </div>
      <div className={cn('profile-form')}>
        <FormBlock
          type="username"
          action={updateUsername}
          disabled={buttonsDisabled}
          startValue={{
            username: displayName,
          }}
        />
        <FormBlock
          reauth
          type="email"
          action={updateEmail}
          disabled={buttonsDisabled}
          startValue={{ email }}
          startMessage="We'll need you to enter your
          login and password again for this operation."
        />
        {/* <PasswordBlock
          password={password}
          repeatPassword={repeatPassword}
        /> */}
      </div>
    </>
  );
};

export default ProfileInner;
