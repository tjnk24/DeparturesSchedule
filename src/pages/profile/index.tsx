import React, { FC, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { Context } from '@store/provider';
import RouteWrap from '@components/route-wrap';
import Layout from '@components/layout';
import ProfileInner from './parts/profile-inner';

const Profile: FC = () => {
  const { state } = useContext(Context);
  const { user } = state.authUserState;

  return (
    user && user?.emailVerified
      ? <RouteWrap path="/profile" component={ProfileInner} layout={Layout} componentProps={{ user }} />
      : <Redirect to="/" />
  );
};

export default Profile;
