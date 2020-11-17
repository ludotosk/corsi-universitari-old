const puppeteer = require('puppeteer');
const fs = require('fs');

async function scrapeUnimi(url, browser) {
    const page = await browser.newPage();

    await page.goto(url);

    var listaCorsi = hrefTxt = titoloTxt = corsoTxt = '';

    var next = [];

    var i = 1;


    do {
        const [el] = await page.$x('/html/body/div/div/div/section/div/div[2]/div/div[2]/div/div/div/div/div[2]/div[' + i + ']/div/div/div/div/div/div[2]/div[3]/a');
        if (el != undefined) {
            const titolo = await el.getProperty('textContent');
            const link = await el.getProperty('href');
            titoloTxt = await titolo.jsonValue();
            hrefTxt = await link.jsonValue();
        } else {
            const [el2] = await page.$x('/html/body/div/div/div/section/div/div[2]/div/div[2]/div/div/div/div/div[2]/div[' + i + ']/div/div/div/div/div/div/div/div[2]/div[3]/a');
            const titolo = await el2.getProperty('textContent');
            const link = await el2.getProperty('href');
            titoloTxt = await titolo.jsonValue();
            hrefTxt = await link.jsonValue();
        }


        const [el1] = await page.$x('/html/body/div/div/div/section/div/div[2]/div/div[2]/div/div/div/div/div[2]/div[' + i + ']/div/div/div/div/div/div[2]/div[5]/div');
        if (el1 != undefined) {
            const tipoCorso = await el1.getProperty('textContent');
            corsoTxt = await tipoCorso.jsonValue();
        } else {
            const [el3] = await page.$x('/html/body/div/div/div/section/div/div[2]/div/div[2]/div/div/div/div/div[2]/div[' + i + ']/div/div/div/div/div/div/div/div[2]/div[5]/div');
            const tipoCorso = await el3.getProperty('textContent');
            corsoTxt = await tipoCorso.jsonValue();
        }


        listaCorsi = listaCorsi + '\'' + titoloTxt + '\',\'' + hrefTxt + '\',\'' + corsoTxt.trim() + '\',\'unimi\'\n';

        i += 1;
        [next] = await page.$x('/html/body/div/div/div/section/div/div[2]/div/div[2]/div/div/div/div/div[2]/div[' + i + ']');
    } while (next != undefined);

    return (listaCorsi);
}

async function scrapeUnimib(url, browser) {
    const page = await browser.newPage();

    await page.goto(url);

    var listaCorsi = '';

    var next = [];

    var i = j = 1;

    do {
        do {
            const [el] = await page.$x('/html/body/div[6]/div[3]/section/div/section/div/div/div[2]/div[4]/div/div/fieldset[1]/div/div/div/div/div/div/div[' + j + ']/div[2]/h3[' + i + ']/a/div');
            const titolo = await el.getProperty('textContent');
            const titoloTxt = await titolo.jsonValue();

            const [el1] = await page.$x('/html/body/div[6]/div[3]/section/div/section/div/div/div[2]/div[4]/div/div/fieldset[1]/div/div/div/div/div/div/div[' + j + ']/div[2]/div[' + i + ']/div/div[4]/a');
            var hrefTxt = '';
            if (el1 != undefined) {
                const link = await el1.getProperty('href');
                hrefTxt = await link.jsonValue();
            } else {
                const [el2] = await page.$x('/html/body/div[6]/div[3]/section/div/section/div/div/div[2]/div[4]/div/div/fieldset[1]/div/div/div/div/div/div/div[' + j + ']/div[2]/div[' + i + ']/div/div[3]/a');
                const link = await el2.getProperty('href');
                hrefTxt = await link.jsonValue();
            }

            const [el3] = await page.$x('/html/body/div[6]/div[3]/section/div/section/div/div/div[2]/div[4]/div/div/fieldset[1]/div/div/div/div/div/div/div[' + j + ']/div[2]/div[' + i + ']/div/div[2]/span');
            const tipoCorso = await el3.getProperty('textContent');
            const corsoTxt = await tipoCorso.jsonValue();

            listaCorsi = listaCorsi + '\'' + titoloTxt.trim() + '\',\'' + hrefTxt + '\',\'' + corsoTxt + '\',\'unimib\'\n';

            i += 1;
            [next] = await page.$x('/html/body/div[6]/div[3]/section/div/section/div/div/div[2]/div[4]/div/div/fieldset[1]/div/div/div/div/div/div/div[' + j + ']/div[2]/h3[' + i + ']/a/div');
        } while (next != undefined);
        j += 1;
        i = 1;
        [next] = await page.$x('/html/body/div[6]/div[3]/section/div/section/div/div/div[2]/div[4]/div/div/fieldset[1]/div/div/div/div/div/div/div[' + j + ']/div[2]/h3[1]/a/div');
    } while (next != undefined)

    return (listaCorsi);
}

async function scrapePolimi(url, browser, tipoLaurea) {
    const page = await browser.newPage();

    await page.goto(url);

    var listaCorsi = '';

    var next = [];

    var i = 1;

    do {
        const [el] = await page.$x('/html/body/div/div/div/div[3]/div/div/ul[2]/li[' + i + ']/a');
        const titolo = await el.getProperty('textContent');
        const link = await el.getProperty('href');
        const titoloTxt = await titolo.jsonValue();
        const hrefTxt = await link.jsonValue();

        listaCorsi = listaCorsi + '\'' + titoloTxt + '\',\'' + hrefTxt + '\',\'' + tipoLaurea + '\',\'polimi\'\n';

        i += 1;
        [next] = await page.$x('/html/body/div/div/div/div[3]/div/div/ul[2]/li[' + i + ']/a');
    } while (next != undefined);

    return (listaCorsi);
}



async function launchScrape() {
    const browser = await puppeteer.launch();

    const corsiUnimiTriennale = await scrapeUnimi('https://www.unimi.it/it/corsi/corsi-di-laurea-triennali-e-magistrali-ciclo-unico', browser);
    const corsiUnimiMagistrale = await scrapeUnimi('https://www.unimi.it/it/corsi/corsi-di-laurea-magistrale', browser);
    const corsiUnimib = await scrapeUnimib('https://www.unimib.it/didattica/corsi-studio-iscrizioni', browser);
    const corsiPolimiTriennale = await scrapePolimi('https://www.polimi.it/corsi/corsi-di-laurea/', browser, 'Laurea triennale');
    const corsiPolimiMagistrale = await scrapePolimi('https://www.polimi.it/corsi/corsi-di-laurea-magistrale/', browser, 'Laurea magistrale');

    const corsi = corsiUnimiTriennale + corsiUnimiMagistrale + corsiUnimib + corsiPolimiTriennale + corsiPolimiMagistrale;

    fs.writeFile('corsi.csv', corsi, function (err) {
        if (err) return console.log(err);
        console.log('corsi > corsi.csv');
    });

    browser.close();
}

launchScrape();