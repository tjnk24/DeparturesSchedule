import React, {
  FC,
  useEffect,
  useState,
} from 'react';
import { Redirect } from 'react-router-dom';
import { auth } from '@utils/firebase';
import { getUrlParameter } from '@utils/helpers';

import messages from '@components/modals/message/messages';
import { showMessage, showResetPass } from '@store/actions/modals';
import { useDispatch } from 'react-redux';
import { MessagePayload, ResetPassPayload } from '@store/actions/modals/types';

const {
  verifySuccess,
  verifyFail: verifyFailTitle,
  passwordResetFail: passwordResetFailTitle,
  restoreSuccess,
} = messages.titles;

const {
  canSignIn,
  verifyFail,
  passwordResetFail,
} = messages.messagesText;

const Verify: FC = () => {
  const dispatch = useDispatch();

  const [success, setSuccess] = useState(false);

  const setSuccessAction = (payload: MessagePayload | ResetPassPayload) => {
    setSuccess(true);

    const { actionCode } = payload as ResetPassPayload;

    actionCode
      ? dispatch(showResetPass({ actionCode }))
      : dispatch(showMessage({ ...payload as MessagePayload }));
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
                title: verifySuccess,
                messageText: canSignIn,
              });
            })
            .catch(() => {
              setSuccessAction({
                title: verifyFailTitle,
                messageText: verifyFail,
              });
            });
          break;

        case 'recoverEmail':
          auth.checkActionCode(actionCode)
            .then(() => {
              auth.applyActionCode(actionCode)
                .then(() => setSuccessAction({
                  title: restoreSuccess,
                  messageText: canSignIn,
                }))
                .catch(() => setSuccessAction({
                  title: verifyFailTitle,
                  messageText: verifyFail,
                }));
            })
            .catch(() => setSuccessAction({
              title: verifyFailTitle,
              messageText: verifyFail,
            }));
          break;
        case 'resetPassword':
          auth.verifyPasswordResetCode(actionCode)
            .then(() => setSuccessAction({
              actionCode,
            }))
            .catch(() => setSuccessAction({
              title: passwordResetFailTitle,
              messageText: passwordResetFail,
            }));
          break;

        default:
          break;
      }
    }
  }, []);

  return (
    <>
      {
        success || !getUrlParameter('mode')
          ? <Redirect to="/" />
          : null
      }
    </>
  );
};
export default Verify;
