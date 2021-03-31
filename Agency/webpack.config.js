const path = require('path')
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, './script.js')
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js'
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, '.'),
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
}