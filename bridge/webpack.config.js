const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: 'config.js',
    output: {
        filename: 'components.js',
        library: 'components',
        libraryTarget: 'amd',
        path: path.resolve(__dirname, 'build/comoponents'),
    },
    mode: 'development',
    resolve: {
        modules: [
            __dirname,
            'node_modules',
        ],
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['build/comoponents']
        }),
        new CopyWebpackPlugin([
            { from: path.resolve(__dirname, 'config.js') }
        ]),
    ],
    devtool: 'source-map',
    externals: [
        /^@xura\/data$/,
    ],
};
