const puppeteer = require('puppeteer');
const tipoLaurea = process.argv[2];

process.on('message', (messaggio) => {
    //console.log(messaggio);
    scrapePolimi(messaggio);
});

async function scrapePolimi(url) {
    const browser = await puppeteer.launch();
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

    browser.close();
    process.send(arrayCorsi);
    process.exit();
    //return (arrayCorsi);
}