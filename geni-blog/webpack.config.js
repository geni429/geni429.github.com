const path = require('path');
const marked = require('marked');
const renderer = new marked.Renderer();
const webpack = require('webpack');

const config = {
  entry: "./src/index.js",

  output: {
    path: path.join(__dirname, '/dist/'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          cacheDirectory: true,
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'html-loader'
          },
          {
            loader: 'markdown-loader',
            options: {
              pedantic: true,
              renderer
            }
          }
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
            },
          },
        ]
      }
    ]
  },

  devServer: {
    inline: true,
    port: 3030,
    contentBase: path.join(__dirname, '/public/')
  },
}

module.exports = config;

// plugins: [
//   new webpack.DefinePlugin({
//     'process.env.NODE_ENV': '"development"'
//   })
// ],