class Keyboard {
    constructor() {

    }
    getPorts() {
        return [0x60, 0x64];
    }
    write(port, value) {

    }
    read(port) {
        switch (port) {
            case 0x60:
                return 0x10 & 0x20;
            case 0x64:
            default:
                return 0xffffffff;
        }
    }
}

module.exports = Keyboard;