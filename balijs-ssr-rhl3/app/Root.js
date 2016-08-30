import React from 'react';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

require('./main.css');

export default function Root() {
  return (
    <Router history={browserHistory}>
      {routes}
    </Router>
  );
}
