const webpack = require('webpack'),
    path = require('path'),
    build_dir = path.resolve(__dirname, 'src/client/public'),
    app_dir = path.resolve(__dirname, 'src/client/app');

module.exports = {
    entry: app_dir + '/app.component.jsx',
    output: {
        path: build_dir,
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
                test: /\.jsx?/,
                include: app_dir,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss'],
        alias: {
            'app': app_dir
        },
    },
}