module.exports = {
    entry: ["./app.js", "./utils.js"], // the file entry point
    output: {
        filename: "bundle.js" // name of bundled file
    },
    watch: true ,// this has webpack watch the entry file for changes and auto rebuild when it sees them

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
            }
        ]
    },
    resolve: {
        extensions: [' ', '.js', '.es6'] // the extensions means babel will look for either a .js file or a .es6 file and not freak out

    }
};