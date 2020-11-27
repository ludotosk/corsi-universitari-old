//qui chiamo la libreria puppeteer e ricevo l'argomento usato per chiamare la funzione. Non c'è in tutti i siti. Questo perché questa funzione la chiamo una volta per la triennale e una per magistrale con link diverso, così nell'argomento dico che tipo di corso è.
const puppeteer = require('puppeteer');
const axios = require('axios');
const tipoLaurea = process.argv[2];

//qui ricevo la send del padre e chiamo la funzione di scrape. Nella send ricevo il link e il numero della porta di debug di chrome.
process.on('message', (messaggio) => {
    //console.log(messaggio);
    scrapePolimi(messaggio);
});

async function scrapePolimi(url) {
    //mi connetto al browser e apro una pagina nel browser
    const response = await axios.get(`http://localhost:${url.port}/json/version`);
    const { webSocketDebuggerUrl } = response.data;
    const browser = await puppeteer.connect({ browserWSEndpoint: webSocketDebuggerUrl });

    const page = await browser.newPage();

    //questo serve per scaricare solo i file che servono. Uguale in tutti tranne che in unimib dove serve il js.
    await page.setRequestInterception(true);

    //if the page makes a  request to a resource type of image or stylesheet then abort that request
    page.on('request', request => {
        if (request.resourceType() === 'image' || request.resourceType() === 'stylesheet' || request.resourceType() == 'script' || request.resourceType() == 'font' || request.resourceType() == 'media')
            request.abort();
        else
            request.continue();
    });

    //questo si capisce 
    await page.goto(url.url);

    const uni = 'polimi';

    var arrayCorsi = [];

    //qui cerco un elemento o per nome classe o per nome id o per tipo di tag. Nome classe ritorna un array id solo un elemento.
    //in alcuni caso devo aprire il primo figlio dell'elemento come nello scraper di unimi.
    const listHref = await page.evaluateHandle(() => {
        return Array.from(document.getElementsByClassName('listaCorsi')[0].getElementsByTagName('a')).map(a => a.href);
    });
    var listaHref = await listHref.jsonValue();

    const listText = await page.evaluateHandle(() => {
        return Array.from(document.getElementsByClassName('listaCorsi')[0].getElementsByTagName('a')).map(a => a.textContent);
    });
    var listaText = await listText.jsonValue();

    //chiudo la pagina e la connessione al browser
    page.close();
    browser.disconnect();

    //qui invece prendo tutti i link e li itero controllando la lunghezza per avere solo i link del corso. Così passo tutto all'altra funzione.
    for (var i = 0, max = listaHref.length; i < max; i++) {
        const hrefTxt = listaHref[i];
        const nomeCorso = listaText[i];

        arrayCorsi.push({ nomeCorso, hrefTxt, tipoLaurea, uni });
    }

    //qui chiudo tutto e invio al padre i dati
    process.send(arrayCorsi);
    process.exit();
}