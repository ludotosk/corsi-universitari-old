const puppeteer = require('puppeteer');
const fs = require('fs');
const { fork } = require('child_process');

async function scrapePolimi(url, browser, tipoLaurea) {
    const page = await browser.newPage();

    await page.goto(url);

    const uni = 'polimi';

    var arrayCorsi = [];

    var next = [];

    var i = 1;

    do {
        const [el] = await page.$x('/html/body/div/div/div/div[3]/div/div/ul[2]/li[' + i + ']/a');
        const titolo = await el.getProperty('textContent');
        const link = await el.getProperty('href');
        const nomeCorso = await titolo.jsonValue();
        const hrefTxt = await link.jsonValue();

        arrayCorsi.push({ nomeCorso, hrefTxt, tipoLaurea, uni });

        i += 1;
        [next] = await page.$x('/html/body/div/div/div/div[3]/div/div/ul[2]/li[' + i + ']/a');
    } while (next != undefined);

    return (arrayCorsi);
}

async function scrapeBocconi(url, browser) {
    const page = await browser.newPage();

    await page.goto(url);

    const uni = 'bocconi';

    var arrayCorsi = [];

    var next = [];

    var i = 1;
    var j = 1;

    do {
        do {
            const [el] = await page.$x('/html/body/div[3]/div[2]/article/div[1]/div[1]/div/ul/li[' + j + ']/ul/li[' + i + ']/a');
            const titolo = await el.getProperty('textContent');
            const link = await el.getProperty('href');
            const nomeCorso = await titolo.jsonValue();
            const hrefTxt = await link.jsonValue();

            tipoLaurea = 'Laurea triennale';
            arrayCorsi.push({ nomeCorso, hrefTxt, tipoLaurea, uni });

            i += 1;
            [next] = await page.$x('/html/body/div[3]/div[2]/article/div[1]/div[1]/div/ul/li[' + j + ']/ul/li[' + i + ']/a');
        } while (next != undefined);
        j += 1;
        i = 1;
        [next] = await page.$x('/html/body/div[3]/div[2]/article/div[1]/div[1]/div/ul/li[' + j + ']/ul');
    } while (next != undefined)

    i = 1;

    do {
        const [el] = await page.$x('/html/body/div[3]/div[2]/article/div[1]/div[2]/div/ul/li[' + i + ']/a');
        const titolo = await el.getProperty('textContent');
        const link = await el.getProperty('href');
        const nomeCorso = await titolo.jsonValue();
        const hrefTxt = await link.jsonValue();

        tipoLaurea = 'Laurea magistrale';
        arrayCorsi.push({ nomeCorso, hrefTxt, tipoLaurea, uni });

        i += 1;
        [next] = await page.$x('/html/body/div[3]/div[2]/article/div[1]/div[2]/div/ul/li[' + i + ']/a');
    } while (next != undefined);

    const [el1] = await page.$x('/html/body/div[3]/div[2]/article/div[1]/div[3]/div/p[1]/a');
    const titolo = await el1.getProperty('textContent');
    const link = await el1.getProperty('href');
    const nomeCorso = await titolo.jsonValue();
    const hrefTxt = await link.jsonValue();

    arrayCorsi.push({ nomeCorso, hrefTxt, tipoLaurea, uni });

    return (arrayCorsi);
}

async function scrapeUnibgCorso(url, browser, arrayCorsi) {
    const page = await browser.newPage();

    await page.goto(url);

    const [el] = await page.$x('/html/body/div[2]/div/div/section/h1');
    const titolo = await el.getProperty('textContent');
    const nomeCorso = await titolo.jsonValue();
    //console.log(nomeCorso);

    const [el1] = await page.$x('/html/body/div[2]/div/div/section/div/div[1]/div/section/div/div[3]/div[2]/div[2]/div');
    const laurea = await el1.getProperty('textContent');
    var tipoLaurea = await laurea.jsonValue();

    if (tipoLaurea == 'Laurea Magistrale Ciclo Unico 5 anni') {
        tipoLaurea = 'Laurea magistrale a ciclo unico';
    }

    const uni = 'unibg';
    const hrefTxt = uni;

    arrayCorsi.push({ nomeCorso, hrefTxt, tipoLaurea, uni });

}

async function scrapeUnibg(url, browser) {
    const page = await browser.newPage();

    await page.goto(url);

    var arrayCorsi = [];

    const list = await page.evaluateHandle(() => {
        return Array.from(document.getElementById('contenitore-principale').getElementsByTagName('a')).map(a => a.href);
    });
    var lista = await list.jsonValue();

    for (var i = 0, max = lista.length; i < max; i++) {
        if (lista[i].length == 37) {
            //console.log(lista[i]);
            await scrapeUnibgCorso(lista[i], browser, arrayCorsi);
        }
    }

    return (arrayCorsi);
}

async function launchScrape() {
    const inizio = Date.now();
    var i = 0;

    const childUnimiTriennale = fork('./unimi.js');
    childUnimiTriennale.send('https://www.unimi.it/it/corsi/corsi-di-laurea-triennali-e-magistrali-ciclo-unico');
    const childUnimiMagistrale = fork('./unimi.js');
    childUnimiMagistrale.send('https://www.unimi.it/it/corsi/corsi-di-laurea-magistrale');

    //childUnimiTriennale.send(browser);
    //const corsiUnimiTriennale = await scrapeUnimi('https://www.unimi.it/it/corsi/corsi-di-laurea-triennali-e-magistrali-ciclo-unico', browser);
    //console.log('unimi triennale ok');
    //const corsiUnimiMagistrale = await scrapeUnimi('https://www.unimi.it/it/corsi/corsi-di-laurea-magistrale', browser);
    //console.log('unimi magistrale ok');
    //const corsiUnimib = await scrapeUnimib('https://www.unimib.it/didattica/corsi-studio-iscrizioni', browser);
    //console.log('unimib ok');
    //const corsiPolimiTriennale = await scrapePolimi('https://www.polimi.it/corsi/corsi-di-laurea/', browser, 'Laurea triennale');
    //console.log('polimi triennale ok');
    //const corsiPolimiMagistrale = await scrapePolimi('https://www.polimi.it/corsi/corsi-di-laurea-magistrale/', browser, 'Laurea magistrale');
    //console.log('polimi magistrale ok');
    //const corsiBocconi = await scrapeBocconi('https://www.unibocconi.it/wps/wcm/connect/bocconi/sitopubblico_it/albero+di+navigazione/home/corsi+di+studio/', browser);
    //console.log('bocconi ok');
    //const corsiUnibgTriennale = await scrapeUnibg('https://www.unibg.it/studia-noi/corsi/lauree-triennali-e-ciclo-unico', browser);
    //console.log('unibg triennale ok');
    //const corsiUnibgMagistrale = await scrapeUnibg('https://www.unibg.it/studia-noi/corsi/lauree-magistrali', browser);
    //console.log('unibg magistrale ok');

    var corsi = [];
    childUnimiTriennale.on('message', (messaggio) => {
        Array.prototype.push.apply(corsi, messaggio);
    })
    childUnimiMagistrale.on('message', (messaggio) => {
        Array.prototype.push.apply(corsi, messaggio);
    })
    childUnimiTriennale.on('exit', (esco) => {
        i++;
    });
    childUnimiMagistrale.on('exit', (esco) => {
        i++;
    });
    //Array.prototype.push.apply(corsi, corsiUnimiTriennale);
    //Array.prototype.push.apply(corsi, corsiUnimiMagistrale);
    //Array.prototype.push.apply(corsi, corsiUnimib);
    //Array.prototype.push.apply(corsi, corsiPolimiTriennale);
    //Array.prototype.push.apply(corsi, corsiPolimiMagistrale);
    //Array.prototype.push.apply(corsi, corsiBocconi);
    //Array.prototype.push.apply(corsi, corsiUnibgTriennale);
    //Array.prototype.push.apply(corsi, corsiUnibgMagistrale);
    setInterval((scrivi) => {
        if (i > 1) {
            fs.writeFile('../public/corsi.json', JSON.stringify(corsi), function (err) {
                if (err) return console.log(err);
                console.log('corsi > corsi.json');
                const fine = (Date.now() - inizio) / 1000;
                console.log('tempo in secondi', fine);
                process.exit();
            });
        }
    }, 1000);
}

launchScrape();