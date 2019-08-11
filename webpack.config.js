const path = require('path');

module.exports = {

  mode: 'production',

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
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  }

}
