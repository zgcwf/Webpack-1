//公共语句

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    //编译模式

    //development(开发模式)  production(上线模式)
    entry: path.join(__dirname, './src/index.js'),
    //打包入口文件的路径
    //__dirname 表示当前文件所处的目录，即从当前目录开始寻找文件路径,一般为根目录
    output: {
        // filename: 'bundle.js' //输出文件的名称

        //确保 webpack 编译生成的文件能够被客户端缓存，而在文件内容变化后，能够请求到新的文件。
        filename: '[name].[contenthash].js',
        chunkFilename: '[vendors].[contenthash].js',
        path: path.join(__dirname, './dist'),
        //输出文件的存放路径

    },
    plugins: [

        new HtmlWebpackPlugin({
            template: './src/index.html',
            //指定要复制的那个页面的文件路径,即指向模板文件，以src里面的index.html模板生成文件
            filename: 'index.html',//生成的文件的名称
            title: 'Webpack-1'
            //由于使用了 title 选项，则需要在 template 选项对应的 html 的 title 中
            //加入 <%= htmlWebpackPlugin.options.title %>
        })
    ],

    module: {
        rules: [

            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2s/, use: ['url-loader?limit=42713'] },
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },


        ]
    }
}

