const puppeteer = require('puppeteer');
const fs = require('fs');

var corsi = [];

//creare singoli json per aree accademiche
//creare json unico per ricerca generica
//modificare il select id del area accademica clickare cerca prendere i dati

async function ScrapeArea(page) {
    const records = await page.$x('/html/body/div[3]/div/div[2]/div[2]/div[2]/div/table/tbody/tr');
    var uni = '';
    var i;
    var linkUniTxt = '';
    for (i = 1; i < records.length + 1; i++) {
        var [el] = await page.$x('/html/body/div[3]/div/div[2]/div[2]/div[2]/div/table/tbody/tr[' + i + ']/td[2]/strong');
        if (el == undefined) {
            [el] = await page.$x('/html/body/div[3]/div/div[2]/div[2]/div[2]/div/table/tbody/tr[' + i + ']/th/h3');
            //console.log('uni');
            const universita = await el.getProperty('textContent');
            uni = await universita.jsonValue();
            uni = uni.replace("     ( Pagina ateneo )", "");

            [el] = await page.$x('/html/body/div[3]/div/div[2]/div[2]/div[2]/div/table/tbody/tr[' + i + ']/th/a[2]');
            const linkUni = await el.getProperty('href');
            linkUniTxt = await linkUni.jsonValue();
        } else {
            //console.log('corso');
            //console.log(i);
            const titolo = await el.getProperty('textContent');
            var nomeCorso = await titolo.jsonValue();
            nomeCorso = nomeCorso.trim();

            [el] = await page.$x('/html/body/div[3]/div/div[2]/div[2]/div[2]/div/table/tbody/tr[' + i + ']/td[2]/a[3]');
            if (el == undefined) {
                let hrefTxt = linkUniTxt;
            } else {
                const link = await el.getProperty('href');
                let hrefTxt = await link.jsonValue();

            }

            [el] = await page.$x('/html/body/div[3]/div/div[2]/div[2]/div[2]/div/table/tbody/tr[' + i + ']/td[3]/span');
            const classe = await el.getProperty('textContent');
            const classeTxt = await classe.jsonValue();
            if (classeTxt.slice(0, 2) == 'L-') {
                let tipoLaurea = 'Laurea Triennale';
            } else {
                let tipoLaurea = 'Laurea Magistrale';
            }

            if (nomeCorso != '') {
                corsi.push({ nomeCorso, hrefTxt, tipoLaurea, uni });
            }
        }
    }
    await page.evaluate(() => {
        var tabella = document.querySelector('#risultati > div.skin > div > table');
        tabella.remove();
    });
}

async function laucnhScrape() {
    const inizio = Date.now();

    console.log('Start');

    const browser = await puppeteer.launch({ headless: true, });
    const page = await browser.newPage();

    console.log('Browser aperto');

    await page.setRequestInterception(true);

    //if the page makes a  request to a resource type of image or stylesheet then abort that request
    page.on('request', request => {
        if (request.resourceType() === 'image' || request.resourceType() === 'stylesheet' || request.resourceType() == 'font' || request.resourceType() == 'media')
            request.abort();
        else
            request.continue();
    });

    await page.goto('https://www.universitaly.it/index.php/cercacorsi/universita');

    console.log('Pagina aperta');

    //primo valore
    await page.evaluate(() => {
        document.querySelector('#areacun').value = '01';
    });

    await page.click('#avvia_ricerca');
    await page.waitForSelector('#risultati > div.skin > div > table > tbody > tr:nth-child(1)');

    console.log('inizio prima lista')
    await ScrapeArea(page);
    console.log('fine prima lista');

    //secondo valore
    await page.evaluate(() => {
        document.querySelector('#areacun').value = '02';
    });

    await page.click('#avvia_ricerca');
    await page.waitForSelector('#risultati > div.skin > div > table > tbody > tr:nth-child(1)');

    console.log('inzio seconda lista')
    await ScrapeArea(page);
    console.log('fine seconda lista');

    //terzo valore
    await page.evaluate(() => {
        document.querySelector('#areacun').value = '03';
    });

    await page.click('#avvia_ricerca');
    await page.waitForSelector('#risultati > div.skin > div > table > tbody > tr:nth-child(1)');

    console.log('inizio terza lista')
    await ScrapeArea(page);
    console.log('fine terza lista');

    //quarto valore
    await page.evaluate(() => {
        document.querySelector('#areacun').value = '04';
    });

    await page.click('#avvia_ricerca');
    await page.waitForSelector('#risultati > div.skin > div > table > tbody > tr:nth-child(1)');

    console.log('inzio quarta lista')
    await ScrapeArea(page);
    console.log('fine quarta lista');

    //quinto valore
    await page.evaluate(() => {
        document.querySelector('#areacun').value = '05';
    });

    await page.click('#avvia_ricerca');
    await page.waitForSelector('#risultati > div.skin > div > table > tbody > tr:nth-child(1)');

    console.log('inizio quinta lista')
    await ScrapeArea(page);
    console.log('fine quinta lista');

    //sesto valore
    await page.evaluate(() => {
        document.querySelector('#areacun').value = '06';
    });

    await page.click('#avvia_ricerca');
    await page.waitForSelector('#risultati > div.skin > div > table > tbody > tr:nth-child(1)');

    console.log('inzio sesta lista')
    await ScrapeArea(page);
    console.log('fine sesta lista');

    //settimo valore
    await page.evaluate(() => {
        document.querySelector('#areacun').value = '07';
    });

    await page.click('#avvia_ricerca');
    await page.waitForSelector('#risultati > div.skin > div > table > tbody > tr:nth-child(1)');

    console.log('inizio settima lista')
    await ScrapeArea(page);
    console.log('fine settima lista');

    //ottavo valore
    await page.evaluate(() => {
        document.querySelector('#areacun').value = '08';
    });

    await page.click('#avvia_ricerca');
    await page.waitForSelector('#risultati > div.skin > div > table > tbody > tr:nth-child(1)');

    console.log('inzio ottava lista')
    await ScrapeArea(page);
    console.log('fine ottava lista');

    //nono valore
    await page.evaluate(() => {
        document.querySelector('#areacun').value = '09';
    });

    await page.click('#avvia_ricerca');
    await page.waitForSelector('#risultati > div.skin > div > table > tbody > tr:nth-child(1)');

    console.log('inizio nona lista')
    await ScrapeArea(page);
    console.log('fine nona lista');

    //decimo valore
    await page.evaluate(() => {
        document.querySelector('#areacun').value = '10';
    });

    await page.click('#avvia_ricerca');
    await page.waitForSelector('#risultati > div.skin > div > table > tbody > tr:nth-child(1)');

    console.log('inzio decima lista')
    await ScrapeArea(page);
    console.log('fine decima lista');

    //unidicesimo valore
    await page.evaluate(() => {
        document.querySelector('#areacun').value = '11';
    });

    await page.click('#avvia_ricerca');
    await page.waitForSelector('#risultati > div.skin > div > table > tbody > tr:nth-child(1)');

    console.log('inizio undicesima lista')
    await ScrapeArea(page);
    console.log('fine undicesima lista');

    //dodicesimo valore
    await page.evaluate(() => {
        document.querySelector('#areacun').value = '12';
    });

    await page.click('#avvia_ricerca');
    await page.waitForSelector('#risultati > div.skin > div > table > tbody > tr:nth-child(1)');

    console.log('inizio dodicesima lista')
    await ScrapeArea(page);
    console.log('fine dodicesima lista');

    //tredicesimo valore
    await page.evaluate(() => {
        document.querySelector('#areacun').value = '13';
    });

    await page.click('#avvia_ricerca');
    await page.waitForSelector('#risultati > div.skin > div > table > tbody > tr:nth-child(1)');

    console.log('inizio tredicesima lista')
    await ScrapeArea(page);
    console.log('fine tredicesima lista');

    //quattordicesimo valore
    await page.evaluate(() => {
        document.querySelector('#areacun').value = '14';
    });

    await page.click('#avvia_ricerca');
    await page.waitForSelector('#risultati > div.skin > div > table > tbody > tr:nth-child(1)');

    console.log('inizio quattordicesima lista')
    await ScrapeArea(page);
    console.log('fine quattordicesima lista');

    page.close();
    browser.close();

    console.log('numero corsi pre pulizia');
    console.log(corsi.length);

    corsi.sort(function (a, b) {
        if (a.nomeCorso.toLowerCase() < b.nomeCorso.toLowerCase()
        ) return -1;
        if (a.nomeCorso.toLowerCase() > b.nomeCorso.toLowerCase()
        ) return 1;
        return 0;
    });

    for (var x = 0; x < corsi.length; x++) {
        for (var z = 0; z < corsi.length; z++) {
            if (x != z) {
                if (corsi[x].nomeCorso.toLowerCase() == corsi[z].nomeCorso.toLowerCase() && corsi[x].uni.toLowerCase() == corsi[z].uni.toLowerCase() && corsi[x].tipoLaurea.toLowerCase() == corsi[z].tipoLaurea.toLowerCase()) {
                    corsi.splice(z, 1);
                }
            }
        }
    }

    console.log('numero corsi post pulizia');
    console.log(corsi.length);


    fs.writeFile('../public/corsi.json', JSON.stringify(corsi), function (err) {
        if (err) return console.log(err);
        console.log('corsi > corsi.json');
        const fine = (Date.now() - inizio) / 1000;
        console.log('tempo in secondi', fine);
        process.exit();
    });
}

laucnhScrape();