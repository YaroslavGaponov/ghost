const assert = require('assert');

module.exports = function (op) {   
    assert(op.args.length === 1);
    assert(op.args[0].type === 'VALUE');
    if (!this.flags.Carry) {
        this.ip += op.args[0].value;
    }
    this._done();
}