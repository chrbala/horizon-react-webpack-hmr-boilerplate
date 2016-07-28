var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    },
    // globally expose React and React.Component to reduce boilerplate
		{ 
			test: require.resolve('react'), 
			loader: 'expose?React'
		},
		{ 
			test: require.resolve('react/lib/ReactComponent'), 
			loader: 'expose?Component'
		}]
  },
  resolve: {
		root: path.resolve('./src')
	}
}
