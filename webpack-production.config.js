var WebpackStrip = require('strip-loader');
var devConfig = require('./webpack.config'); //webpack itself is just another module you can include
/* striploader can take in all sorts of commands and remove them before
bundling the code for prod */
var stripLoader = {
    test: [/\.js$/, /\.es6$/],
    exclude: /node_modules/,
    use: [
        {
           loader: WebpackStrip.loader('console.log', 'perfLog')
        }
    ]
};

devConfig.module.rules.push(stripLoader); //updated to support Webpack 3 syntax

module.exports = devConfig;