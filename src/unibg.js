//le parti uguali al polimi non le commento, sono già commentate lì
const puppeteer = require('puppeteer');

process.on('message', (messaggio) => {
    //console.log(messaggio);
    scrapeUnibg(messaggio);
});

//questa funzione fa lo scaping di ogni singola pagina di un corso. Stesso funzionamento delle altre università, cambia la seconda funzione.
async function scrapeUnibgCorso(url, browser, arrayCorsi) {
    const page = await browser.newPage();

    await page.setRequestInterception(true);

    //if the page makes a  request to a resource type of image or stylesheet then abort that request
    page.on('request', request => {
        if (request.resourceType() === 'image' || request.resourceType() === 'stylesheet')
            request.abort();
        else
            request.continue();
    });

    await page.goto(url);

    const [el] = await page.$x('/html/body/div[2]/div/div/section/h1');
    const titolo = await el.getProperty('textContent');
    const nomeCorso = await titolo.jsonValue();
    //console.log(nomeCorso);

    const [el1] = await page.$x('/html/body/div[2]/div/div/section/div/div[1]/div/section/div/div[3]/div[2]/div[2]/div');
    const laurea = await el1.getProperty('textContent');
    var tipoLaurea = await laurea.jsonValue();

    if (tipoLaurea == 'Laurea Magistrale Ciclo Unico 5 anni') {
        tipoLaurea = 'Laurea magistrale a ciclo unico';
    }

    const uni = 'unibg';
    const hrefTxt = uni;

    arrayCorsi.push({ nomeCorso, hrefTxt, tipoLaurea, uni });

}

async function scrapeUnibg(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

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
    const list = await page.evaluateHandle(() => {
        return Array.from(document.getElementById('contenitore-principale').getElementsByTagName('a')).map(a => a.href);
    });
    var lista = await list.jsonValue();

    //qui invece prendo tutti i link e li itero controllando la lunghezza per avere solo i link del corso. Così passo tutto all'altra funzione.
    for (var i = 0, max = lista.length; i < max; i++) {
        if (lista[i].length == 37) {
            //console.log(lista[i]);
            await scrapeUnibgCorso(lista[i], browser, arrayCorsi);
        }
    }

    browser.close();
    process.send(arrayCorsi);
    process.exit();
    //return (arrayCorsi);
}