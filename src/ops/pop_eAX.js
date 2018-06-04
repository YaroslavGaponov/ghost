const assert = require('assert');

module.exports = function (op) {
    assert(op.args.length === 1);
    assert(op.args[0].type === 'REGISTER');

    this[op.args[0].value] = this.ram.read((this.ss << 4) | this.sp, 2);
    this.sp += 2;

    this._done(op.args[0].size);
    
}