const assert = require('assert');

module.exports = function (op) {   
    assert(op.args.length === 2);
    assert(op.args[0].type === 'REGISTER');
    assert(op.args[0].value === 'dx');
    assert(op.args[1].type === 'REGISTER');
    this.iodevice.write(this.dx, this[op.args[1].value]);
    this._done();
}