import React, { FC, useEffect } from 'react';
import {
  Switch,
  Route,
  Redirect,
  withRouter,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

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

import { auth } from '@utils/firebase';

import { removeState, saveState, setLoggedIn } from '@store/actions/constructor';
import authUserUpdate from '@store/actions/authUser';
import { RootState } from '@store/reducers/rootReducer/types';

import classnames from 'classnames/bind';

import style from './style.scss';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const cn = classnames.bind(style);

const App: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const { authUserLoaded, user } = useSelector((state: RootState) => state.authUser);

  useEffect(() => {
    const listener = auth.onAuthStateChanged((authUser) => {
      dispatch(authUserUpdate(authUser));

      if (authUser) {
        dispatch(setLoggedIn(true));
      } else {
        dispatch(removeState());
        dispatch(setLoggedIn(false));
      }
    });

    return () => {
      listener();
    };
  }, []);

  useEffect(() => {
    user && dispatch(saveState());
  }, [user]);

  const setModals = (
    <Backdrop>
      <Login />
      <SignUp />
      <EmailVerify />
      <Message />
      <ForgotPassword />
      <ResetPassword />
    </Backdrop>
  );

  return (
    <>
      {
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
      }
    </>
  );
};

export default withRouter(App);
