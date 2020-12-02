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

    var arrayCorsi = [];

    //clicco sul bottone per farmi realizzare la lista
    for (var i = 1; i < 17; i++){
        await page.click('button.area' + i);
    }
    
    

    //qui chiudo tutto e invio al padre i dati
    process.send(arrayCorsi);
    process.exit();
}