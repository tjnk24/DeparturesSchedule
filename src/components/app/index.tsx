import React, { FC, useState } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  withRouter,
  RouteComponentProps,
} from 'react-router-dom';

import RouteWrap from '@components/route-wrap';
import Layout from '@components/layout';
import Header from '@components/header';
import Schedule from '@pages/schedule';
import Constructor from '@pages/constructor';
import Profile from '@pages/profile';
import Verify from '@pages/verify';

import Backdrop from '@components/modals/backdrop';
import EmailVerifySend from '@components/modals/email-verify/send';
import EmailCheck from '@components/modals/email-verify/check';
import SignUp from '@components/modals/sign-up';
import Login from '@components/modals/login';
import ForgotPassword from '@components/modals/forgot-password';

import { Provider } from '@store/provider';

import classnames from 'classnames/bind';
import style from './style.scss';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const cn = classnames.bind(style);

const App: FC<RouteComponentProps> = (): JSX.Element => {
  const [modal, setModal] = useState('');
  const [emailCheckSuccess, setEmailCheckSuccess] = useState(false);

  const setModals = (
    <Backdrop modal={modal} handler={setModal}>
      <Login />
      <SignUp />
      <EmailVerifySend />
      <EmailCheck success={emailCheckSuccess} />
      <ForgotPassword />
    </Backdrop>
  );

  return (
    <>
      { setModals }
      <BrowserRouter>
        <Provider>
          <Header handler={setModal} />
          <Switch>
            <RouteWrap path="/" exact layout={Layout} component={Constructor} />
            <Route path="/schedule" component={Schedule} />
            <RouteWrap path="/profile" component={Profile} layout={Layout} />
            <Route path="/verify">
              <Verify
                modalHandler={setModal}
                successHandler={setEmailCheckSuccess}
              />
            </Route>
            <Redirect exact from="/" to="/constructor" />
            <Redirect to="/" />
          </Switch>
        </Provider>
      </BrowserRouter>
    </>
  );
};

export default withRouter(App);
