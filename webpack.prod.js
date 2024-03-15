const path = require("path");
const common = require("./webpack.common");
const {merge} = require("webpack-merge");
const {CleanWebpackPlugin} = require("clean-webpack-plugin")

module.exports = merge(common, {
    mode: "production", // dev - tells webpack to stop minifying or prod(default)
    output: {
        filename: "main.[contenthash].js", // the name of file in which minified code will be exported
        path: path.resolve(__dirname, "dist"), // tells the directory where to write the minified code
        assetModuleFilename: "images/[name].[hash][ext]",
    },
    plugins: [new CleanWebpackPlugin()]
});