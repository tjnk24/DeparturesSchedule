import React, { FC, useState, useContext } from 'react';
import { Context } from '@store/provider';
import { Link, Redirect } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import { showMessage } from '@store/actions/modals';
import { auth, emailAuthProvider } from '@utils/firebase';
import messages from '@components/modals/message/messages';
import classnames from 'classnames/bind';

import { ProfileInnerProps, SubmitActionTypes } from './types';

import FormBlock from '../form-block';

import style from './style.scss';

const cn = classnames.bind(style);

const ProfileInner: FC<ProfileInnerProps> = ({ componentProps }) => {
  const { dispatch } = useContext(Context);

  const [buttonsDisabled, setButtonsDisabled] = useState(false);
  const { user } = componentProps;

  const { email, displayName } = user;

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
            auth.signOut();
            return <Redirect to="/" />;
          })
          .catch((error) => {
            messageHandler(error.message);
            popoverHandler && popoverHandler(false);
            setButtonsDisabled(false);
            editingHandler(false);
          });
      })
      .catch((error) => {
        messageHandler(error.message);
        setButtonsDisabled(false);
        editingHandler(false);
      });
  };

  const updatePassword: SubmitActionTypes = (
    formPayload,
    messageHandler,
    editingHandler,
    popoverHandler,
    popoverPayload,
    resetFormHandler,
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
        currentUser.updatePassword(formPayload.password)
          .then(() => {
            messageHandler('Your password successfully changed!');
            popoverHandler && popoverHandler(false);
            setButtonsDisabled(false);
            editingHandler(false);
            resetFormHandler?.({ values: '' });
          })
          .catch((error) => {
            messageHandler(error.message);
            popoverHandler && popoverHandler(false);
            setButtonsDisabled(false);
            editingHandler(false);
            resetFormHandler?.({ values: '' });
          });
      })
      .catch((error) => {
        messageHandler(error.message);
        setButtonsDisabled(false);
        editingHandler(false);
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
          action={updatePassword}
          disabled={buttonsDisabled}
          startMessage="We'll need you to re-enter old your
          password on submit."
        />
      </div>
    </>
  );
};

export default ProfileInner;
