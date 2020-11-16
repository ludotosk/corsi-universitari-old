const puppeteer = require('puppeteer');
const fs = require('fs');

async function scrapeUnimi(url, browser) {
    const page = await browser.newPage();

    await page.goto(url);

    var listaCorsi = '';

    var next = [];

    var i = 1;

    do {
        const [el] = await page.$x('//*[@id="parid-12472"]/div/div/div/div/div[2]/div[' + i + ']/div/div/div/div/div/div[2]/div[3]/a');
        const titolo = await el.getProperty('textContent');
        const link = await el.getProperty('href');
        const titoloTxt = await titolo.jsonValue();
        const hrefTxt = await link.jsonValue();

        const [el1] = await page.$x('//*[@id="parid-12472"]/div/div/div/div/div[2]/div[' + i + ']/div/div/div/div/div/div[2]/div[5]/div');
        const tipoCorso = await el1.getProperty('textContent');
        const corsoTxt = await tipoCorso.jsonValue();

        listaCorsi = listaCorsi + '\'' + titoloTxt + '\',\'' + hrefTxt + '\',\'' + corsoTxt.trim() + '\',\' unimi' + '\'\n';

        i += 1;
        [next] = await page.$x('//*[@id="parid-12472"]/div/div/div/div/div[2]/div[' + i + ']');
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
            console.log(j);
            
            const [el] = await page.$x('/html/body/div[6]/div[3]/section/div/section/div/div/div[2]/div[4]/div/div/fieldset[1]/div/div/div/div/div/div/div[' + j + ']/div[2]/h3[' + i + ']/a/div');
            const titolo = await el.getProperty('textContent');
            const titoloTxt = await titolo.jsonValue();
           
            /* const [el1] = await page.$x('/html/body/div[6]/div[3]/section/div/section/div/div/div[2]/div[4]/div/div/fieldset[1]/div/div/div/div/div/div/div[' + j + ']/div[2]/div[' + i + ']/div');
            const link = await el1.getElementsByTagName('a').getProperty('href');
            const hrefTxt = await link.jsonValue(); */
    
            listaCorsi = listaCorsi + '\'' + titoloTxt.trim() + /*'\',\'' + hrefTxt +*/ '\'\n';

            i += 1;
            [next] = await page.$x('/html/body/div[6]/div[3]/section/div/section/div/div/div[2]/div[4]/div/div/fieldset[1]/div/div/div/div/div/div/div[' + j + ']/div[2]/h3[' + i + ']/a/div');
        } while (next != undefined);
        j += 1;
        i = 1;
        [next] = await page.$x('/html/body/div[6]/div[3]/section/div/section/div/div/div[2]/div[4]/div/div/fieldset[1]/div/div/div/div/div/div/div[' + j + ']/div[2]/h3[1]/a/div');
    } while(next != undefined)

    return (listaCorsi);
}

async function launchScrape() {
    const browser = await puppeteer.launch();

    const corsiUnimi = await scrapeUnimi('https://www.unimi.it/it/corsi/corsi-di-laurea-triennali-e-magistrali-ciclo-unico', browser);
    const corsiUnimib = await scrapeUnimib('https://www.unimib.it/didattica/corsi-studio-iscrizioni', browser);

    const corsi = corsiUnimi + corsiUnimib;

    fs.writeFile('corsi.csv', corsi, function (err) {
        if (err) return console.log(err);
        console.log('corsi > corsi.csv');
    });

    browser.close();
}

launchScrape();