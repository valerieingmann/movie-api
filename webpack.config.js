// change mode if deploying to heroku
module.exports = {
	entry: [
		'@babel/polyfill', // enables async-await
		'./client/index.js'
	],
	mode: 'development',
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	}
};
