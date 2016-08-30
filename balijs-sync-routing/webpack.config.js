const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    app: [
      'webpack-hot-middleware/client',
      'webpack/hot/only-dev-server',
      'react-hot-loader/patch',
      './app/index.js',
    ],
    vendor: [
      'react',
      'react-dom',
    ],
  },
  
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
    publicPath: '/'
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css',
        include: path.join(__dirname, 'app')
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        CLIENT: JSON.stringify(true),
        'NODE_ENV': JSON.stringify('development'),
      }
    }),
  ]
}