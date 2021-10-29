const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    mode: 'development',
    // mode: 'production',
    entry: './scripts/main.js',
    output: {
        filename: 'main.[contenthash].js'
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        // new BundleAnalyzerPlugin()
    ],

    module: {
        rules: [
            { // IMAGES
                test: /\.(jpeg|mp3|png)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true, // webpack@1.x
                            disable: true, // webpack@2.x and newer
                            mozjpeg: {
                                progressive: true,
                                optimizationLevel: 5,
                                quality: 65,
                            }
                        },
                    },
                ],
            },

            { // SCSS
                test: /\.(scss)$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },

            { // VIDEO
                test: /\.(mp4)$/i,
                use: 'file-loader'
            }
        ]
    }
};