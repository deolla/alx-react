const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,  // Clean the output directory before emit
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    compress: true,
    hot: true,
    open: true,
    port: 8664,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        //type: 'asset/resource',
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              disable: true, // Set to true in development
              bypassOnDebug: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      name: 'index.html',
      inject: false,
      template: './dist/index.html',
    }),
  ],
};
