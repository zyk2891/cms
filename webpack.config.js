const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports={
    entry:{
        index:path.join(__dirname,'./src/js/main.js')
    },
    output: {
        path: path.join(__dirname,"./dist"),
        filename: "[name].bundle.js"
    },
    mode:"development",
    plugins:[
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),
            filename:'index.html'
        }),
        new VueLoaderPlugin()
    ],
    module:{
        rules:[
            {test: /\.css$/, use: ['style-loader','css-loader']},
            {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:['url-loader?limit=7631&name=[hash:8]-name.[ext]']},
            {test:/\.(ttf|eot|svg|woff|woff2)$/,use:['url-loader']},
            {test:/\.vue$/,use:['vue-loader']},
            {test:/\.js$/,use:['babel-loader'],exclude:/node_modules/},//配置babel来转换高级的语法
        ]
    },
    resolve: {
        alias:{
            "vue$":'vue/dist/vue.js'
        }
    }
}