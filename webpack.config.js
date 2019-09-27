const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js|x$/,
                exclude: /node_modules/,
                use: {loader: "babel-loader"}
            },
        ]
    },
    resolve: {
        modules: [
            path.resolve(__dirname, ""),
            path.resolve(__dirname, "node_modules")
        ]
    },
    plugins: [new HtmlWebpackPlugin({template: "./index.html"})]
};