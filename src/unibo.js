const puppeteer = require('puppeteer');
const axios = require('axios');

process.on('message', (messaggio) => {
    //console.log(messaggio);
    scrapeUnibo(messaggio);
});

async function scrapeUnibo(url) {
    //mi connetto al browser e apro una pagina nel browser
    const response = await axios.get(`http://localhost:${url.port}/json/version`);
    const { webSocketDebuggerUrl } = response.data;
    const browser = await puppeteer.connect({ browserWSEndpoint: webSocketDebuggerUrl });

    const page = await browser.newPage();

    //questo serve per scaricare solo i file che servono. Uguale in tutti tranne che in unimib dove serve il js.
    await page.setRequestInterception(true);

    //if the page makes a  request to a resource type of image or stylesheet then abort that request
    page.on('request', request => {
        if (request.resourceType() === 'image' || request.resourceType() === 'stylesheet' || request.resourceType() == 'font' || request.resourceType() == 'media')
            request.abort();
        else
            request.continue();
    });

    //questo si capisce 
    await page.goto(url.url);

    const uni = 'unibo';
    var tipoLaurea;

    var arrayCorsi = [];

    await page.waitForSelector('button.search-btn');

    await page.click('a.search-button.button-popup');
    await page.click('button.search-btn');

    await page.waitForXPath('//*[@id="panel16"]/div/div[28]/a/div[2]');

    const listText = await page.evaluateHandle(() => {
        return Array.from(document.getElementsByClassName('text-wrapper')).map(div => div.children[1].children[0].textContent);
    });
    var listaText = await listText.jsonValue();

    const listHref = await page.evaluateHandle(() => {
        return Array.from(document.getElementsByClassName('text-description')).map(div => div.lastElementChild.firstElementChild.href);
    });
    var listaHref = await listHref.jsonValue();

    const tipo = await page.evaluateHandle(() => {
        return Array.from(document.getElementsByClassName('type')).map(p => p.textContent);
    });
    var listaTipi = await tipo.jsonValue();

    page.close();
    browser.disconnect();

    //console.log(listaHref.length);
    //console.log(listaText.length);

    for (var i = 0, max = listaHref.length; i < max; i++) {
        const hrefTxt = listaHref[i];
        const nomeCorso = listaText[i];
        if(listaTipi[i] == 'Laurea'){
            tipoLaurea = 'Laurea triennale';
        } else {
            if (listaTipi[i] == 'Laurea Magistrale'){
                tipoLaurea = 'Laurea magistrale';
            } else {
                if (listaTipi[i] == 'Laurea Magistrale a Ciclo Unico'){
                    tipoLaurea = 'Laurea magistrale a ciclo unico';
                } else {
                    tipoLaurea = listaTipi[i];
                }
            }
        }

        arrayCorsi.push({ nomeCorso, hrefTxt, tipoLaurea, uni });
    }

    //qui chiudo tutto e invio al padre i dati
    process.send(arrayCorsi);
    process.exit();
}