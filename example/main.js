const fs = require('fs');
const path = require('path');

const ghost = require('../index');

// initialize ram
const ram = new ghost.drivers.ram(1024 * 1024);
ram.load(0xf0000, fs.readFileSync(path.normalize(__dirname + '/../bios/BIOS-bochs-legacy')));

// create vm
const vm = new ghost.vm(ram);

// initialize dma's
const dma1 = new ghost.drivers.dma({
    MASTER_CLEAR: 0x000d,
    MODE_REG: 0x000b,
    MASK_REG: 0x000a
});
vm.addDevice(dma1);

const dma2 = new ghost.drivers.dma({
    MASTER_CLEAR: 0x00da,
    MODE_REG: 0x00d6,
    MASK_REG: 0x00d4
});
vm.addDevice(dma2);

// initialize bios debug
const debug = new ghost.drivers.debug();
vm.addDevice(debug);

// initialize cmos
const cmos = new ghost.drivers.cmos();
vm.addDevice(cmos);

// initialize pit
const pit = new ghost.drivers.pit();
vm.addDevice(pit);

// initalize keyboard
const keyboard = new ghost.drivers.keyboard();
vm.addDevice(keyboard);

// run bios
const START_SEGMENT = 0xf000;
const START_OFFSET = 0xfff0;
vm.start(START_SEGMENT, START_OFFSET);