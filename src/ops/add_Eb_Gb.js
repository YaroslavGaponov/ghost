const assert = require('assert');

module.exports = function (op) {
    assert(op.args.length === 2);
    assert(op.args[0].type === 'REGISTER');
    assert(op.args[0].size === 1);
    assert(op.args[1].type === 'REGISTER');
    assert(op.args[1].size === 1);

    this[op.args[0].value] = (this[op.args[0].value] + this[op.args[1].value]) & 0xff;
    
    this._done(1);
}