import React, { FC } from 'react';

import classnames from 'classnames/bind';
import bootstrap from '@bootstrap-module';
import style from './style.scss';

const cn = classnames.bind(style);

const SignUp: FC = () => (
  <div
    // className="modal fade"
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
          <h5 className={cn(bootstrap['modal-title'])} id="exampleModalLabel">Create an account</h5>
          <button
            type="button"
            className={cn(bootstrap.close, 'close-button')}
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className={cn(bootstrap['modal-body'], 'modal-wrap')}>
          <form>
            <div className={cn(bootstrap['form-group'])}>
              <label htmlFor="recipient-name" className={cn(bootstrap['col-form-label'])}>
                Your Name:
                <input type="text" className={cn(bootstrap['form-control'])} id="recipient-name" />
              </label>
            </div>
            <div className={cn(bootstrap['form-group'])}>
              <label htmlFor="recipient-email" className={cn(bootstrap['col-form-label'])}>
                Your Email:
                <input type="text" className={cn(bootstrap['form-control'])} id="recipient-email" />
              </label>
            </div>
            <div className={cn(bootstrap['form-group'])}>
              <label htmlFor="recipient-password" className={cn(bootstrap['col-form-label'])}>
                Your password:
                <input type="password" className={cn(bootstrap['form-control'])} id="recipient-password" />
              </label>
            </div>
            <div className={cn(bootstrap['form-group'])}>
              <label htmlFor="recipient-password-repeat" className={cn(bootstrap['col-form-label'])}>
                Repeat your password:
                <input type="password" className={cn(bootstrap['form-control'])} id="recipient-password-repeat" />
              </label>
            </div>
          </form>
        </div>
        <button type="button" className={cn(bootstrap.btn, bootstrap['btn-primary'], 'sign-up-button')}>Sign up!</button>
        <div className={cn(bootstrap['modal-footer'])}>
          Already have an account?
          <button type="button" className={cn(bootstrap.btn, bootstrap['btn-link'])}>Login here</button>
        </div>
      </div>
    </div>
  </div>
);

export default SignUp;
