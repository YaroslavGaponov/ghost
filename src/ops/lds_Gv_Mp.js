const assert = require('assert');

module.exports = function (op) {
    assert(op.args.length === 2);
    assert(op.args[0].type === 'REGISTER');

    if (Array.isArray(op.args[1])) {
        let offset = 0;
        for (let i = 0; i < op.args[1].length; i++) {
            switch (op.args[1][i].type) {
                case 'REGISTER':
                    offset += this[op.args[1][i].value];
                    break;
                case 'VALUE':
                    offset += op.args[1][i].value;
                    break;
            }
        }
        this[op.args[0].value] = this.ram.read((this.ds << 4) | offset, op.args[0].size);
        return this._done(op.args[0].size);
    } 

    throw `Error in ${__filename}`;    
}