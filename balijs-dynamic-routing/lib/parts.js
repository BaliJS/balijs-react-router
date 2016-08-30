const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

exports.devServer = function(options) {
	return {
		devServer: {
			historyApiFallback: true,
			inline: true,
			hot: true,
			stats: 'errors-only',
			host: options.host,
			port: options.port
		},
		plugins: [
			new webpack.HotModuleReplacementPlugin({
				multistep: true
			})
		]
	};
}

exports.cssLoader = function(paths) {
	return {
		module: {
			loaders: [
				{
					test: /\.css$/,
					include: paths,					
					loaders: ['style', 'css?modules&sourceMap']
				}
			]
		}
	};
}

exports.htmlLoader = function() {
	return {
		module: {
			loaders: [
				{
					test: /\.html$/,
					loader: 'html'
				}
			]
		}
	};
}

exports.minify = function() {
	return {
		plugins: [
			new webpack.optimize.UglifyJsPlugin({
	      compress: {
	        warnings: false,
	      }
	    }),
		]
	}
}

exports.definePlugin = function(env) {
	return {
		plugins: [
			new webpack.DefinePlugin({
	      'process.env': {
	        'NODE_ENV': JSON.stringify(env),
	      }
	    })
		]
	}
}

exports.chunkPlugin = function(options) {
	const entry = {};
	entry[options.name] = options.entries;
	
	return {
		entry: entry,
		output: {
			filename: '[name].[chunkhash].js',
			chunkFilename: '[name].[chunkhash].chunk.js'
		},
		plugins: [
			new webpack.optimize.CommonsChunkPlugin({
				names: [options.name, 'manifest'],
				minChunks: Infinity
			})
		]
	};
}

exports.cleanBuild = function(path) {
	return {
		plugins: [
			new CleanWebpackPlugin([path], {
				root: process.cwd()
			})
		]
	};
}

exports.dedupePlugin = function() {
	return {
		plugins: [
			new webpack.optimize.DedupePlugin()
		]
	};
}

exports.extractCSS = function(paths) {
	return {
		module: {
			loaders: [
				{
					test: /\.css$/,
					loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules'),
					include: paths
				},
				{
					test: /\.css$/,
		      include: /node_modules/,
		      loaders: ['style-loader', 'css-loader'],
				}
			]
		},
		plugins: [
			new ExtractTextPlugin('[name].[chunkhash].css')
		]
	};
}