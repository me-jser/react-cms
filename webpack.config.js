const path = require('path');

module.exports = {

    entry: path.resolve(__dirname, './app/index.js'),
    output:{
        path: path.join(path.resolve(__dirname, './dist')),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: [' ', '.js', '.jsx']
    },
    module: {
        loaders: [
            {test: /\.jsx?$/,         // Match both .js and .jsx files
                exclude: /node_modules/,
                loader: "babel-loader",
                query:
                {
                    presets:['react']
                }},

        ]
    }

};