const assert = require('assert');

module.exports = function (op) {
    assert(op.args.length === 2);
    assert(op.args[0].type === 'REGISTER');
    assert(op.args[0].size === op.prefix.opsize);
    assert(op.args[1].type === 'REGISTER');
    assert(op.args[1].size === op.prefix.opsize);

    this[op.args[0].value] = (this[op.args[0].value] + this[op.args[1].value]);
    
    this._done(op.prefix.opsize);
}