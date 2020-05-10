const webpack = require("../webpack.config");

module.exports = {
	stories: ["../src/**/*.stories.[tj]sx"],
	webpackFinal: async config => {
		config.module.rules = [...config.module.rules, ...webpack.module.rules];
		config.plugins = [...config.plugins, ...webpack.plugins];
		config.resolve = { ...config.resolve, ...webpack.resolve };
		// config.module.rules.push(
		// 	{
		// 		test: /\.s[ac]ss$/i,
		// 		use: [
		// 			// Creates `style` nodes from JS strings
		// 			"style-loader",
		// 			// Translates CSS into CommonJS
		// 			"css-loader",
		// 			"postcss-modules",
		// 			// Compiles Sass to CSS
		// 			"sass-loader",
		// 		],
		// 	},
		// 	{
		// 		test: /\.(ts|tsx)$/,
		// 		loader: require.resolve("babel-loader"),
		// 		options: {
		// 			presets: [["react-app", { flow: false, typescript: true }]],
		// 		},
		// 	},
		// );
		// config.resolve.extensions.push(".ts", ".tsx");
		return config;
	},
};
