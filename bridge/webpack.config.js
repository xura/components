const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, '../src/index.ts'),
    output: {
        filename: 'components.js',
        library: 'components',
        libraryTarget: 'amd',
        path: path.resolve(__dirname, 'build/comoponents'),
    },
    mode: 'development',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
        modules: [
            __dirname,
            'node_modules',
        ],
    },
    devServer: {
        headers: {
            "Access-Control-Allow-Origin": "*",
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['build/comoponents']
        }),
    ],
    devtool: 'source-map'
};
