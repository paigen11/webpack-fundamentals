var stripComments = require('strip-json-comments');

module.exports = function(source) {
    this.cacheable(); // this lets webpack know that given the same inputs, it returns the same outputs, as long as its nondeterministic

    console.log('source', source);
    console.log('strippedSource ', stripComments(source));

    return stripComments(source);
}