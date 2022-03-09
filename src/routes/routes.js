import React from 'react';
import { Route } from 'react-router';

import MainLayout from '../features/_layouts';

const Routes = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <MainLayout>
          <Component {...props} />
        </MainLayout>
      )}
    />
  );
};

export default Routes;
