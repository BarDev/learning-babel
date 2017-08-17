let webpack = require("webpack");
let HtmlWebpackPlugin = require('html-webpack-plugin');
let path = require('path');

module.exports = {
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js') 
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].js'
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

