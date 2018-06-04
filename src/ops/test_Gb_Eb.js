const assert = require('assert');
module.exports = function (op) {
    assert(op.args.length === 2);
    assert(op.args[0].type === 'REGISTER');
    switch (op.args[1].type) {
        case 'REGISTER':
            this.flags.Zero = this[op.args[0].value] === this[op.args[1].value];
            this._done();
            break;
        default:
            throw `Type ${op.args[1].type} is not supported`;
    }
}