const puppeteer = require('puppeteer');
const fs = require('fs');

async function scrapeUnimi(url, browser) {
    const page = await browser.newPage();

    await page.goto(url);

    var hrefTxt = '';
    var nomeCorso = '';
    var tipoLaurea = '';

    var next = [];
    var arrayCorsi = [];

    var i = 1;

    var uni = 'unimi';

    do {
        const [el] = await page.$x('/html/body/div/div/div/section/div/div[2]/div/div[2]/div/div/div/div/div[2]/div[' + i + ']/div/div/div/div/div/div[2]/div[3]/a');
        if (el != undefined) {
            const titolo = await el.getProperty('textContent');
            const link = await el.getProperty('href');
            nomeCorso = await titolo.jsonValue();
            hrefTxt = await link.jsonValue();
        } else {
            const [el2] = await page.$x('/html/body/div/div/div/section/div/div[2]/div/div[2]/div/div/div/div/div[2]/div[' + i + ']/div/div/div/div/div/div/div/div[2]/div[3]/a');
            const titolo = await el2.getProperty('textContent');
            const link = await el2.getProperty('href');
            nomeCorso = await titolo.jsonValue();
            hrefTxt = await link.jsonValue();
        }


        const [el1] = await page.$x('/html/body/div/div/div/section/div/div[2]/div/div[2]/div/div/div/div/div[2]/div[' + i + ']/div/div/div/div/div/div[2]/div[5]/div');
        if (el1 != undefined) {
            const tipoCorso = await el1.getProperty('textContent');
            tipoLaurea = await tipoCorso.jsonValue();
        } else {
            const [el3] = await page.$x('/html/body/div/div/div/section/div/div[2]/div/div[2]/div/div/div/div/div[2]/div[' + i + ']/div/div/div/div/div/div/div/div[2]/div[5]/div');
            const tipoCorso = await el3.getProperty('textContent');
            tipoLaurea = await tipoCorso.jsonValue();
        }

        tipoLaurea = tipoLaurea.trim()
        arrayCorsi.push({ nomeCorso, hrefTxt, tipoLaurea, uni });

        i += 1;
        [next] = await page.$x('/html/body/div/div/div/section/div/div[2]/div/div[2]/div/div/div/div/div[2]/div[' + i + ']');
    } while (next != undefined);

    return (arrayCorsi);
}

async function scrapeUnimib(url, browser) {
    const page = await browser.newPage();

    await page.goto(url);

    var uni = 'unimib';

    var next = [];
    var arrayCorsi = [];

    var i = 1;
    var j = 1;

    do {
        do {
            const [el] = await page.$x('/html/body/div[6]/div[3]/section/div/section/div/div/div[2]/div[4]/div/div/fieldset[1]/div/div/div/div/div/div/div[' + j + ']/div[2]/h3[' + i + ']/a/div');
            const titolo = await el.getProperty('textContent');
            var nomeCorso = await titolo.jsonValue();

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
            var tipoLaurea = await tipoCorso.jsonValue();

            nomeCorso = nomeCorso.trim();
            if (tipoLaurea == 'Laurea triennale (DM 270)') {
                tipoLaurea = 'Laurea triennale';
            } else {
                if (tipoLaurea == 'Corso di Laurea Magistrale') {
                    tipoLaurea = 'Laurea magistrale';
                } else {
                    if (tipoLaurea == 'Laurea Magistrale Ciclo Unico 5 anni' || tipoLaurea == 'Laurea Magistrale Ciclo Unico 6 anni') {
                        tipoLaurea = 'Laurea magistrale a ciclo unico';
                    }
                }
            }
            arrayCorsi.push({ nomeCorso, hrefTxt, tipoLaurea, uni });

            i += 1;
            [next] = await page.$x('/html/body/div[6]/div[3]/section/div/section/div/div/div[2]/div[4]/div/div/fieldset[1]/div/div/div/div/div/div/div[' + j + ']/div[2]/h3[' + i + ']/a/div');
        } while (next != undefined);
        j += 1;
        i = 1;
        [next] = await page.$x('/html/body/div[6]/div[3]/section/div/section/div/div/div[2]/div[4]/div/div/fieldset[1]/div/div/div/div/div/div/div[' + j + ']/div[2]/h3[1]/a/div');
    } while (next != undefined)

    return (arrayCorsi);
}

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

async function scrapeUnibgCorso(url, browser, arrayCorsi){
    const page = await browser.newPage();

    await page.goto(url);

    const [el] = await page.$x('/html/body/div[2]/div/div/section/h1');
    const titolo = await el.getProperty('textContent');
    const nomeCorso = await titolo.jsonValue();
    console.log(nomeCorso);

    const [el1] = await page.$x('/html/body/div[2]/div/div/section/div/div[1]/div/section/div/div[3]/div[2]/div[2]/div');
    const laurea = await el1.getProperty('textContent');
    const tipoLaurea = await laurea.jsonValue();

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
    const browser = await puppeteer.launch();

    //const corsiUnimiTriennale = await scrapeUnimi('https://www.unimi.it/it/corsi/corsi-di-laurea-triennali-e-magistrali-ciclo-unico', browser);
    //const corsiUnimiMagistrale = await scrapeUnimi('https://www.unimi.it/it/corsi/corsi-di-laurea-magistrale', browser);
    //const corsiUnimib = await scrapeUnimib('https://www.unimib.it/didattica/corsi-studio-iscrizioni', browser);
    //const corsiPolimiTriennale = await scrapePolimi('https://www.polimi.it/corsi/corsi-di-laurea/', browser, 'Laurea triennale');
    //const corsiPolimiMagistrale = await scrapePolimi('https://www.polimi.it/corsi/corsi-di-laurea-magistrale/', browser, 'Laurea magistrale');
    //const corsiBocconi = await scrapeBocconi('https://www.unibocconi.it/wps/wcm/connect/bocconi/sitopubblico_it/albero+di+navigazione/home/corsi+di+studio/', browser);
    const corsiUnibgTriennale = await scrapeUnibg('https://www.unibg.it/studia-noi/corsi/lauree-triennali-e-ciclo-unico', browser);
    const corsiUnibgMagistrale = await scrapeUnibg('https://www.unibg.it/studia-noi/corsi/lauree-magistrali', browser);

    var corsi = [];
    //Array.prototype.push.apply(corsi,corsiUnimiTriennale);
    //Array.prototype.push.apply(corsi,corsiUnimiMagistrale);
    //Array.prototype.push.apply(corsi,corsiUnimib);
    //Array.prototype.push.apply(corsi,corsiPolimiTriennale);
    //Array.prototype.push.apply(corsi,corsiPolimiMagistrale);
    //Array.prototype.push.apply(corsi,corsiBocconi);
    Array.prototype.push.apply(corsi, corsiUnibgTriennale);
    Array.prototype.push.apply(corsi, corsiUnibgMagistrale);

    fs.writeFile('../public/corsi.json', JSON.stringify(corsi), function (err) {
        if (err) return console.log(err);
        console.log('corsi > corsi.json');
    });

    browser.close();
}

launchScrape();