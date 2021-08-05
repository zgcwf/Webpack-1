// const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // 将css单独打包成文件
const base = require('./webpack.config.base.js')
module.exports = {

    mode: 'production',
    //development(开发模式)  production(上线模式)
    ...base,
    plugins: [
        ...base.plugins,
        // 继承base里面plugins内的所有内容
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].[contenthash].css',
            ignoreOrder: false
        })
    ],

    module: {
        rules: [
            ...base.module.rules,
            // 继承base里面module.rules内的所有内容
            { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] },

        ]
    }
}

