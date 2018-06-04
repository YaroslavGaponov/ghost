const assert = require('assert');

module.exports = function(op) {
    assert(op.args.length === 1);
    assert(op.args[0].type === 'REGISTER');
    
    this[op.args[0].value]++;
    this._done(op.args[0].size);
}