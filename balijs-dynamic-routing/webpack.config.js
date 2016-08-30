const path = require('path');
const merge = require('webpack-merge');
const validate = require('webpack-validator');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const parts = require('./lib/parts');

const PATHS = {
	app: path.join(__dirname, 'app'),
	build: path.join(__dirname, 'build')
}

const common = {
	entry: {
		app: PATHS.app
	},
	output: {
		path: PATHS.build,
		publicPath: '/'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx', '.css']
  },
	plugins: [
		new HtmlWebpackPlugin({
			template: 'app/index.html'
		})
	],
	target: 'web'
}

let config;

switch(process.env.npm_lifecycle_event) {
	case 'build':
		config = merge(
			common,
			{
				devtool: 'source-map'
			},
			parts.definePlugin('production'),
      parts.cleanBuild(PATHS.build),
			parts.htmlLoader(),
			parts.dedupePlugin(),
			parts.chunkPlugin({
        name: 'vendor',
        entries: ['react', 'react-dom']
      }),
			parts.extractCSS(PATHS.app),
			parts.minify()
		);
	break;
	default:
		config = merge(
			common,
			{
				output: {
					filename: '[name].js',
					chunkFilename: '[name].chunk.js'
				},
				devtool: 'eval-source-map'
			},
			parts.htmlLoader(),
			parts.cssLoader(PATHS.app),
			parts.devServer({
				host: process.env.HOST,
				port: process.env.PORT
			})
		);
	break;
}

module.exports = validate(config);