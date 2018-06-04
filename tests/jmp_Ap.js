const assert = require('assert');
const fs = require('fs');
const path = require('path');

const ghost = require('../index');

describe('jmp_Ap', _ => {

    const ram = new ghost.drivers.ram(100);
    ram.load(0, fs.readFileSync(__dirname + '/' + path.basename(__filename, path.extname(__filename)) + '/test.bin'));

    const vm = new ghost.vm(ram);

    it('jmp 0x1234:0x5678', done => {
        vm.step();
        assert(vm.ip === 0x5678, 'ip');
        assert(vm.cs === 0x1234, 'cs');
        done();
    });


});