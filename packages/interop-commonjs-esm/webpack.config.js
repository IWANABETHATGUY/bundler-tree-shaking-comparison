const path = require('path')
/**@type {import("webpack").Configuration}*/
module.exports = {
  mode: "production",
  entry: {
    "main": "./src/index.js"
  },
  optimization: {
    minimize: false,
    mangleExports: false,
    moduleIds: "named"

  },
  output: {
    path: path.resolve(__dirname, "webpack-dist")
  }
}
