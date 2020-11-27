const puppeteer = require('puppeteer');
const axios = require('axios');

process.on('message', (messaggio) => {
    //console.log(messaggio);
    scrapeBocconi(messaggio);
});


async function scrapeBocconi(url) {
    const response = await axios.get(`http://localhost:${url.port}/json/version`);
    const { webSocketDebuggerUrl } = response.data;
    const browser = await puppeteer.connect({ browserWSEndpoint: webSocketDebuggerUrl });

    const page = await browser.newPage();

    await page.setRequestInterception(true);

    //if the page makes a  request to a resource type of image or stylesheet then abort that request
    page.on('request', request => {
        if (request.resourceType() === 'image' || request.resourceType() === 'stylesheet' || request.resourceType() == 'script' || request.resourceType() == 'font' || request.resourceType() == 'media')
            request.abort();
        else
            request.continue();
    });

    await page.goto(url.url);

    const uni = 'bocconi';

    var arrayCorsi = [];

    // triennali italiano
    var nomi = await page.evaluateHandle(() => {
        return Array.from(document.getElementsByTagName('ul')[28].getElementsByTagName('li')).map(li => li.firstChild.textContent);
    });
    var listaNomi = await nomi.jsonValue();

    var link = await page.evaluateHandle(() => {
        return Array.from(document.getElementsByTagName('ul')[28].getElementsByTagName('li')).map(li => li.firstChild.href);
    });
    var listaLink = await link.jsonValue();

    for (var i = 0, max = listaNomi.length; i < max; i++) {
        const hrefTxt = listaLink[i];
        const nomeCorso = listaNomi[i];
        const tipoLaurea = 'Laurea triennale';

        arrayCorsi.push({ nomeCorso, hrefTxt, tipoLaurea, uni });
    }

    // triennali inglese
    var nomi = await page.evaluateHandle(() => {
        return Array.from(document.getElementsByTagName('ul')[29].getElementsByTagName('li')).map(li => li.firstChild.textContent);
    });
    var listaNomi = await nomi.jsonValue();

    var link = await page.evaluateHandle(() => {
        return Array.from(document.getElementsByTagName('ul')[29].getElementsByTagName('li')).map(li => li.firstChild.href);
    });
    var listaLink = await link.jsonValue();

    for (var i = 0, max = listaNomi.length; i < max; i++) {
        const hrefTxt = listaLink[i];
        const nomeCorso = listaNomi[i];
        const tipoLaurea = 'Laurea triennale';

        arrayCorsi.push({ nomeCorso, hrefTxt, tipoLaurea, uni });
    }

    // magistrali
    var nomi = await page.evaluateHandle(() => {
        return Array.from(document.getElementsByTagName('ul')[30].getElementsByTagName('li')).map(li => li.firstChild.textContent);
    });
    var listaNomi = await nomi.jsonValue();

    var link = await page.evaluateHandle(() => {
        return Array.from(document.getElementsByTagName('ul')[30].getElementsByTagName('li')).map(li => li.firstChild.href);
    });
    var listaLink = await link.jsonValue();

    for (var i = 0, max = listaNomi.length; i < max; i++) {
        const hrefTxt = listaLink[i];
        const nomeCorso = listaNomi[i];
        const tipoLaurea = 'Laurea magistrale';

        arrayCorsi.push({ nomeCorso, hrefTxt, tipoLaurea, uni });
    }

    const tipoLaurea = 'Laurea magistrale'
    const [el1] = await page.$x('/html/body/div[3]/div[2]/article/div[1]/div[3]/div/p[1]/a');
    const titolo = await el1.getProperty('textContent');
    const link2 = await el1.getProperty('href');
    const nomeCorso = await titolo.jsonValue();
    const hrefTxt = await link2.jsonValue();

    arrayCorsi.push({ nomeCorso, hrefTxt, tipoLaurea, uni });

    page.close();
    browser.disconnect();
    process.send(arrayCorsi);
    process.exit();
}