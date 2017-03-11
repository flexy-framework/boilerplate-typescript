var webpack = require('webpack'),
    path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: { app: './src/index' },
    output: {
        path: path.resolve(__dirname, './dist/js'),
        filename: '[name].bundle.js'
    },
    target: "web",
    resolve: {
        modules: [
            path.resolve(__dirname, './src'),
            'node_modules'
        ],
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            { test: /\.json$/, loader: 'json-loader' },
            { test: /\.js(x?)$/, exclude: /node_modules/, loader: 'babel-loader' },
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'babel-loader' }, { loader: 'awesome-typescript-loader' }
                ]
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                sequences: true,
                properties: true,
                drop_debugger: true,
                dead_code: true,
                conditionals: true,
                booleans: true,
                unused: true,
                if_return: true,
                join_vars: true,
                drop_console: true,
                warnings: process.env.NODE_ENV != 'production'
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
            }
        })
    ]
};
