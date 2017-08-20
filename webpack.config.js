let webpack = require("webpack");
let HtmlWebpackPlugin = require('html-webpack-plugin');
let path = require('path');

module.exports = {
    entry: [
        // "babel-polyfill", //node_modules/babel-polyfill/polyfill.js
        path.resolve(__dirname, 'src/index.js') 
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ["env"] //"stage-0"
                    //plugins:["transform-runtime"]
                }
            },
        ]
    },
    plugins: [
        // Copies HTML file from src to dist. 
        // Also adds a refernece to bundle.js.
        new HtmlWebpackPlugin({     
            template: 'src/index.html',
            filename: "index.html"
        }),
    ],
};

