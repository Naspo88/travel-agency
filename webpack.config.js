const path = require('path');

module.exports = {
    entry: {
        App: "./app/assets/js/App.js",
        Vendor: "./app/assets/js/Vendor.js"
    },
    output: {
        path: path.resolve(__dirname, "./app/temp/js"),
        filename: "[name]-bundle.js"
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
