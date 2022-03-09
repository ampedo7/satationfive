import React from 'react';
import { Switch } from 'react-router';

import MainRoute from './routes';
import Home from '../features/home';

const RouteIndex = ({ component: Component, ...rest }) => {
  return (
    <Switch>
      <MainRoute path="/" component={Home} exact />
    </Switch>
  );
};

export default RouteIndex;
