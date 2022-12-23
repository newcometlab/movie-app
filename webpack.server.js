const path = require("path");
const webpackNodeExternals = require("webpack-node-externals");

module.exports = {
    target: 'node',
    entry: './src/ssr.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build/server'),
    },
    resolve:
    {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/, // .js and .jsx files
                exclude: /node_modules|\.d\.ts$/, // excluding the node_modules folder
                use: {
                    loader: "ts-loader",
                },
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },
    externals: [webpackNodeExternals()],
};
