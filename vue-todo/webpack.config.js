// webpack.config.js
module.exports = {
    resolve: {
      // Add `.ts` as a resolvable extension.
      extensions: ['.ts', '.js']
    },
    module: {
      rules: [
        // ... other rules omitted
        {
          test: /\.ts$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: { appendTsSuffixTo: [/\.vue$/] }
        }
      ]
    },
    // ... plugin omitted
  }