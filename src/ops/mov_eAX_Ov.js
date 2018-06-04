const assert = require('assert');

module.exports = function (op) {
    assert(op.args.length === 2);
    assert(op.args[0].type === 'REGISTER');
    assert(op.args[1].type === 'VALUE');

    this[op.args[0].value] = this.ram.read((this.ds << 4) | op.args[1].value, op.args[0].size);


    this._done(op.args[0].size);
}