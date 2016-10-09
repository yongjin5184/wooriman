var webpack = require('webpack');
 
module.exports = {
 
    entry: [
        './src/index.js',
        'webpack-dev-server/client?http://0.0.0.0:9001',
        'webpack/hot/only-dev-server'
    ],
 
    output: {
        path: '/',
        filename: 'bundle.js'
    },
 
    devServer: {
        hot: true,
        filename: 'bundle.js',
        publicPath: '/',
        historyApiFallback: true,
        contentBase: './public',
        proxy: {
            "**": "http://localhost:9000"
        }
    },
 
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
 
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel?' + JSON.stringify({
                    presets: ['es2015', 'react']
                })],
                exclude: /node_modules/,
            }
        ]
    }
};