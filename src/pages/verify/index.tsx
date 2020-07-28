import React, {
  FC,
  useEffect,
  useState,
  useContext,
} from 'react';
import { Redirect } from 'react-router-dom';
import { auth } from '@utils/firebase';
import { getUrlParameter } from '@utils/helpers';

import { Context } from '@store/provider';

import messages from '@components/modals/message/messages';
import { showMessage, showResetPass } from '@store/actions/modals';
import { MessagePayloadType, ResetPassPayloadType } from '@apptypes/store';

// TODO: сделать что-то с этим
const verifySuccessTitle = messages.titles.verifySuccess;
const verifyFailTitle = messages.titles.verifyFail;
const resetPassFail = messages.titles.passwordResetFail;
const restoreSuccessMessage = messages.titles.restoreSuccess;
const canSignInMessage = messages.messagesText.canSignIn;
const verifyFailMessage = messages.messagesText.verifyFail;
const resetPassFailMessage = messages.messagesText.passwordResetFail;


const Verify: FC = () => {
  const { dispatch } = useContext(Context);

  const [verifySuccess, setVerifySuccess] = useState(false);

  const setSuccessAction = (payload: MessagePayloadType | ResetPassPayloadType) => {
    setVerifySuccess(true);

    const { actionCode } = payload as ResetPassPayloadType;

    actionCode
      ? dispatch(showResetPass({ actionCode }))
      : dispatch(showMessage({ ...payload }));
  };

  useEffect(() => {
    const mode = getUrlParameter('mode');

    if (mode) {
      const actionCode = getUrlParameter('oobCode');

      switch (mode) {
        case 'verifyEmail':
          auth.applyActionCode(actionCode)
            .then(() => {
              setSuccessAction({
                title: verifySuccessTitle,
                messageText: canSignInMessage,
              });
            })
            .catch(() => {
              setSuccessAction({
                title: verifyFailTitle,
                messageText: verifyFailMessage,
              });
            });
          break;

        case 'recoverEmail':
          auth.checkActionCode(actionCode)
            .then(() => {
              auth.applyActionCode(actionCode)
                .then(() => setSuccessAction({
                  title: restoreSuccessMessage,
                  messageText: canSignInMessage,
                }))
                .catch(() => setSuccessAction({
                  title: verifyFailTitle,
                  messageText: verifyFailMessage,
                }));
            })
            .catch(() => setSuccessAction({
              title: verifyFailTitle,
              messageText: verifyFailMessage,
            }));
          break;
        case 'resetPassword':
          auth.verifyPasswordResetCode(actionCode)
            .then(() => setSuccessAction({
              actionCode,
            }))
            .catch(() => setSuccessAction({
              title: resetPassFail,
              messageText: resetPassFailMessage,
            }));
          break;

        default:
          break;
      }
    }
  }, []);

  // TODO: сделать редирект, если нет экшнкода
  return (
    <>
      {
        verifySuccess
          ? <Redirect to="/" />
          : null
      }
    </>
  );
};
export default Verify;
