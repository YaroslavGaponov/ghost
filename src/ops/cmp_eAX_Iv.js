const assert = require('assert');

module.exports = function (op) {
    assert(op.args.length === 2);
    assert(op.args[0].type === 'REGISTER');
    assert(op.args[1].type === 'VALUE');

    this.flags.Zero = this[op.args[0].value] === op.args[1].value;
    
    this._done();
}