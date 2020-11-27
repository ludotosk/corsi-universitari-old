//le parti uguali al polimi non le commento, sono già commentate lì
const puppeteer = require('puppeteer');
const tipoLaurea = process.argv[2];

process.on('message', (messaggio) => {
    //console.log(messaggio);
    scrapePolito(messaggio);
});

//questa funzione fa lo scaping di ogni singola pagina di un corso. Stesso funzionamento delle altre università, cambia la seconda funzione.

async function scrapePolito(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const uni = 'polito'; 

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
    const listHref = await page.evaluateHandle(() => {
        const architetti = Array.from(document.getElementsByClassName('tabCDS')[0].getElementsByTagName('a')).map(a => a.href);
        const ingegneri = Array.from(document.getElementsByClassName('tabCDS')[1].getElementsByTagName('a')).map(a => a.href);
        Array.prototype.push.apply(architetti, ingegneri);
        return architetti;
    });
    var listaHref = await listHref.jsonValue();

    const listText = await page.evaluateHandle(() => {
        const architetti = Array.from(document.getElementsByClassName('tabCDS')[0].getElementsByTagName('a')).map(a => a.textContent);
        const ingegneri = Array.from(document.getElementsByClassName('tabCDS')[1].getElementsByTagName('a')).map(a => a.textContent);
        Array.prototype.push.apply(architetti, ingegneri);
        return architetti;
    });
    var listaText = await listText.jsonValue();

    page.close();
    browser.close();

    //qui invece prendo tutti i link e li itero controllando la lunghezza per avere solo i link del corso. Così passo tutto all'altra funzione.
    for (var i = 0, max = listaHref.length; i < max; i++) {
        const hrefTxt = listaHref[i];
        const nomeCorso = listaText[i];

        arrayCorsi.push({ nomeCorso, hrefTxt, tipoLaurea, uni });
    }
    
    process.send(arrayCorsi);
    process.exit();
    //return (arrayCorsi);
}