const assert = require('assert');

module.exports = function () {
    this.ip = this.ram.read((this.ss << 4) | this.sp, 2);
    this.sp += 2;    
    this._done();
}