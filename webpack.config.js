const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // entry: './src/main.js',
    entry: [
        'babel-polyfill',
        './src/main.js'
    ],
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
        })
    ]
};

