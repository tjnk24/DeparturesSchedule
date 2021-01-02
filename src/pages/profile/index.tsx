import React, { FC } from 'react';
import { Redirect } from 'react-router-dom';
import RouteWrap from '@components/route-wrap';
import Layout from '@components/layout';
import { useSelector } from 'react-redux';
import { RootState } from '@store/reducers/rootReducer/types';
import ProfileInner from './parts/profile-inner';

const Profile: FC = () => {
  const { user } = useSelector((state: RootState) => state.authUser);

  return (
    user && user?.emailVerified
      ? (
        <RouteWrap
          path="/profile"
          component={ProfileInner}
          layout={Layout}
          componentProps={{ user }}
        />
      )
      : <Redirect to="/" />
  );
};

export default Profile;
