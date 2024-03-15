const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html"
    })],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                "style-loader", // 3. injects js to DOM
                "css-loader", // 2. turns css to commonJS
                "sass-loader" // 1. turns sass to css
            ] // maintain the order of array i.e. first CSS will be converted to JS by "css-loader" and then it will be injected into DOM by "style-loader"
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\/(svg|png|jpg|gif)$/,
                use: "asset/resource"
            }
        ]
    }
}