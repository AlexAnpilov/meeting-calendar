const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'calendar.js',
        publicPath: '/dist/'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,

                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', {
                            'plugins': ['@babel/plugin-proposal-class-properties']
                        }]
                    }
                }
            },
            {
                test: /.*\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
        ]
    }
}
