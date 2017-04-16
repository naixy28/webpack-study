const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
var CommonChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

module.exports = {
    entry: {
        vendor: [ 'babel-polyfill', 'lodash'],
        main: './src/main.js'
    },
    output: {
        path: path.resolve( __dirname, './dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { 
                test: /\.jsx?$/, 
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    // plugins: ['transform-runtime'],
                    presets: ['es2015']
                }
            },
            { test: /\.hbs$/, loader: 'handlebars-loader' }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Intro to webpack',
            template: 'src/index.html'
        }),
        new UglifyJsPlugin({
            beautify: false,
            mangle: {screw_ie8 : true},
            compress: { screw_ie8: true, warnings: false },
            comments: false
        }),
        new CommonChunkPlugin({
            name: 'vendor',
            filename: 'vendor.bundle.js'
        })
    ]
};

