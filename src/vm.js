const DEBUG = true;

const assert = require('assert');
const fs = require('fs');
const path = require('path');

const DisAsm = require('./disasm');

class IODevice {
  constructor() {
    this.devices = [];
  }
  addDevice(device) {
    device.getPorts().forEach(port => {
      this.devices[port] = device;
    });
  }

  write(port, value) {
    const device = this.devices[port];
    if (!device) return; //throw `Device for write to port 0x${port.toString(16)} is not found`;
    device.write(port, value);
  }

  read(port) {
    const device = this.devices[port];
    if (!device) return 0xffff; //throw `Device for read from port 0x${port.toString(16)} is not found`;
    return device.read(port);
  }
}

class VM {
  constructor(ram, iodevice) {

    this.disasm = new DisAsm(this._fetch.bind(this), this._sfetch.bind(this));

    const mixins = fs.readdirSync(__dirname + '/ops');
    for (let i = 0; i < mixins.length; i++) {
      let name = path.basename(mixins[i], path.extname(mixins[i]));
      this[name] = require(__dirname + '/ops/' + mixins[i]).bind(this);
    }


    this.ram = ram;
    this.iodevice = new IODevice();

    this.flags = {
      Carry: false,
      Parity: false,
      Auxiliary: false,
      Zero: false,
      Sign: false,
      Trace: false,
      Interrupt: false,
      Direction: false,
      Overflow: false
    };

    this.ax = 0;
    this.ah = 0;
    this.al = 0;

    this.cx = 0;
    this.ch = 0;
    this.cl = 0;

    this.dx = 0;
    this.dh = 0;
    this.dl = 0;

    this.bx = 0;
    this.bh = 0;
    this.bl = 0;

    this.sp = 0;
    this.bp = 0;
    this.si = 0;
    this.di = 0;
    this.ds = 0;
    this.es = 0;
    this.fs = 0;
    this.gs = 0;
    this.ss = 0;
    this.cs = 0;
    this.ip = 0;
  }

  addDevice(device) {
    this.iodevice.addDevice(device);
  }

  _done(size) {
    switch (size) {
      case 1:
        this.ax = (this.ah << 8) | this.al;
        this.cx = (this.ch << 8) | this.cl;
        this.dx = (this.dh << 8) | this.dl;
        this.bx = (this.bh << 8) | this.bl;
        this.eax = (this.eax & 0xffff0000) | this.ax;
        this.ecx = (this.ecx & 0xffff0000) | this.cx;
        this.edx = (this.edx & 0xffff0000) | this.dx;
        this.ebx = (this.ebx & 0xffff0000) | this.bx;
        break;
      case 2:
        this.ah = this.ax >> 8;
        this.al = this.ax & 0xff;
        this.ch = this.cx >> 8;
        this.cl = this.cx & 0xff;
        this.dh = this.dx >> 8;
        this.dl = this.dx & 0xff;
        this.bh = this.bx >> 8;
        this.bl = this.bx & 0xff;
        this.eax = (this.eax & 0xffff0000) | this.ax;
        this.ecx = (this.ecx & 0xffff0000) | this.cx;
        this.edx = (this.edx & 0xffff0000) | this.dx;
        this.ebx = (this.ebx & 0xffff0000) | this.bx;
        break;
      case 4:
        this.ax = this.eax & 0xffff;
        this.ah = (this.ax >>> 8) & 0xff;
        this.al = this.ax & 0xff;
        this.cx = this.ecx & 0xffff;
        this.ch = (this.cx >>> 8) & 0xff;
        this.cl = this.cx & 0xff;
        this.dx = this.edx & 0xffff;
        this.dh = (this.dx >>> 8) & 0xff;
        this.dl = this.dx & 0xff;
        this.bx = this.ebx & 0xffff;
        this.bh = (this.bx >>> 8) & 0xff;
        this.bl = this.bx & 0xff;
        break;
    }
  }

  _fetch(size = 1) {
    const addr = (this.cs << 4) | this.ip;
    this.ip += size;
    return this.ram.read(addr, size);
  }

  _sfetch(size = 1) {
    const addr = (this.cs << 4) | this.ip;
    this.ip += size;
    return this.ram.sread(addr, size);
  }

  start(segment, offset) {
    this.cs = segment;
    this.ip = offset;
    this.counter = 0;
    for (;;)
      try {
        this.step();
        this.counter++;
      } catch (ex) {
        this.print();
        throw ex;
      }
  }

  step() {

    if (DEBUG) {
      console.log('-----------------------');
      console.log(`cs:ip 0x${this.cs.toString(16).padStart(4,'0')}:0x${(this.ip).toString(16).padStart(4,'0')}`)
    }

    const result = this.disasm.get();


    if (DEBUG) {
      console.log(result);
    }

    const name = `${result.opcode.name}_${result.opcode.args.join('_')}`;
    if (!(name in this)) {
      throw `Handler ${name} is not found`;
    }

    this[name](result);
  }


  print() {
    console.log(`
    instructions ${this.counter} passed
    flags = ${JSON.stringify(this.flags)}
    ax    = 0x${this.ax.toString(16).padStart(4,'0')}     cx    = 0x${this.cx.toString(16).padStart(4,'0')}
    dx    = 0x${this.dx.toString(16).padStart(4,'0')}     bx    = 0x${this.bx.toString(16).padStart(4,'0')}
    sp    = 0x${this.sp.toString(16).padStart(4,'0')}     bp    = 0x${this.bp.toString(16).padStart(4,'0')}
    si    = 0x${this.si.toString(16).padStart(4,'0')}     di    = 0x${this.di.toString(16).padStart(4,'0')}
    ds    = 0x${this.ds.toString(16).padStart(4,'0')}     es    = 0x${this.es.toString(16).padStart(4,'0')}
    fs    = 0x${this.fs.toString(16).padStart(4,'0')}     gs    = 0x${this.gs.toString(16).padStart(4,'0')}
    ss    = 0x${this.ss.toString(16).padStart(4,'0')}     cs    = 0x${this.cs.toString(16).padStart(4,'0')}
    ip    = 0x${this.ip.toString(16).padStart(4,'0')}
    `);
  }
}


module.exports = VM;