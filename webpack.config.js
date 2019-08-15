const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: ['@babel/polyfill', './src/js/index.js', './src/sass/main.scss'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: "css/bundle.css",
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                include: [
                    path.resolve(__dirname, 'src', 'sass')
                ],

                use: [
                        { loader: MiniCssExtractPlugin.loader }, 

                        { loader: "css-loader" },

                        { loader: "postcss-loader" },

                        {
                            loader: "sass-loader",
                            options: {
                            implementation: require("sass")
                            }
                        }
                    ]
            }
        ]
    }
};