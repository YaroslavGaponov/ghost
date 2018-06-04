class CMOS {
    constructor() {
        this.index = 0;
        this.data = new Buffer(0x3f);
    }
    getPorts() {
        return [0x70, 0x71];
    }
    write(port, value) {
        switch (port) {
            case 0x70:
                this.index = value;
                break;
            case 0x71:
                this.data[this.index] = value;
                break;
        }
    }
    read(port) {
        return this.data.readUInt8(this.index);
    }
}

module.exports = CMOS;