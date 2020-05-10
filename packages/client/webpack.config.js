// webpack.config.js
const HTMLWebPackPlugin = require("html-webpack-plugin"); // 아까 설치한 플러그인이죠? html 문서에 자동으로 번들파일을 추가해줍니다.
const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/**
 * @type {import 'webpack'.Configuration}
 */
module.exports = {
	entry: "./src/index.tsx", // 처음 시작할 파일을 지정해줍니다. 지정하지 않으면 './src/index.js'가 기본 값이기 때문에 적어줘야 해요
	optimization: {
		splitChunks: {
			chunks: "all",
			name: false,
			cacheGroups: {
				node_vendors: {
					test: /[\\/]node_modules[\\/]/,
					chunks: "async",
					priority: 1,
				},
			},
		},
	},
	module: {
		rules: [
			{
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[ext]",
							outputPath: "fonts/",
						},
					},
				],
			},
			{
				test: /\.s?css$/,
				oneOf: [
					{
						test: /\.module\.s?css$/,
						use: [
							MiniCssExtractPlugin.loader,
							{
								loader: "css-loader",
								options: { modules: true },
							},
							"sass-loader",
						],
					},
					{
						use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
					},
				],
			},
			{
				test: /\.(ts|tsx)$/,
				use: "babel-loader", // ts-loader 가 트랜스파일 해줍니다.
				exclude: /node_modules/, // node_modules 디렉토리에 있는 파일들이 제외하고
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
		alias: {
			styles: path.resolve(__dirname, "styles"),
		},
	},
	output: {
		filename: "bundle.js", // build시 만들어질 파일 번들 파일 이름
		path: path.resolve(__dirname, "dist"), // 그리고 경로 입니다.
	},
	devServer: {
		contentBase: path.join(__dirname, "./dist"),
		port: 9000,
	},
	plugins: [
		new HTMLWebPackPlugin({
			template: "./src/index.html",
			filename: "./index.html",
		}), // './src/index.html' 경로의 html 파일에 번들 파일을 넣어줍니다.
		new MiniCssExtractPlugin({
			filename: "style.css",
			chunkFilename: "[id].css",
		}),
	],
};
