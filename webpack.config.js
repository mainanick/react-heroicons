var path = require("path");
var glob = require("glob");
module.exports = {
  mode: "production",
  entry: glob.sync("./reactsrc/**/*.js").reduce((pre, cur) => {
    pre[cur.replace(/^.*[\\\/]/, "").split(".")[0]] = cur;
    return pre;
  }, {}),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components|build|dist)/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  externals: {
    react: "react"
  }
};
