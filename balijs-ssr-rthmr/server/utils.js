import React from 'react';
import { renderToString } from 'react-dom/server';
import { RouterContext } from 'react-router';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { indigo500 } from 'material-ui/styles/colors';

function renderFullPage(html) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>React SSR</title>
      ${process.env.NODE_ENV === 'production' ? <link rel="stylesheet" href="/main.css" /> : ''}
      <link href="https://fonts.googleapis.com/css?family=Roboto:400,300,700" rel="stylesheet" type="text/css"/>
    </head>
    <body>
      <div id="app">${html}</div>
      <script src="/vendor.js" type="text/javascript"></script>
      <script src="/app.js" type="text/javascript"></script>
    </body>
    </html>
  `;
}

export function renderApp(props, req, res) {
  const muiTheme = getMuiTheme({
    palette: {
      primary1Color: indigo500
    },
  }, {
    avatar: {
      borderColor: null,
    },
    userAgent: req.headers['user-agent'],
  });
  
  const markup = renderToString(
    <MuiThemeProvider muiTheme={muiTheme}>
      <RouterContext {...props}/>
    </MuiThemeProvider>
  );

  return res.set('Content-Type', 'text/html')
    .status(200)
    .end(renderFullPage(markup));
}