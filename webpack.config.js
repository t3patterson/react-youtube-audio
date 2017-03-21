const webpack = require('webpack')
const nodeEnv = process.env.NODE_ENV || 'production'
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool : 'source-map',
  entry:   { filename: './src/src-lib/player.js' },
  output : { filename: './dist/js/bundle.js', path: `${__dirname}/` },
  context : `${__dirname}` ,
  module: {
    loaders: [
		 { 
          test: /\.js$/,
			 exclude: /node_modules/,
			 loader: 'babel-loader',
          query: {
             presets: ['es2015', 'react']
          }
		 }
	 ]
  },
  plugins: [
     //env plugin
	  new webpack.DefinePlugin({
        'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
	  }),
	  new CopyWebpackPlugin([
	     {from : 'src/src-lib', to: 'lib'}
	  ]),
  ]
}