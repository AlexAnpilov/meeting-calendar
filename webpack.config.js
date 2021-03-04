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
                            "plugins": [
                                "@babel/plugin-transform-runtime",
                                [
                                  "@babel/plugin-proposal-decorators",
                                  {
                                    "legacy": true
                                  }
                                ],
                                ["@babel/plugin-proposal-class-properties", { "loose": true }]
                              ]
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
