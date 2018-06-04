const assert = require('assert');

module.exports = function (op) {   
    assert(op.args.length === 1);
    assert(op.args[0].type === 'VALUE');
    
    if (--this.cx !== 0) {
        this.ip = (this.ip + op.args[0].value) & 0xffff;
    }
    this._done(op.prefix.opsize);
}