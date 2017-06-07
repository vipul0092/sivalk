const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const path = require('path');

module.exports = {
    resolve: {
        extensions: ['*', '.js', '.jsx', '.json']
    },
    devtool: 'eval-source-map', // more info:https://webpack.github.io/docs/build-performance.html#sourcemaps and https://webpack.github.io/docs/configuration.html#devtool
    entry: [
        path.resolve(__dirname, 'src/index.js') // Defining path seems necessary for this to work consistently on Windows machines.
    ],
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    target: 'web', // necessary per https://webpack.github.io/docs/testing.html#compile-and-test
    output: {
        path: path.resolve(__dirname, 'dist'), // Note: Physical files are only output by the production build task `npm run build`.
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'), // Tells React to build in either dev or prod modes. https://facebook.github.io/react/downloads.html (See bottom)
            __DEV__: true
        }),
        new HtmlWebpackPlugin({     // Create HTML file that includes references to bundled CSS and JS.
            template: 'src/resources/index.html',
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: false,
            debug: true,
            noInfo: true, // set to false to see a list of every file being bundled.
            options: {
                sassLoader: {
                    includePaths: [path.resolve(__dirname, 'src', 'scss')]
                },
                context: '/',
                postcss: () => [autoprefixer],
            }
        })
    ],

    devServer: {
        contentBase: "./dist",
        host: '127.0.0.1',
        port: 8111,
        historyApiFallback: true,
        inline: true
    }
};
