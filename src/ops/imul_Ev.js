const assert = require('assert');

module.exports = function (op) {
    assert(op.args.length === 1);
    assert(op.args[0].type === 'REGISTER');
    assert(op.args[0].size === 2);

    const res = this.ax * this[op.args[0].value];
    this.ax = res & 0xffff;
    this.dx = res>>>16;

    this._done(op.args[0].size);
}