const path = require('path');
const fs = require('fs');

const list = fs.readdirSync('./src/devices');
const drivers = {};
for (let i = 0; i < list.length; i++) {
    let name = path.basename(list[i], path.extname(list[i]));
    drivers[name] = require('./src/devices/' + list[i]).bind(this);
}

module.exports = {
    vm: require('./src/vm'),
    drivers
}