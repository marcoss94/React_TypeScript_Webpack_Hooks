const { HotModuleReplacementPlugin } = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

/** @type {import('webpack').Configuration}*/
const devConfig = {
    mode: 'development',
    devServer: {
        port: 3000,
        contentBase: '../dist',
        open: 'chrome',
        hot: true,
        historyApiFallback: true,
    },
    target: 'web',
    plugins: [
        new HotModuleReplacementPlugin(),
        new ReactRefreshWebpackPlugin(),
    ],
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
                use: ['style-loader', 'css-loader', 'sass-loader'],
                test: /.(css|sass|scss)$/,
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                javascriptEnabled: true,
                            },
                        },
                    },
                ],
            },
        ],
    },
}

module.exports = merge(common, devConfig)
