const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	mode: 'none',
	entry: {
		// Polyfill: 'babel-polyfill',
		'./compiled' : './index.js',
	},
	output: {
	    path: path.resolve(__dirname, ''),
	    filename: '[name].js'
	},
	plugins: [
		new CleanWebpackPlugin([
			'./compiled.js',
		])
    ],
    externals: [
    	require('webpack-require-http')
  	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
			        	presets: ['babel-preset-env'],
						//plugins: ["transform-object-assign"]
			        }
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader','css-loader']
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader'
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					'file-loader'
				]
			},
			{
				test: /\.xml$/,
				use: [
					'xml-loader'
				]
			}
		]
  }
};