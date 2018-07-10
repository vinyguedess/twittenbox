const path = require("path");
const NodemonPlugin = require("nodemon-webpack-plugin");


module.exports = {
    mode: "development",
    entry: "./resources/app/index.js",
    output: {
        path: path.resolve("public/assets", "js"),
        filename: "bundle.js"
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["env", "react"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "../img/[hash].[ext]"
                        }
                    },
                    {
                        loader: "image-webpack-loader",
                        options: {
                            bypassOnDebug: true, // webpack@1.x
                            disable: true  // webpack@2.x and newer
                        }
                    }
                ]
            },
            { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: "url-loader?limit=100000" }
        ]
    },

    plugins: [
        new NodemonPlugin({
            watch: path.resolve("src"),
            script: "./server.js"
        })
    ],

    resolve: {
        extensions: [".js", ".jsx"]
    }
};