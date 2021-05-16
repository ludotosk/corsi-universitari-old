exports.handler = async function (event, context) {
    const fs = require('fs');

    console.log(event.path)
    console.log(event.queryStringParameters)
    var query = event.queryStringParameters
    var tipo = event.path

    let rawdata = fs.readFileSync(require.resolve(`./assets/db.json`));
    let corsi = JSON.parse(rawdata);

    var res = [];

    //bisogna impostare la redirects per questo
    if (tipo == `/api/corsi`) {
        res = corsi.corsi;

        if (query.t != undefined) {
            res = res.filter(function (el) {
                return el.t == query.t;
            })
        }

        if (query.n != undefined) {
            res = res.filter(function (el) {
                return el.n == query.n;
            })
        }

        if (query.u != undefined) {
            res = res.filter(function (el) {
                return el.u == query.u;
            })
        }

        if (query.a != undefined) {
            res = res.filter(function (el) {
                return el.a == query.a;
            })
        }

        if (query.c != undefined) {
            res = res.filter(function (el) {
                return el.c == query.c;
            })
        }

        if (query.e != undefined) {
            res = res.filter(function (el) {
                return el.e == query.e;
            })
        }

        if (query.s != undefined) {
            res = res.filter(function (el) {
                return el.s == query.s;
            })
        }

    }

    if (tipo == `/api/master`) {
        res = corsi.master;

        if (query.uni != undefined) {
            res = res.filter(function (el) {
                return el.uni == query.uni;
            })
        }

        if (query.corso != undefined) {
            res = res.filter(function (el) {
                return el.corso == query.corso;
            })
        }

        if (query.citta != undefined) {
            res = res.filter(function (el) {
                return el.citta == query.citta;
            })
        }

        if (query.lingua != undefined) {
            res = res.filter(function (el) {
                return el.lingua == query.lingua;
            })
        }

        if (query.tipo != undefined) {
            res = res.filter(function (el) {
                return el.tipo == query.tipo;
            })
        }

    }

    return {
        statusCode: 200,
        body: JSON.stringify(res)
    }
}