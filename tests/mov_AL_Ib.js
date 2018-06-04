const assert = require('assert');
const fs = require('fs');
const path = require('path');

const ghost = require('../index');

describe('mov_AL_Ib', _ => {

    const ram = new ghost.drivers.ram(100);
    ram.load(0, fs.readFileSync(__dirname + '/' + path.basename(__filename, path.extname(__filename)) + '/test.bin'));

    const vm = new ghost.vm(ram);

    it('mov al, 0x12', done => {
        vm.eax = 0x0fffffff;
        vm._done(4);

        vm.step();       

        assert(vm.al === 0x12);
        assert(vm.ax === 0xff12);
        assert(vm.eax === 0x0fffff12);

        done();
    });

    it('mov al, 0x34', done => {
        vm.eax = 0x0fffffff;
        vm._done(4);

        vm.step();

        assert(vm.al === 0x34);
        assert(vm.ax === 0xff34);
        assert(vm.eax === 0x0fffff34);
        
        done();
    });
});