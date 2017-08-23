let webpack = require("webpack");
let HtmlWebpackPlugin = require('html-webpack-plugin');
let path = require('path');

module.exports = {
    entry: [
        path.resolve(__dirname, 'src/index.js') 
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
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

