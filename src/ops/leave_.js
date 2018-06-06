module.exports = function (op) {   
    switch(op.prefix.opsize) {
        case 2:
            this.sp = this.bp;
            this.bp = this.ram.read((this.ss << 4) | this.sp, 2);            
            this.sp += 2;
            break;
        case 4:
        this.esp = this.ebp;
        this.ebp = this.ram.read((this.ess << 4) | this.esp, 4);            
        this.esp += 2;    
    }
    this._done(op.prefix.opsize);
}