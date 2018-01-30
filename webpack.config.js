var path = require('path');
// var webpack = require('webpack');
/* var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('shared'); /* this brings in
this extracts the webpack common code to a shared file -- for debugging, try running
webpack --display-entrypoints */

module.exports = {
    context: path.resolve('js'), // context adds in a root directory for the entry key (so it will look for app and utils inside the js folder)
    //entry: ["./app", "./utils"], // the file entry points
    // entry: {
    //     about: './about_page.js',
    //     home: './home_page.js',
    //     contact: './contact_page.js'
    // },
    entry: ['./app'],
    output: {
        path: path.resolve('build/js'),
        publicPath: '/public/assets/js/', // path to place the bundled file in
        filename: 'bundle.js' // name of bundled file
        // filename: '[name].js' // this way, the file name will vary based on the entry point key
    },
    watch: true ,// this has webpack watch the entry file for changes and auto rebuild when it sees them

    // plugins: [commonsPlugin],

    devServer: {
        contentBase: 'public' // this tells our dev server where to look for the index.html file
    },

    module : {
        rules: [
            {
                test: /\.js$/, // include .js files
                enforce: "pre", // preload the jshint loader
                exclude: /node_modules/, // exclude any and all files in the node_modules folder
                use: [
                    {
                        loader: "jshint-loader"
                    }
                ]
            },
            {
                test: /\.es6$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader"
                    }
                ]
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader' //this means run it through the css loader first, then the style loader

            }
        ]
    },
    resolve: {
        extensions: [' ', '.js', '.es6'] // the extensions means babel will look for either a .js file or a .es6 file and not freak out

    }
};