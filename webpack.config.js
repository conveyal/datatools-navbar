var path = require('path');

module.exports = {

  entry: path.join(__dirname, 'index.js'),
  output: {
    path: path.join(__dirname, '/build/'),
    filename: 'legacy.js',
    publicPath: '/'
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      loader: 'babel',
      exclude: /node_modules/
    }]
  }
};
