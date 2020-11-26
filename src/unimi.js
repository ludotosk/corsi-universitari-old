const puppeteer = require('puppeteer');

process.on('message', (messaggio) => {
    //console.log(messaggio);
    scrapeUnimi(messaggio);
});

async function scrapeUnimi(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setRequestInterception(true);

    //if the page makes a  request to a resource type of image or stylesheet then abort that            request
    page.on('request', request => {
        if (request.resourceType() === 'image' || request.resourceType() === 'stylesheet' || request.resourceType() == 'script' || request.resourceType() == 'font' || request.resourceType() == 'media')
            request.abort();
        else
            request.continue();
    });

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

    browser.close();
    process.send(arrayCorsi);
    process.exit();
    //return (arrayCorsi);
}