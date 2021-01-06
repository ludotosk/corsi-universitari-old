const fs = require('fs');
const _ = require('underscore');

var corsi = fs.readFileSync('./corsi.json', 'utf-8');

var uni = [];

corsi = JSON.parse(corsi);

for (let x = 0; x < corsi.length; x++) {
    let y = corsi[x].u
    uni.push({ y })
}

var uniqueList = _.uniq(uni, 'y');

console.log(_.uniq(uni, 'y'));

fs.writeFile('./universita.json', JSON.stringify(uniqueList), function (err) {
    if (err) return console.log(err);
    console.log('uni > universita.json');
    process.exit();
});