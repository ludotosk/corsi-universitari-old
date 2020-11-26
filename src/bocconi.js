const puppeteer = require('puppeteer');

process.on('message', (messaggio) => {
    //console.log(messaggio);
    scrapeBocconi(messaggio);
});


async function scrapeBocconi(url) {
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

    browser.close();
    process.send(arrayCorsi);
    process.exit();
    //return (arrayCorsi);
}