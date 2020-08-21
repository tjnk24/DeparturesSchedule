import React, { FC } from 'react';
import { Route } from 'react-router-dom';

import { RouterWrapProps } from './types';

const RouteWrap: FC<RouterWrapProps> = ({
  component: Component,
  layout: Layout,
  componentProps,
  ...rest
}) => (
  <Route
    {...rest}
    render={(routeProps) => (
      <Layout {...routeProps}>
        <Component componentProps={componentProps || null} {...routeProps} />
      </Layout>
    )}
  />
);

export default RouteWrap;
