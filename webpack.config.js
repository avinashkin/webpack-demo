const path = require("path");

module.exports = {
    mode: "development", // dev - tells webpack to stop minifying or prod(default)
    entry: "./src/index.js",
    output: {
        filename: "main.js", // the name of file in which minified code will be exported
        path: path.resolve(__dirname, "dist") // tells the directory where to write the minified code
    }
}