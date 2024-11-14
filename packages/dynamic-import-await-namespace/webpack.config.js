const path = require('path')
/**@type {import("webpack").Configuration}*/
module.exports = {
  mode: "production",
  entry: {
    "main": "./src/index.js"
  },
  optimization: {
    minimize: false,
    mangleExports: false
  },
  module: {
    rules: [
      {
        test: /\.js/,
        type: "javascript/esm"
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "webpack-dist")
  }
}
