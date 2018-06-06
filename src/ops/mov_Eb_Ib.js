const assert = require('assert');

module.exports = function (op) {
    assert(op.args.length === 2);
    assert(op.args[1].type === 'VALUE');

    if (Array.isArray(op.args[0])) {
        let offset = 0;
        for (let i = 0; i < op.args[0].length; i++) {
            switch (op.args[0][i].type) {
                case 'REGISTER':
                    offset += this[op.args[0][i].value];
                    break;
                case 'VALUE':
                    offset += op.args[0][i].value;
                    break
            }
        }
        this.ram.write((this.ds << 4) | offset, op.args[1].value, op.args[1].size);
    } else if (op.args[0].type === 'VALUE') {
        this.ram.write((this.ds << 4) | op.args[0].value, op.args[1].value, op.args[1].size);
    } else {
        throw `Error in ${__filename}`;
    }

    this._done();

}