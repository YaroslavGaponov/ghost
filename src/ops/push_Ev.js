const assert = require('assert');

module.exports = function (op) {
    assert(op.args.length === 1);
    assert(Array.isArray(op.args[0]));
    
    let offset = 0;
    for (let i = 0; i < op.args[0].length; i++) {
        switch (op.args[0][i].type) {
            case 'REGISTER':
                offset += this[op.args[0][i].value];
                break;
            case 'VALUE':
                offset += op.args[0][i].value;
                break;
        }
    }

    this.sp -= 2;
    this.ram.write((this.ss << 4) | this.sp, offset, 2);
    this._done();
}