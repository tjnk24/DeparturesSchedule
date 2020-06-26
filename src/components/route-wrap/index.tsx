import React, { FC } from 'react';
import { Route } from 'react-router-dom';

import { RouterWrapProps } from './types';

const RouteWrap: FC<RouterWrapProps> = ({
  component: Component,
  layout: Layout,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => (
      <Layout {...props}>
        <Component {...props} />
      </Layout>
    )}
  />
);

export default RouteWrap;
