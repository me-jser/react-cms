
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

    entry: path.resolve(__dirname, './app/index.js'),
    output:{
        path: path.join(path.resolve(__dirname, './dist')),
        filename: 'bundle.js'
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
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    //resolve-url-loader may be chained before sass-loader if necessary
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].css')
    ]
};