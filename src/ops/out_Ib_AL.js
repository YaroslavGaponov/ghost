const assert = require('assert');

module.exports = function (op) {
    assert(op.args.length === 2);
    assert(op.args[0].type === 'VALUE');
    assert(op.args[1].type === 'REGISTER');
    assert(op.args[1].value === 'al');

    this.iodevice.write(op.args[0].value, this.al);
    
    this._done();
}