import 'babel-polyfill';
import express from 'express';
import path from 'path';

const app = express();

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from './webpack.config';

const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.use('/', (req, res) => {
  return res.sendFile(path.join(process.cwd(), 'app/index.html'));
});

app.listen(9000, () => console.log('App is running on http://localhost:9000'));