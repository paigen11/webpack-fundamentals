var path = require('path');
// var webpack = require('webpack');
/* var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('shared'); /* this brings in
this extracts the webpack common code to a shared file -- for debugging, try running
webpack --display-entrypoints */

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.resolve('public/js'), // context adds in a root directory for the entry key (so it will look for app and utils inside the js folder)
    //entry: ["./app", "./utils"], // the file entry points
    // entry: {
    //     about: './about_page.js',
    //     home: './home_page.js',
    //     contact: './contact_page.js'
    // },
    entry: ['./app'],
    output: {
        // path: path.resolve('build/'),
        path: path.resolve('build/js/'),
        // publicPath: '/public/assets/', // path to place the bundled file in
        publicPath: 'public/assets/js/',
        filename: 'bundle.js' // name of bundled file
        // filename: '[name].js' // this way, the file name will vary based on the entry point key
    },
    watch: true ,// this has webpack watch the entry file for changes and auto rebuild when it sees them

    // plugins: [commonsPlugin],
    // plugins: [
    //     new ExtractTextPlugin("styles.css")
    // ],

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
                // the css compiles first, the style loader embeds it into the head of the index.html document
                // use: ExtractTextPlugin.extract({
                //     fallback: 'style-loader',
                //     use: ['css-loader'] //this means run it through the css loader first, then the style loader
                // })
                loader: 'style-loader!css-loader!autoprefixer-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader!sass-loader' //yes, you must load all three
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                // use: ExtractTextPlugin.extract({
                //     fallback: 'style-loader',
                //     use: ['css-loader','less-loader'] //and an example using less
                // })
                loader: 'style-loader!css-loader!autoprefixer-loader!less-loader'
            },
            {
                test: /\.(png|jpg|ttf|eot)$/, // this can handle images and font files
                exclude: /node_modules/,
                loader: 'url-loader?limit=100000' // as long as they're under the limit set the
            },
            {
                test: /\.json$/,
                exclude: /node_modules/,
                loader: 'json-loader!' + path.resolve('/loaders/strip')
            }
        ]
    },
    resolve: {
        extensions: [' ', '.js', '.es6'] // the extensions means babel will look for either a .js file or a .es6 file and not freak out

    }
};