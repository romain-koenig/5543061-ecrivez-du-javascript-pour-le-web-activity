const path = require('path');

module.exports = {
    mode: "development",
    //mode: "production",
    entry: {
        blog: './src/blog.js', 
        fcn: './src/functions.js',
        reload: 'webpack-dev-server/client?http://localhost:8080'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8080
      }
};