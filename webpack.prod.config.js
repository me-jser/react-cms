
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const proxy = require('http-proxy-middleware');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:{
      app:path.resolve(__dirname, './app/index.js')
    },
    output:{
        path: path.join(path.resolve(__dirname, 'dist')),
        filename: 'bundle.js',
        "publicPath": "/"
    },
    /**代理配置,访问server获取数据
     * 访问 http://127.0.0.1:8080/posts
     * 会转发到 http://127.0.0.1:3000/posts
     */
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        contentBase: './dist',
        port: 8080,
        stats: { colors: true },

        proxy: {
            '/api': {
                target: 'http://rcms.jser.website:3000/',
                pathRewrite: {'^/api' : 'posts'},
                changeOrigin: true
            },
            '/getwithid': {
                target: 'http://rcms.jser.website:3000/',
                pathRewrite: {'^/getwithid' : 'getpost'},
                changeOrigin: true
            },
            '/del': {
                target: 'http://rcms.jser.website:3000/',
                pathRewrite: {'^/del' : 'removepost'},
                changeOrigin: true
            },
            '/update': {
                target: 'http://rcms.jser.website:3000/',
                pathRewrite: {'^/update' : 'modify'},
                changeOrigin: true
            },
            '/new': {
                target: 'http://rcms.jser.website:3000/',
                pathRewrite: {'^/new' : 'addpost'},
                changeOrigin: true
            },
            '/reg': {
                target: 'http://rcms.jser.website:3000/',
                pathRewrite: {'^/reg' : 'reg'},
                changeOrigin: true
            },
            '/login': {
                target: 'http://rcms.jser.website:3000/',
                pathRewrite: {'^/login' : 'login'},
                changeOrigin: true
            }
        }
    },
    resolve: {
        extensions: [' ', '.js', '.jsx', '.less', '.scss', '.css']
    },
    module: {
        //编译jsx
        rules:[
            {
                test: /\.jsx?$/,         // Match both .js and .jsx files
                exclude: /node_modules/,
                loader: "babel-loader",
                query:
                {
                    presets:['react']
                }
            },
            //编译sass并生成文件
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    //resolve-url-loader may be chained before sass-loader if necessary
                    use: ['css-loader', 'sass-loader']
                })
            },
            //压缩CSS
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    //resolve-url-loader may be chained before sass-loader if necessary
                    use: ['css-loader']
                })
            }
            ,
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                exclude: /^node_modules$/,
                loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('main.css'),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { discardComments: {removeAll: true } },
            canPrint: true
        }),
        new HtmlWebpackPlugin({
            template: __dirname +'/app/index.html',
            title: '控制台'

        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
};

