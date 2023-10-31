import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "node:path";
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export default {
  entry: ["./src/students.js", "./src/styles.css"],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
	  {
		test: /\.css$/,
		exclude: /node_modules/,
		use: ["style-loader", "css-loader"]
	  }
    ],
  },
  devServer: {
    port: 8080,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      scriptLoading: "blocking",
      hash: true,
    }),
  ],
};