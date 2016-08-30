import React from 'react';
import { Router, browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import routes from './routes';

import './main.css';

export default () => {
  return (
    <MuiThemeProvider>
      <Router history={browserHistory}>
        {routes}
      </Router>
    </MuiThemeProvider>
  );
}