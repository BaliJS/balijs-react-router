import React from 'react';
import { Router, browserHistory } from 'react-router';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { indigo500 } from 'material-ui/styles/colors';
import routes from './routes';

require('./main.css');

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: indigo500
  },
}, {
  avatar: {
    borderColor: null,
  }
});

export default function Root() {
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <Router history={browserHistory}>
        {routes}
      </Router>
    </MuiThemeProvider>
  );
}
