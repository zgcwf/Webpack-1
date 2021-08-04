const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlWebpackPlugin({
    template: './src/index.html',//指定要复制的那个页面的文件路径
    filename: 'index.html'//生成的文件的名称
})
module.exports = {
    //编译模式
    mode: 'development',
    //development(开发模式)  production(上线模式)
    entry: path.join(__dirname, './src/index.js'),
    //打包入口文件的路径
    //__dirname 表示当前文件所处的目录，即从当前目录开始寻找文件路径,一般为根目录
    output: {
        filename: '[name].[contenthash].js',
        // chunkFilename: '[vendors].[contenthash].js',
        path: path.join(__dirname, './dist'),
        //输出文件的存放路径
        // filename: 'bundle.js' //输出文件的名称
    },
    plugins: [htmlPlugin],
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2s/, use: ['url-loader?limit=42713'] },
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
        ]
    }
}

