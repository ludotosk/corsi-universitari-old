const fs = require('fs')
const corsi = fs.readFileSync(require.resolve(`./db.json`), 'utf8');
const input = fs.readFileSync(require.resolve(`./inputApi.js`), 'utf8');

//console.log(JSON.stringify(corsi))
//console.log(input)

var res = input.replace(`const fs = require('fs');`, ``);
var res = res.replace(`let rawdata = fs.readFileSync(require.resolve('./db.json'));`, ``);
var res = res.replace(`let corsi = JSON.parse(rawdata);`, `var corsi = ` + corsi);

fs.writeFile('api.js', res, function (err) {
    if (err) return console.log(err);
    console.log('api.js creato');
});