const assert = require('assert');

module.exports = function (op) {
    assert(op.args.length === 1);
    assert(op.args[0].type === 'VALUE');

    this.sp -= 2;
    this.ram.write((this.ss << 4) | this.sp, this.ip, 2);

    this.ip = (this.ip + op.args[0].value) & 0xffff;
    this._done();
}