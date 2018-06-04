class Ram {
    constructor(size) {
      this.space = new Buffer(size);
    }
    load(addr, bios) {
      bios.copy(this.space, addr);
    }
    read(addr, size) {
      switch (size) {
        case 1:
          return this.space.readUInt8(addr);
        case 2:
          return this.space.readUInt16LE(addr);
        case 4:
          return this.space.readUInt32LE(addr);
      }
    }
    sread(addr, size) {
      switch (size) {
        case 1:
          return this.space.readInt8(addr);
        case 2:
          return this.space.readInt16LE(addr);
        case 4:
          return this.space.readInt32LE(addr);
      }
    }
  
    write(addr, value, size) {
      switch (size) {
        case 1:
          this.space.writeUInt8(value, addr);
          break;
        case 2:
          this.space.writeUInt16LE(value, addr);
          break;
        case 4:
          this.space.writeUInt32LE(value, addr);
          break;
      }
    }
  }


  module.exports = Ram;