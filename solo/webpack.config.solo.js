const base = require('../bridge/webpack.config');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

base.entry = path.resolve(__dirname, '../src/index.js');

base.plugins = [
    new HTMLWebpackPlugin({
        template: path.resolve(__dirname, 'index.html'),
        inject: false
    })
];

base.optimization = {
    namedModules: true
};

base.module = {
    rules: [
        {
            test: /\.js|x$/,
            exclude: /node_modules/,
            use: { loader: "babel-loader" }
        },
    ]
};

module.exports = base;