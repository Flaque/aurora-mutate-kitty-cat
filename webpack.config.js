const path = require("path");
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "build/index.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ },
      { test: /\.jsx$/, loader: "babel-loader", exclude: /node_modules/ }
    ]
  }
};
