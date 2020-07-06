import React, { FC, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { auth } from '@utils/firebase';
import { getUrlParameter } from '@utils/helpers';

import VerifyProps from './types';

const Verify: FC<VerifyProps> = ({ modalHandler, successHandler }): JSX.Element => {
  const [parsingQueryString, setParsingQueryString] = useState(false);

  useEffect(() => {
    const mode = getUrlParameter('mode');

    if (mode) {
      const actionCode = getUrlParameter('oobCode');

      auth.applyActionCode(actionCode)
        .then(() => {
          successHandler(true);
          modalHandler('email-verify-check');
          setParsingQueryString(true);
        })
        .catch(() => {
          successHandler(false);
          modalHandler('email-verify-check');
          setParsingQueryString(true);
        });
    }
  }, []);

  return (
    <>
      {
        parsingQueryString
          ? <Redirect to="/" />
          : null
      }
    </>
  );
};
export default Verify;
