const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const PRODUCTION = process.env.NODE_ENV === 'production';
const DEVELOPMENT = !PRODUCTION;

module.exports = {
    entry: {
        index: './src/js/index.js',
        style: './src/scss/style.scss',
    },
    devtool: DEVELOPMENT ? 'source-map' : undefined,
    devServer: {
        contentBase: './dist',
        hot: false,
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|svg)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'img/[name].[ext]',
                    },
                },
            },
            {
                test: /\.(html)$/,
                use: ['html-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    DEVELOPMENT ? 'style-loader' : { loader: MiniCssExtractPlugin.loader, options: { publicPath: '' } },
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '',
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify: {
                collapseWhitespace: PRODUCTION,
            },
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
    ],
};
