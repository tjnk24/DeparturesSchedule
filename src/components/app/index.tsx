import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  withRouter,
} from 'react-router-dom';

import Layout from '@components/layout';
import Header from '@components/header';
import Schedule from '@pages/schedule';
import Constructor from '@pages/constructor';
import Profile from '@pages/profile';

import { Provider } from '@store/provider';

import classnames from 'classnames/bind';
import style from './style.scss';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const cn = classnames.bind(style);

const App = (): JSX.Element => (
  <BrowserRouter>
    <Header />
    <Provider>
      <Layout>
        <Switch>
          <Route path="/" exact component={Constructor} />
          <Route path="/schedule" component={Schedule} />
          <Route path="/profile" component={Profile} />
          <Redirect exact from="/" to="/constructor" />
        </Switch>
      </Layout>
    </Provider>
  </BrowserRouter>
);

export default withRouter(App);
