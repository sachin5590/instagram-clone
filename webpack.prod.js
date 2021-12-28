const path = require("path");
const dotenv = require('dotenv');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => {
	const webpackConfig = {
		entry: ['./src/index.tsx', './src/styles/output.css', './public/index.html'],
		resolve: {
			extensions: ['.ts', '.tsx', '.js', '.html']
		},
		// output: {
		// 	path: path.join(__dirname, "/bundle"),
		// 	filename: "index_bundle.js"
		// },
		mode: 'production',
		devtool: 'source-map',
		output: {
			filename: '[name].js',
			publicPath: '/'
		},
		module: {
			rules: [
				{
					test: /index\.html$/,
					loader: 'html-loader'
				},
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader'
					}
				},
				{
					test: /\.ts(x?)$/,
					exclude: /node_modules/,
					use: ['babel-loader', 'ts-loader']
				},
				{
					test: /\.css$/,
					exclude: path.resolve(__dirname, 'node_modules'),
					use: [
						MiniCssExtractPlugin.loader,
						'css-loader',
						'postcss-loader'
					]
				}
			]
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: "./public/index.html"
			}),
			new MiniCssExtractPlugin({
				filename: 'output.css',
				// chunkFilename: 'output.css'
			})
		]
	}
	return webpackConfig;
}
