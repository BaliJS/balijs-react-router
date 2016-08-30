const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'cheap-module-eval-source-map',

  entry: {
    app: [
      'webpack-hot-middleware/client',
      './app/index.js'
    ],
    vendor: [
      'react',
      'react-dom'
    ]
  },

  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/',
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css',
        include: path.join(__dirname, 'app')
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          env: {
            development: {
              presets: ['react-hmre']
            }
          }
        }
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.css'],
    modules: [
      'app',
      'node_modules',
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        CLIENT: JSON.stringify(true),
        'NODE_ENV': JSON.stringify('development'),
      }
    }),
  ]
}