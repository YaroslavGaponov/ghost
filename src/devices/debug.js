class Debug {
    constructor() {
    }
    getPorts() {
        return [0x401];
    }
    write(port, value) {
        switch (port) {
            case 0x401:
                process.stdout.write('0x' + value.toString(16));
                break;
        }
    }
    read(port) {

    }
}

module.exports = Debug;