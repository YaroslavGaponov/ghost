class Pit {
    constructor() {
        this.channel = 0;
        this.access = 0;
        this.mode = 0;
    }
    getPorts() {
        return [0x40, 0x41, 0x42, 0x43];
    }
    write(port, value) {
        switch (port) {
            case 0x43:
                this.mode = value;
                break;
            case 0x40:
            case 0x41:
            case 0x42:
            case 0x43:
                break;
        }

    }
    read(port) {
        switch (port) {
            case 0x43:
                break;
            case 0x40:
            case 0x41:
            case 0x42:
            case 0x43:
                break;
        }
    }
}

module.exports = Pit;