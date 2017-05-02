const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

const config = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: "source-map",
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [{
      enforce: "pre",
      test: /\.tsx$/,
      exclude: /node_modules/,
      loader: "tslint-loader",
      options:{
         tsConfigFile: 'tslint.json'
      }
    }, {
      exclude: /(node_modules|bower_components)/,
      enforce: "pre",
      test: /\.tsx$/,
      loader: "source-map-loader"
    }, {
      exclude: /(node_modules|bower_components)/,
      test: /\.tsx?$/,
      loader: "awesome-typescript-loader"
    }]
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' })
  ]
};

module.exports = config;
