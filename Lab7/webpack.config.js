const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const  CopyWebpackPlugin  = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const multipleHTMLNames = ["schedule", "about", "news", "photo"];
// Generate HtmlWebpackPlugin for evety page name
const multipleHTMLPlugins = multipleHTMLNames.map((name) => {
  return new HtmlWebpackPlugin({
    filename: `${name}.html`,
    template: path.resolve(__dirname, `src/pages/${name}.html`),
  });
});

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bulndle.js",
  },
  plugins: [
    // Purge dist directory at build.
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: path.resolve(__dirname, "src/assets/images"),
        to: path.resolve(__dirname, "dist/assets/images" )
       }],
    }),
    new MiniCssExtractPlugin(),
  ].concat(multipleHTMLPlugins),
  module: {
    rules: [
      // {
      //   test: /\.scss$/i,
      //   use: [MiniCssExtractPlugin.loader, "css-loader"],
      // },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      }
    ],
  },
  };
