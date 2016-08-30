import React from 'react';
import { renderToString } from 'react-dom/server';
import { RouterContext } from 'react-router';

const renderFullPage = (html) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>React SSR</title>
    </head>
    <body>
      <div id="app">${html}</div>
      <script src="/vendor.js" type="text/javascript"></script>
      <script src="/app.js" type="text/javascript"></script>
    </body>
    </html>
  `;
}

export function renderApp(props, res) {
  const markup = renderToString(<RouterContext {...props}/>);
  return res.set('Content-Type', 'text/html')
    .status(200)
    .end(renderFullPage(markup));
}
