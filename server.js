const express = require('express');
const path = require('path');
const logger = require('morgan');
var routes = require('./routes/index');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));

app.use('/', routes);

// Only load this middleware in dev mode (important).
if (app.get('env') === 'development') {
    var webpackMiddleware = require("webpack-dev-middleware");
    var webpack = require('webpack');

    var config = require('./webpack.config');

    app.use(webpackMiddleware(webpack(config), {
        publicPath: "/build", // this is a required property you must give to override where the webpack middleware will serve up the bundle file

        headers: { "X-Custom-Webpack-Header": "yes" },

        stats: {
            colors: true
        }
    }));

}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

var server = app.listen(8000, function () {
    console.log('listening on port 8000');
});