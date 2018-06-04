module.exports = function (op) {
    this.cs = op.args[0].segment;
    this.ip = op.args[0].offset;
    this._done();
}   