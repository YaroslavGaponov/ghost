const assert = require('assert');

module.exports = function (op) {

    const step = this.flags.Direction ? -op.prefix.opsize : +op.prefix.opsize;

    switch (op.prefix.rep) {
        case 'repz':
            const value = op.prefix.opsize === 2 ? this.ax : this.eax;
            while (this.cx !== 0) {
                this.ram.write((this.es << 4) | this.di, value, op.prefix.opsize);
                this.di += step;
                this.cx--;
            }
            this._done(op.prefix.opsize);
            break;

        default:
            throw `Prifix ${op.prefix.rep} is not supported`;
    }
}