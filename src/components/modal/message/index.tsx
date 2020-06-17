import React, { FC } from 'react';

import classnames from 'classnames/bind';
import bootstrap from '@bootstrap-module';
import style from './style.scss';

const cn = classnames.bind(style);

const tempEmailPlaceholder = 'test@test.test';

const Message: FC = () => (
  <div
    className={cn(bootstrap.modal, bootstrap.fade, bootstrap.show)}
    style={{ display: 'block' }}
    id="exampleModal"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-modal="true"
  >
    <div className={cn(bootstrap['modal-dialog'])} role="document">
      <div className={cn(bootstrap['modal-content'])}>
        <div className={cn(bootstrap['modal-header'])}>
          <h5 className={cn(bootstrap['modal-title'])} id="exampleModalLabel">Verification email sent</h5>
          <button type="button" className={cn(bootstrap.close)} data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className={cn(bootstrap['modal-body'])}>
            A verification email has been sent to your email address:
          {' '}
          {tempEmailPlaceholder}
          After verifying your email address, you can log in
          to your account and use features for registered users.
        </div>
        <div className={cn(bootstrap['modal-footer'], 'footer-wrap')}>
          Email did not arrive?
          <button type="button" className={cn(bootstrap.btn, bootstrap['btn-link'])}>Resend the verification email</button>
        </div>
      </div>
    </div>
  </div>
);

export default Message;
