const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');

module.exports = {
    module: webpackConfig.module,
    resolve: webpackConfig.resolve,
    target: "web",
    devtool: 'inline-source-map',
    stats: "verbose",
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: null, // if no value is provided the sourcemap is inlined
            test: /\.(ts|js)($|\?)/i // process .js and .ts files only
        })
    ]
};