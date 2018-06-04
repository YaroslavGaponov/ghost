const assert = require('assert');
const fs = require('fs');
const path = require('path');

const ghost = require('../index');

describe('jnb_Jb', _ => {

    const ram = new ghost.drivers.ram(100);
    ram.load(0, fs.readFileSync(__dirname + '/' + path.basename(__filename, path.extname(__filename)) + '/test.bin'));

    const vm = new ghost.vm(ram);

    it('jnb go 1', done => {
        vm.flags.Carry = false;

        vm.step();

        assert(vm.ip === 5, 'ip');
        assert(vm.cs === 0, 'cs');

        done();
    });

    it('jnb go 2', done => {
        vm.flags.Carry = true;

        vm.step();

        assert(vm.ip === 7, 'ip');
        assert(vm.cs === 0, 'cs');

        done();
    });

});