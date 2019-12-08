import * as path from 'path';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as webpack from 'webpack';

const config: webpack.Configuration = {

  mode: 'development',

  entry: path.resolve(__dirname, './src/index.tsx'),

  // devtool:
  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      },

      // all output .js files that have source maps will re-processed into 'source-map-loader'
      {
        enforce: 'pre',
        test: /\.js(x?)$/,
        loader: 'source-map-loader'
      }
    ]
  },

  resolve: {
    // file extensions:
    extensions: ['.ts', '.tsx', '.js', '.jsx', ".json"]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]

}

export default config;
