const path = require('path');

module.exports = {
    //mode: "production",
    mode: "development",
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
        port: 8080 // superflu, pot 8080 par défaut
    }
};