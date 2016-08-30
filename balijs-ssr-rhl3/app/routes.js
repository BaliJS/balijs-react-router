if(typeof require.ensure !== 'function') require.ensure = (deps, callback) => callback(require);

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Index from './containers/Index';

export default (
  <Route path="/" component={Index}>
    <IndexRoute
      getComponent={(nextState, cb) => {
        require.ensure([], require => cb(null, require('./containers/Home').default));
      }}
    />
    <Route
      path="/about"
      getComponent={(nextState, cb) => {
        require.ensure([], require => cb(null, require('./containers/About').default));
      }}
    />
  </Route>
);