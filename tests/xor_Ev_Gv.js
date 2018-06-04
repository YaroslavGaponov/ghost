const assert = require('assert');
const fs = require('fs');
const path = require('path');

const ghost = require('../index');

describe('xor_Ev_Gv', _ => {

    const ram = new ghost.drivers.ram(100);
    ram.load(0, fs.readFileSync(__dirname + '/' + path.basename(__filename, path.extname(__filename)) + '/test.bin'));

    const vm = new ghost.vm(ram);

    it('xor ax,ax', done => {
        vm.ax = 0x1234;
        vm._done(2);

        vm.step();

        assert(vm.ax === 0);

        done();
    });

    it('xor ax,bx', done => {
        vm.ax = 0x1234;
        vm.bx = 0x5678;
        vm._done(2);

        vm.step();

        assert(vm.ax === (0x1234 ^ 0x5678));

        done();
    });

    it('xor eax, eax', done => {
        vm.ax = 0x12345678;
        vm._done(2);

        vm.step();

        assert(vm.ax === 0);

        done();
    });

    it('xor eax, ebx', done => {
        vm.eax = 0x12345678;
        vm.ebx = 0x87654321;
        vm._done(4);

        vm.step();

        assert(vm.eax === (0x12345678 ^ 0x87654321));

        done();
    });

});