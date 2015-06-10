var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = {
    entry: __dirname + '/app/main.js',

    output: {
        path: __dirname + '/dist/',
        filename: 'bundle.js'
    },

    // http://webpack.github.io/docs/configuration.html#devtool
    devtool: "#cheap-module-source-map",

    module: {
        loaders: [
            {
                test: /\.es6.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                loader: "style!css!sass"
            },
            {
                test: /\.(htm|html)$/,
                exclude: /node_modules/,
                loader: 'raw-loader'
            }
        ]
    },

    plugins: [
        new ngAnnotatePlugin({
            add: true
        })
    ]
};
