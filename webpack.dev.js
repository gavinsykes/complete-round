const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const optimisation = {
  minimizer : [
    new UglifyJsPlugin({
      uglifyOptions : {
        output : {
          comments: false
        },
        compress : {
          warnings     : false,
          drop_console : false
        }
      }
    })
  ]
};

module.exports = merge(common,{
  mode         : 'development',
  optimization : optimisation
});
