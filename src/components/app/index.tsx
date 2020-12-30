import React, { FC, useContext } from 'react';
import {
  Switch,
  Route,
  Redirect,
  withRouter,
  RouteComponentProps,
} from 'react-router-dom';
import { useSelector } from 'react-redux';

import RouteWrap from '@components/route-wrap';
import Layout from '@components/layout';
import Header from '@components/header';
import Schedule from '@pages/schedule';
import Constructor from '@pages/constructor';
import Profile from '@pages/profile';
import Verify from '@pages/verify';

import Backdrop from '@components/modals/backdrop';
import EmailVerify from '@components/modals/email-verify';
import Message from '@components/modals/message';
import SignUp from '@components/modals/sign-up';
import Login from '@components/modals/login';
import ForgotPassword from '@components/modals/forgot-password';
import ResetPassword from '@components/modals/reset-password';

import { AuthUserState } from '@store/reducers/authUser/types';
import { RootState } from '@store/reducers/rootReducer/types';

import classnames from 'classnames/bind';
import style from './style.scss';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const cn = classnames.bind(style);

const App: FC = (): JSX.Element => {
  const rootState = useSelector((state: RootState) => state);

  console.log(rootState);

  // const setModals = (
  //   <Backdrop>
  //     <Login />
  //     <SignUp />
  //     <EmailVerify />
  //     <Message />
  //     <ForgotPassword />
  //     <ResetPassword />
  //   </Backdrop>
  // );

  (
    <>
      {/* {
        authUserLoaded
          ? (
            <>
              { setModals }
              <Header />
              <Switch>
                <RouteWrap path="/" exact layout={Layout} component={Constructor} />
                <Route path="/schedule" component={Schedule} />
                <Route path="/verify">
                  <Verify />
                </Route>
                <Profile />
                <Redirect exact from="/" to="/constructor" />
                <Redirect to="/" />
              </Switch>
            </>
          ) : null
      } */}
    </>
  );
};

export default withRouter(App);
