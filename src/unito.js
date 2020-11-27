//le parti uguali al polimi non le commento, sono già commentate lì
const puppeteer = require('puppeteer');

process.on('message', (messaggio) => {
    //console.log(messaggio);
    scrapeUnito(messaggio);
});

//questa funzione fa lo scaping di ogni singola pagina di un corso. Stesso funzionamento delle altre università, cambia la seconda funzione.

async function scrapeUnito(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const uni = 'unito'; 

    await page.setRequestInterception(true);

    //if the page makes a  request to a resource type of image or stylesheet then abort that request
    page.on('request', request => {
        if (request.resourceType() === 'image' || request.resourceType() === 'stylesheet' || request.resourceType() == 'script' || request.resourceType() == 'font' || request.resourceType() == 'media') 
            request.abort();
        else
            request.continue();
    });

    await page.goto(url);

    var arrayCorsi = [];

    //con questa prima funzione vado a prendere tutti i link della classe contenitore principale
    const triennaliLink = await page.evaluateHandle(() => {
        return Array.from(document.getElementById('quickset-elenco_corsi-1').getElementsByClassName('item-list')[0].getElementsByTagName('a')).map(a => a.href);
    });
    var triennaliHref = await triennaliLink.jsonValue();

    const triennaliNome = await page.evaluateHandle(() => {
        return Array.from(document.getElementById('quickset-elenco_corsi-1').getElementsByClassName('item-list')[0].getElementsByTagName('a')).map(a => a.textContent);
    });
    var triennaliText = await triennaliNome.jsonValue();

    const magistraliLink = await page.evaluateHandle(() => {
        return Array.from(document.getElementById('quickset-elenco_corsi-1').getElementsByClassName('item-list')[1].getElementsByTagName('a')).map(a => a.href);
    });
    var magistraliHref = await magistraliLink.jsonValue();

    const magistraliNome = await page.evaluateHandle(() => {
        return Array.from(document.getElementById('quickset-elenco_corsi-1').getElementsByClassName('item-list')[1].getElementsByTagName('a')).map(a => a.textContent);
    });
    var magistraliText = await magistraliNome.jsonValue();

    const unicoLink = await page.evaluateHandle(() => {
        return Array.from(document.getElementById('quickset-elenco_corsi-1').getElementsByClassName('item-list')[2].getElementsByTagName('a')).map(a => a.href);
    });
    var unicoHref = await unicoLink.jsonValue();

    const unicoNome = await page.evaluateHandle(() => {
        return Array.from(document.getElementById('quickset-elenco_corsi-1').getElementsByClassName('item-list')[2].getElementsByTagName('a')).map(a => a.textContent);
    });
    var unicoText = await unicoNome.jsonValue();

    page.close();
    browser.close();

    //qui invece prendo tutti i link e li itero controllando la lunghezza per avere solo i link del corso. Così passo tutto all'altra funzione.
    var tipoLaurea = 'Laurea triennale';
    for (var i = 0, max = triennaliHref.length; i < max; i++) {
        const hrefTxt = triennaliHref[i];
        const nomeCorso = triennaliText[i];

        arrayCorsi.push({ nomeCorso, hrefTxt, tipoLaurea, uni });
    }

    //qui invece prendo tutti i link e li itero controllando la lunghezza per avere solo i link del corso. Così passo tutto all'altra funzione.
    var tipoLaurea = 'Laurea magistrale';
    for (var i = 0, max = magistraliHref.length; i < max; i++) {
        const hrefTxt = magistraliHref[i];
        const nomeCorso = magistraliText[i];

        arrayCorsi.push({ nomeCorso, hrefTxt, tipoLaurea, uni });
    }

    //qui invece prendo tutti i link e li itero controllando la lunghezza per avere solo i link del corso. Così passo tutto all'altra funzione.
    var tipoLaurea = 'Laurea magistrale a ciclo unico';
    for (var i = 0, max = unicoHref.length; i < max; i++) {
        const hrefTxt = unicoHref[i];
        const nomeCorso = unicoText[i];

        arrayCorsi.push({ nomeCorso, hrefTxt, tipoLaurea, uni });
    }

    process.send(arrayCorsi);
    process.exit();
    //return (arrayCorsi);
}