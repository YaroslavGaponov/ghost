const assert = require('assert');

module.exports = function (op) {
    assert(op.args.length === 2);
    assert(op.args[0].type === 'REGISTER');
    assert(op.args[1].type === 'VALUE');

    switch (op.prefix.opsize) {
        case 2:
            this.ax = op.args[1].value & 0xffff; break;
        case 4:
            this.wax = op.args[1].value & 0xffffffff; break;
    }

    this._done(op.args[0].size);
}