const puppeteer = require('puppeteer');
const axios = require('axios');

process.on('message', (messaggio) => {
    //console.log(messaggio);
    scrapeUnimi(messaggio);
});

async function scrapeUnimi(url) {
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

    var arrayCorsi = [];

    var i = 1;

    var uni = 'unimi';

    const nomi = await page.evaluateHandle(() => {
        return Array.from(document.getElementsByClassName('view-content')[1].getElementsByClassName('bp-title')).map(div => div.textContent);
    });
    var listaNomi = await nomi.jsonValue();

    const laurea = await page.evaluateHandle(() => {
        return Array.from(document.getElementsByClassName('view-content')[1].getElementsByClassName('card_left')).map(div => div.textContent);
    });
    var listaLauree = await laurea.jsonValue();

    const link = await page.evaluateHandle(() => {
        return Array.from(document.getElementsByClassName('view-content')[1].getElementsByClassName('bp-title')).map(div => div.firstChild.href);
    });
    var listaLink = await link.jsonValue();

    page.close();
    browser.disconnect();

    for (var i = 0, max = listaNomi.length; i < max; i++) {
        const hrefTxt = listaLink[i];
        const nomeCorso = listaNomi[i];
        const tipoLaurea = listaLauree[i];

        arrayCorsi.push({ nomeCorso, hrefTxt, tipoLaurea, uni });
    }
   
    process.send(arrayCorsi);
    process.exit();
}