const assert = require('assert');

module.exports = function (op) {
    assert(op.args.length === 3);
    assert(op.args[0].type === 'REGISTER');
    assert(op.args[1].type === 'REGISTER');
    assert(op.args[2].type === 'VALUE');

    this[op.args[0].value] = (this[op.args[1].value] * op.args[2].value);

    this._done(op.args[0].size);
}