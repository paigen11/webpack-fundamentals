module.exports = {
    entry: "./app.js", // the file entry point
    output: {
        filename: "bundle.js" // name of bundled file
    },
    watch: true // this has webpack watch the entry file for changes and auto rebuild when it sees them
};