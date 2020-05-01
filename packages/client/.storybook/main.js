const aliasImporter = require("node-sass-alias-importer");

const path = require("path");
module.exports = {
	stories: ["../src/**/*.stories.[tj]sx"],
	webpackFinal: async config => {
		config.module.rules.push(
			{
				test: /\.s[ac]ss$/i,
				use: [
					"style-loader",
					"css-loader",
					{
						loader: "sass-loader",
						options: {
							// Prefer `dart-sass`
							implementation: require("sass"),
							importer: aliasImporter({
								styles: "../styles",
							}),
						},
					},
				],
			},
			{
				test: /\.(ts|tsx)$/,
				loader: require.resolve("babel-loader"),
				options: {
					presets: [["react-app", { flow: false, typescript: true }]],
				},
			},
		);
		config.resolve.extensions.push(".ts", ".tsx");
		config.resolve.alias = {
			styles: path.join(__dirname, "../styles"),
		};
		return config;
	},
};
