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
    }
};