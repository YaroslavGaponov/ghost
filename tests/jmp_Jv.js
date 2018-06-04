const assert = require('assert');
const fs = require('fs');
const path = require('path');

const ghost = require('../index');

describe('jmp_Jb', _ => {

    const ram = new ghost.drivers.ram(100);
    ram.load(0, fs.readFileSync(__dirname + '/' + path.basename(__filename, path.extname(__filename)) + '/test.bin'));

    const vm = new ghost.vm(ram);

    it('jmp go', done => {
        vm.step();
        assert(vm.ip === 6, 'ip');
        assert(vm.cs === 0, 'cs');
        assert(vm._fetch(1) === 0xc3); // ret
        done();
    });


});