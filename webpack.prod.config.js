const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    './app/index'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  debug: false,
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
    }
})
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'app'),
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0', 'react-hmre'],
        }
      },
      {
        test:   /\.css$/,
        loader: "style-loader!css-loader!postcss-loader"
      }
    ]
  }
};
