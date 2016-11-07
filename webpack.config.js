const path = require('path');
const webpack = require('webpack');
const rootpath = __dirname;
const srcPath = path.resolve(__dirname, 'src');
const distPath = path.resolve(__dirname, 'dist');
const paths = {
  src: srcPath,
  dist: distPath,
  scss: path.join(srcPath, 'scss')
};

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:1337',
    'webpack/hot/dev-server',
    './src/entry'
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/'
  },
  paths: {
    src: paths.src,
    dist: paths.dist
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel'], include: paths.src },
      { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader?sourceMap', include: paths.scss},
      { test: /\.css$/, loader: 'style-loader!css-loader?sourceMap', include: paths.scss},
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
