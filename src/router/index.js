import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import ExtendRoute from '../components/ExtendRoute';

import App from '../App';
import NoMatch from '../components/NoMatch';

const Home = () => import('../container/home');
const Product = () => import('../container/Product');
const Login = () => import('../container/login');

const history = createBrowserHistory();


const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/product',
    component: Product,
  },
  {
    path: '/',
    component: Login,
  },
];


const router = (
  <Router history={history}>
    <App>
      <Switch>
        {routes.map((route, i) => (
          <ExtendRoute key={i} {...route} />))}
        <Redirect from="/home" to="/" />
        <Route component={NoMatch} />
      </Switch>
    </App>
  </Router>
);

export default router;