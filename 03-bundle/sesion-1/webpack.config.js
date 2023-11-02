import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CopyPlugin from "copy-webpack-plugin";
import path from "node:path";
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export default {
  context: path.resolve(__dirname, "src"),
  entry: {
    app: "./index.js",
  },
  output: {
    filename: "[name].[chunkhash].js",
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        type: "asset/resource"
      },
      {
        test: /\.html$/,
        use: "html-loader"
      }
    ],
  },
  devServer: {
    port: 8080,
    static: {
      directory: path.join(__dirname, "src")
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
      scriptLoading: "blocking"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[chunkhash].css",
      chunkFilename: "[id].css"
    }),
    /*
    new CopyPlugin({
      patterns: [
        { from: "content", to: "content" }
      ]
    })
    */
  ],
};