const path = require('path');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [{
          // loader: 'style-loader',
          loader: MiniCssExtractPlugin.loader
        }, {
          loader: 'css-loader',
          options: {
            modules: true,            
          }
        }, {
          loader: 'sass-loader',
        }
        
      ],
      },      

    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    
    new HtmlWebpackPlugin({         
        template: './src/index.html',
        filename: 'dist/index.html',
    }),
  
    new MiniCssExtractPlugin({

      filename: "[name].css",
      chunkFilename: "[id].css"
  })    
],
};
