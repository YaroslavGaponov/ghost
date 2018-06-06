const assert = require('assert');

module.exports = function (op) {
    assert(op.args.length === 2);
    assert(op.args[1].type === 'VALUE');

    switch(op.args[0].type) {
        case 'REGISTER':
            this.flags.Zero = this[op.args[0].value] === op.args[1].value;
            break;
        case 'VALUE':
            this.flags.Zero = this.ram.read((this.ds<<4)|op.args[0].value, op.args[1].size) === op.args[1].value;
            break;
    }
    this._done(); 
}