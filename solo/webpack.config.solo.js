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


module.exports = base;