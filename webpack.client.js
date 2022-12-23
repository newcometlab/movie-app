const path = require('path')

module.exports = {
    entry: './src/server.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build/client'),
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/, // .js and .jsx files
                exclude: /node_modules|\.d\.ts$/, // excluding the node_modules folder
                use: {
                    loader: 'ts-loader',
                },
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.d\.ts$/,
                loader: 'ignore-loader',
            },
            {
                test: /\.(sa|sc|c)ss$/, // styles files
                use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/, // to import images and fonts
                loader: 'url-loader',
                options: { limit: false },
            },
        ],
    },
}
