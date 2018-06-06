const assert = require('assert');

module.exports = function (op) {
    assert(op.args.length === 1);
    assert(op.args[0].type === 'REGISTER');
    assert(op.args[0].size === 1);

    this.ax = (this.al * this[op.args[0].value]) & 0xffff;

    this._done(2);
}