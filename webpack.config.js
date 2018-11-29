const path = require('path');

module.exports = {
    entry: "./app/assets/js/App.js",
    output: {
        path: path.resolve(__dirname, "./app/temp/js"),
        filename: "App-bundle.js"
    },
    module: {
        rules: [{
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            },
            test: /\.js$/,
            exclude: /node_modules/
        }]
    }
};
