module.exports = {
    entry: ["./app.js", "./utils.js"], // the file entry point
    output: {
        filename: "bundle.js" // name of bundled file
    },
    watch: true ,// this has webpack watch the entry file for changes and auto rebuild when it sees them

    module : {
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "jshint-loader"
            }

        ],
        loaders: [
            {
                test: /\.es6$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    resolve: {
        extensions: [' ', '.js', '.es6'] // the extensions means babel will look for either a .js file or a .es6 file and not freak out

    }
};