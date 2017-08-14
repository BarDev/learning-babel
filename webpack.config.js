let webpack = require("webpack");
let HtmlWebpackPlugin = require('html-webpack-plugin');
let path = require('path');

module.exports = {
    resolve: {
        extensions: ['.js']
    },
    entry: {
        //polyfill: "babel-polyfill", //node_modules/babel-polyfill/polyfill.js
        bundle: path.resolve(__dirname, 'src/index.js') // Defining path seems necessary for this to work consistently on Windows machines.
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader"
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({     // Create HTML file that includes references to bundled CSS and JS.
            template: 'src/index.html',
            filename: "index.html",
            inject: "head"
        }),
    ],
};