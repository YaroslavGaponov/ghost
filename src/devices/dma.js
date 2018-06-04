
class Dma {
    constructor(ports) {
        this.ports = ports;
        this.car = 0;
        this.cwr = 0;
        this.bar = 0;
        this.wcr = 0;
        this.mr = 0;
        this.cr = 0;
        this.sr = 0;
        this.rr = 0;
        this.mask = 0;
    }
    getPorts() {
        return Object.values(this.ports);
    }
    write(port, value) {
        switch (port) {
            case this.ports.MASTER_CLEAR:
                break;
            case this.ports.MODE_REG:
                this.mr = value;
                break;
            case this.ports.MASK_REG:
                this.mask = value;
        }
    }
    read(port) {

    }
}

module.exports = Dma;