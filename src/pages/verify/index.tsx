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
  const { dispatch } = useContext(Context);

  const [isSuccess, setIsSuccess] = useState(false);

  const setSuccessAction = (payload: MessagePayloadType | ResetPassPayloadType) => {
    setIsSuccess(true);

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
        isSuccess || !getUrlParameter('mode')
          ? <Redirect to="/" />
          : null
      }
    </>
  );
};
export default Verify;
