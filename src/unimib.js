const puppeteer = require('puppeteer');

process.on('message', (messaggio) => {
    //console.log(messaggio);
    scrapeUnimib(messaggio);
});

async function scrapeUnimib(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setRequestInterception(true);

    //if the page makes a  request to a resource type of image or stylesheet then abort that            request
    page.on('request', request => {
        if (request.resourceType() === 'image' || request.resourceType() === 'stylesheet' || request.resourceType() == 'font' || request.resourceType() == 'media')
            request.abort();
        else
            request.continue();
    });

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

    page.close();
    browser.close();
    process.send(arrayCorsi);
    process.exit();
    //return (arrayCorsi);
}