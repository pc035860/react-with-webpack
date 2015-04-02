var webpack = require('webpack');
module.exports = {
  entry: [
    "./app/main.js"
  ],
  output: {
    path: __dirname + '/build',
    filename: "bundle.min.js"
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: ['babel-loader'], exclude: /node_modules/ },
      { test: /\.css$/, loader: "style!css" }
    ]
  },
  resolve: {
    // you can now require('file') instead of require('file.coffee')
    extensions: ['', '.js', '.json']
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
};
