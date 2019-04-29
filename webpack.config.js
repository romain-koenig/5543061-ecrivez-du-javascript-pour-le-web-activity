const path = require('path');

module.exports = {
    mode: "production",
    //mode: "development",
    entry: {
        fcn: './Src/functions.js',
        blog: './Src/blog.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'Dist')
    },
    devServer: {
        contentBase: path.join(__dirname, 'Dist'),
        compress: true,
        port: 8080 // superflu, port 8080 par défaut
    }
}
module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
;