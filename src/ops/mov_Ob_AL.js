const assert = require('assert');

module.exports = function (op) {   
    assert(op.args.length === 2);
    assert(op.args[0].type === 'VALUE');
    assert(op.args[1].type === 'REGISTER');
    this.ram.write((this.ds<<4)|op.args[0].value, this[op.args[1].value], op.args[1].size);
    this._done(op.args[1].size);
}