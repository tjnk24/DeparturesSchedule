import React, { FC, useState, useContext } from 'react';
import { Context } from '@store/provider';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import { showMessage } from '@store/actions/modals';
import { auth, emailAuthProvider } from '@utils/firebase';
import messages from '@components/modals/message/messages';
import classnames from 'classnames/bind';

import { ProfileInnerProps, SubmitActionTypes } from './types';

import FormBlock from '../form-block';
import PasswordBlock from '../password-block';


import style from './style.scss';

const cn = classnames.bind(style);

const ProfileInner: FC<ProfileInnerProps> = ({ componentProps }) => {
  const { dispatch } = useContext(Context);

  const [buttonsDisabled, setButtonsDisabled] = useState(false);
  const { user, setEmailChanged } = componentProps;

  const { email, displayName } = user;

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

  const updateUsername: SubmitActionTypes = (formPayload, messageHandler, editingHandler) => {
    setButtonsDisabled(true);
    const { currentUser } = auth;

    currentUser
      ?.updateProfile({
        displayName: formPayload.username,
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

  const updateEmail: SubmitActionTypes = (
    formPayload,
    messageHandler,
    editingHandler,
    popoverHandler,
    popoverPayload,
  ) => {
    setButtonsDisabled(true);
    const { currentUser } = auth;

    const credential = emailAuthProvider.credential(
      currentUser?.email as string,
      popoverPayload?.password as string,
    );

    currentUser
      ?.reauthenticateWithCredential(credential)
      .then(() => {
        currentUser.updateEmail(formPayload.email)
          .then(() => {
            currentUser.sendEmailVerification();
            dispatch(showMessage({
              title       : messages.titles.emailSent,
              messageText : messages.messagesText.emailVerifySent,
            }));
            popoverHandler && popoverHandler(false);
            setButtonsDisabled(false);
            editingHandler(false);
            setEmailChanged(true);
          })
          .catch((error) => {
            messageHandler(error.message);
            popoverHandler && popoverHandler(false);
            setButtonsDisabled(false);
            editingHandler(false);
          });
      });
  };

  // const updatePassword = (formPayload) => console.log(formPayload);

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
          startValue={{ username: displayName }}
        />
        <FormBlock
          reauth
          type="email"
          action={updateEmail}
          disabled={buttonsDisabled}
          startValue={{ email }}
          startMessage="We'll need you to re-enter your
          password for this operation."
        />
        <FormBlock
          reauth
          type="password"
          action={console.log}
          disabled={buttonsDisabled}
        />
      </div>
    </>
  );
};

export default ProfileInner;
