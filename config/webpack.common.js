const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

/** @type {import('webpack').Configuration}*/
module.exports = {
    entry: './src/index.tsx',
    cache: true,
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[contenthash].js',
        publicPath: '',
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /.(js|jsx)$/,
                exclude: /node_modules/,
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader',
            },
            {
                use: 'ts-loader',
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
            },
            { type: 'asset/resource', test: /\.(png|svg|jpg|jpeg|gif)$/i },
        ],
    },
    resolve: {
        alias: {
            asset: path.resolve(__dirname, '../src/asset/'),
            commons: path.resolve(__dirname, '../src/commons/'),
            components: path.resolve(__dirname, '../src/components/'),
            config: path.resolve(__dirname, '../src/config/'),
            context: path.resolve(__dirname, '../src/context/'),
            hooks: path.resolve(__dirname, '../src/hooks/'),
            pages: path.resolve(__dirname, '../src/pages/'),
        },
        extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
    },
    ignoreWarnings: [/Failed to parse source map/],
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            favicon: './src/favicon.png',
        }),
    ],
}
