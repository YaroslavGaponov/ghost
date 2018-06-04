const assert = require('assert');
const fs = require('fs');
const path = require('path');

const ghost = require('../index');

describe('out_Ib_AL', _ => {

    const ram = new ghost.drivers.ram(100);
    ram.load(0, fs.readFileSync(__dirname + '/' + path.basename(__filename, path.extname(__filename)) + '/test.bin'));

    const vm = new ghost.vm(ram);

    it('out 0x77,al', done => {
        vm.eax = 0x0fffff05;
        vm._done(4);

        vm.addDevice({
            getPorts: () => [0x77],
            write: (port, value) => {
                assert(port === 0x77);
                assert(value === 0x5);
                done();
            }
        });

        vm.step();
    });
});