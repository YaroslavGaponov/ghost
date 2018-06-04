const instructions = require('./opcodes');

const ARG_TYPE = Object.freeze({
    ADDRESS: 'ADDRESS',
    VALUE: 'VALUE',
    REGISTER: 'REGISTER'
});

class Arg {
    constructor(type) {
        this.type = type;
    }
}

class Address extends Arg {
    constructor(segment, offset) {
        super(ARG_TYPE.ADDRESS);
        this.segment = segment;
        this.offset = offset;
    }
}

class Value extends Arg {
    constructor(value, size) {
        super(ARG_TYPE.VALUE);
        this.value = value;
        this.size = size;
    }
}

class Register extends Arg {
    constructor(value, size) {
        super(ARG_TYPE.REGISTER);
        this.value = value;
        this.size = size;
    }
}

const PREFIX = {
    opsize: prefix => {
        prefix.opsize = prefix.opsize === 2 ? 4 : 2;
        return prefix;
    },
    repz: prefix => {
        prefix.rep = 'repz';
        return prefix;
    }
};

const GREGS = Object.freeze({
    1: ['al', 'cl', 'dl', 'bl', 'ah', 'ch', 'dh', 'bh'],
    2: ['ax', 'cx', 'dx', 'bx', 'sp', 'bp', 'si', 'di'],
    4: ['eax', 'ecx', 'edx', 'ebx']
});

const SREGS = ['es', 'cs', 'ss', 'ds', 'fs', 'gs'];

const ARG_SIZE = Object.freeze({
    b: 1,
    w: 2,
    p: 4
});

const ARG_REGS = Object.freeze({
    AL: new Register('al', 1),
    AH: new Register('ah', 1),
    BL: new Register('bl', 1),
    BH: new Register('bh', 1),
    CL: new Register('cl', 1),
    CH: new Register('ch', 1),
    DL: new Register('dl', 1),
    DH: new Register('dh', 1),
    DS: new Register('ds', 2),
    AX: new Register('ax', 2),
    BX: new Register('bx', 2),
    CX: new Register('cx', 2),
    DX: new Register('dx', 2),
    BP: new Register('bp', 2),
    DI: new Register('di', 2),
    SI: new Register('si', 2),
    ES: new Register('es', 2)
});

class DisAsm {
    constructor(fetch, sfetch) {
        this.fetch = fetch;
        this.sfetch = sfetch;

        this.ops = [];
        instructions.opcodes.forEach(e => {
            this.ops[e.code] = e;
        });
        this.ext = instructions.ext_opcodes;
        this.esc = instructions.esc_opcodes;

    }

    get() {
        const prefix = {
            opsize: 2
        };
        for (;;) {
            const code = this.fetch();
            const opcode = Object.assign({}, this.ops[code]);
            if (!opcode) {
                throw `Opcode 0x${byte.toString(16)} is not supported`;
            }

            if (opcode.name in PREFIX) {
                PREFIX[opcode.name](prefix);
                continue;
            }

            let modrm = null;

            if (this.ext[opcode.name]) {
                modrm = this.fetch();
                const index = (modrm >> 3) & 7;
                const ext = this.ext[opcode.name][index];
                opcode.name = ext.name;
                if (ext.args.length > 0) {
                    opcode.args = ext.args;
                }
            }
            if (this.esc[opcode.name]) {
                modrm = this.fetch();
                const esc = this.esc[opcode.name][modrm];
                if (!esc) {
                    throw `Escape command 0x${code.toString(16)} is not supported.`
                }
                opcode.name = esc.name;
                if (esc.args.length > 0) {
                    opcode.args = esc.args;
                }
            }


            const args = opcode.args.map(arg => {

                if (arg in ARG_REGS) {
                    return ARG_REGS[arg];
                }

                const type = arg[0];
                const size = arg.substr(1) in ARG_SIZE ? ARG_SIZE[arg.substr(1)] : prefix.opsize;

                switch (type) {

                    case 'E':
                    case 'M':
                        {
                            modrm = modrm ? modrm : this.fetch();
                            const mod = modrm >> 6;
                            const rm = modrm & 7;

                            let value = new Value(0, size);

                            switch (mod) {
                                case 0:
                                    if (rm === 6) {
                                        return new Value(this.fetch(2), 2);
                                    }
                                    break;
                                case 1:
                                    value = new Value(this.sfetch(), 1);
                                    break;
                                case 2:
                                    value = new Value(this.sfetch(2), 2);
                                    break;
                                case 3:
                                    return new Register(GREGS[size][rm], size);
                                default:
                                    throw `Mod ${mod} is not supported`;
                            }

                            switch (rm) {
                                case 0:
                                    return [
                                        ARG_REGS.BX,
                                        ARG_REGS.SI,
                                        value
                                    ]
                                case 1:
                                    return [
                                        ARG_REGS.BX,
                                        ARG_REGS.DI,
                                        value
                                    ]
                                case 2:
                                    return [
                                        ARG_REGS.BP,
                                        ARG_REGS.SI,
                                        value
                                    ]
                                case 3:
                                    return [
                                        ARG_REGS.BP,
                                        ARG_REGS.DI,
                                        value
                                    ]
                                case 4:
                                    return [
                                        ARG_REGS.SI,
                                        value
                                    ]
                                case 5:
                                    return [
                                        ARG_REGS.DI,
                                        value
                                    ]
                                case 6:
                                    return [
                                        ARG_REGS.BP,
                                        value
                                    ]
                                case 7:
                                    return [
                                        ARG_REGS.BX,
                                        value
                                    ]
                            }
                        }

                    case 'G':
                        {
                            modrm = modrm ? modrm : this.fetch();
                            const reg = (modrm >>> 3) & 7;
                            return new Register(GREGS[size][reg], size);
                        }

                    case 'S':
                        {
                            modrm = modrm ? modrm : this.fetch();
                            const reg = (modrm >>> 3) & 7;
                            return new Register(SREGS[reg], size);
                        }

                    case 'A':
                        {
                            const offset = this.fetch(2);
                            const segment = this.fetch(2);
                            return new Address(segment, offset);
                        }

                    case 'e':
                        {
                            switch (prefix.opsize) {
                                case 2:
                                    return new Register(arg.substr(1).toLowerCase(), prefix.opsize);
                                case 4:
                                    return new Register(arg.toLowerCase(), prefix.opsize);
                            }
                        }

                    case 'I':
                        {
                            return new Value(this.fetch(size), size);
                        }

                    case 'J':
                        {
                            return new Value(this.sfetch(size), size);
                        }

                    case 'O':
                        {
                            return new Value(this.fetch(2), 2);
                        }

                }

                throw `Argument type ${arg} is not supported`;

            });

            return {
                prefix,
                opcode,
                args
            }
        }
    }


}

module.exports = DisAsm;