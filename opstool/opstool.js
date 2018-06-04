const os = require('os');
const fs = require('fs');

console.log(
    'module.exports.opcodes = [' +
    fs.readFileSync(__dirname+ '/8086_table.txt').toString()
        .split(os.EOL)
        .filter(Boolean)
        .map(e => {
            const arr = e.split('\t').filter(Boolean);
            return {
                code: parseInt(arr.shift(), 16),
                name: arr.shift().toLowerCase(),
                args: arr
            };
        })
        .filter(e => e.name !== '--')
        .map(JSON.stringify) +
    '];'
);

console.log(
    'module.exports.ext_opcodes = ' +
    JSON.stringify(
    fs.readFileSync(__dirname+'/grp_table.txt').toString()
        .split(os.EOL)
        .filter(Boolean)
        .map(e => {
            const arr = e.split('\t').filter(Boolean);
            const [n, i] = arr.shift().split('/');
            return {
                n: n.toLowerCase(),
                i: parseInt(i,16),
                name: arr.shift().toLowerCase(),
                args: arr
            }
        })
        .filter(e => e.name !== '--')
        .reduce((a,e) => {
            const n = e.n;
            const i = e.i;
            if (!a[n]) {
                a[n] = [];
            }
            delete e.n;
            delete e.i;
            a[n][i]=e;
            return a;
        }, {})) +
    ';'
);

console.log(
    'module.exports.esc_opcodes = ' +
    JSON.stringify(
    fs.readFileSync(__dirname + '/escape_table.txt').toString()
        .split(os.EOL)
        .filter(Boolean)
        .map(e => {
            const arr = e.split('\t').filter(Boolean);
            const [n, i] = arr.shift().split('/');
            return {
                n: n.toLowerCase(),
                i: parseInt(i,16),
                name: arr.shift().toLowerCase(),
                args: arr
            }
        })
        .filter(e => e.name !== '--')
        .reduce((a,e) => {
            const n = e.n;
            const i = e.i;
            if (!a[n]) {
                a[n] = [];
            }
            delete e.n;
            delete e.i;
            a[n][i]=e;
            return a;
        }, {})) +
    ';'
);