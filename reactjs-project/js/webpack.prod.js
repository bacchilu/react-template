const config = require('./webpack.config.js');

delete config['devtool'];
config['mode'] = 'production';
config['plugins'] = [new (require('webpack')).DefinePlugin({'process.env.NODE_ENV': JSON.stringify('production')})];


module.exports = config;
