import 'babel-polyfill';
import express from 'express';
import webpack from 'webpack';
import webpackConfig from '../webpack.config';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

const app = express();
const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }));
app.use(webpackHotMiddleware(compiler));
  
import React from 'react';
import { match } from 'react-router';
import { renderApp } from './utils';
import routes from '../app/routes';

app.use((req, res, next) => {
  match({ routes, location: req.url }, (err, redirectLocation, renderProps) => {
    if(err) {
      return res.status(500).send(err.message);
    } 

    if(redirectLocation) {
      return res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } 

    if (!renderProps) {
      return next();
    }

    renderApp(renderProps, req, res);
  });
});

app.listen(5000, () => console.log(`App started at http://localhost:5000`));