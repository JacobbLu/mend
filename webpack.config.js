'use strict';

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: [
		'babel-polyfill',
		path.join(__dirname, 'src/appRoot.js')
	],
	output: {
		publicPath: '/',
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	devServer:{
		contentBase: path.join(__dirname, "public"),
		compress: true,
		port: 9000,
		historyApiFallback: true
	},
	plugins: [
		new CleanWebpackPlugin(['public/']),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'template.html'
		}),
		// output a separate css bundle
		new ExtractTextPlugin({
			filename: 'bundle.css',
			disable: false,
			allChunks: true
		}),
		// reloads browser when the watched files change
		// new BrowserSyncPlugin({
		// 	host: 'localhost',
    //   port: 9000,
    //   server: { baseDir: ['public'] }
		// }),

		// set node env
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development')
		})
	],
	module: {
		rules: [
			// transpiles JSX and ES6
			{
				test: /\.(js|jsx)?$/,
				exclude: /node_modules/,
				enforce: "pre",
				loader: 'babel-loader'
			},
			// makes jQuery available to Bootstrap js
			{
				test: /bootstrap\/js\//,
				loader: 'imports?jQuery=jquery'
			},
			// extracts css as separate output file
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader'
				})
			},
			{
				test: /\.(png|woff|woff2|eot|ttf|svg|jpg|pdf)$/,
				loader: 'url-loader?limit=300000'
			}
		]
	},
	// needed to make request-promise work
	node: {
		fs: 'empty',
		net: 'empty',
		tls: 'empty'
	}
};
