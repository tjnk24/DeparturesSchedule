import React, { FC, useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Context } from '@store/provider';
import RouteWrap from '@components/route-wrap';
import Layout from '@components/layout';
import ProfileInner from './parts/profile-inner';

const Profile: FC = () => {
  const { state } = useContext(Context);
  const { user } = state.authUserState;

  const [emailChanged, setEmailChanged] = useState(!user?.emailVerified);

  return (
    user && user?.emailVerified && !emailChanged
      ? <RouteWrap path="/profile" component={ProfileInner} layout={Layout} componentProps={{ user, setEmailChanged }} />
      : <Redirect to="/" />
  );
};

export default Profile;
