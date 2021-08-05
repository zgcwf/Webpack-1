const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin') // 将css单独打包成文件
const base = require('./webpack.config.base.js')
module.exports = {
    ...base,
    mode: 'development',
    //development(开发模式)  production(上线模式)
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, "dist"),   // dist目录开启服务器
        compress: true,    // 是否使用gzip压缩
        port: 9000,    // 端口号
        open: true   // 自动打开网页
    },
    module: {

        rules: [
            ...base.module.rules,
            { test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader'] },

        ]
    }
}

