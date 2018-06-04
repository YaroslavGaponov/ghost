const assert = require('assert');

module.exports = function (op) {
    assert(op.args.length === 1);
    assert(op.args[0].type === 'REGISTER');

    this.sp -= 2;
    this.ram.write((this.ss << 4) | this.sp, this[op.args[0].value], 2);
    this._done();
}