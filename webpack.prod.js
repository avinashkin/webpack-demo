const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = merge(common, {
    mode: "production", // dev - tells webpack to stop minifying or prod(default)
    output: {
        filename: "[name].[contenthash].bundle.js", // the name of file in which minified code will be exported
        path: path.resolve(__dirname, "dist"), // tells the directory where to write the minified code
        assetModuleFilename: "images/[name].[hash][ext]",
    },
    optimization: {
        minimizer: [
            new OptimizeCssAssetPlugin(),
            new TerserWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: "./src/template.html",
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhiteSpace: true,
                    removeComments: true
                }
            })
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({filename: "[name].[contenthash].css"}), 
        new CleanWebpackPlugin()],

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, // 3. Extracts CSS into files
                    "css-loader", // 2. turns css to commonJS
                    "sass-loader" // 1. turns sass to css
                ] // maintain the order of array i.e. first CSS will be converted to JS by "css-loader" and then it will be injected into DOM by "style-loader"
            }
        ]
    }
});