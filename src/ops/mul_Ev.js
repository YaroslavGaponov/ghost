const assert = require('assert');

module.exports = function (op) {
    assert(op.args.length === 1);
    assert(op.args[0].type === 'REGISTER');
    assert(op.args[0].size === op.prefix.opsize);

    switch (op.prefix.opsize) {
        case 2:
            {
                const res = this.ax * this[op.args[0].value];
                this.dx = res >>> 16;
                this.ax = res & 0xffff;
                break;
            }
        case 4:
            const res = this.eax * this[op.args[0].value];
            this.edx = res >>> 32;
            this.eax = res & 0xffffffff;
            break;

    }
    this._done(op.prefix.opsize);
}