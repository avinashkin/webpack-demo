const path = require("path");

module.exports = {
    mode: "development", // dev - tells webpack to stop minifying or prod(default)
    entry: "./src/index.js",
    output: {
        filename: "main.js", // the name of file in which minified code will be exported
        path: path.resolve(__dirname, "dist") // tells the directory where to write the minified code
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                "style-loader", // 3. injects js to DOM
                "css-loader", // 2. turns css to commonJS
                "sass-loader" // 1. turns sass to css
            ] // maintain the order of array i.e. first CSS will be converted to JS by "css-loader" and then it will be injected into DOM by "style-loader"
            }
        ]
    }
}