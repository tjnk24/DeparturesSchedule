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
import { showMessage } from '@store/actions/modals';
import { MessagePayloadType } from '@apptypes/store';

const verifySuccessTitle = messages.titles.verifySuccess;
const verifyFailTitle = messages.titles.verifyFail;
const restoreSuccessMessage = messages.titles.restoreSuccess;
const canSignInMessage = messages.messagesText.canSignIn;
const verifyFailMessage = messages.messagesText.verifyFail;


const Verify: FC = () => {
  const { dispatch } = useContext(Context);

  const [verifySuccess, setVerifySuccess] = useState(false);

  const setSuccessAction = (message: MessagePayloadType) => {
    setVerifySuccess(true);

    dispatch(showMessage({ ...message }));
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

        default:
          break;
      }
    }
  }, []);

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
