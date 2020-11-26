//qui chiamo la libreria puppeteer e ricevo l'argomento usato per chiamare la funzione. Non c'è in tutti i siti. Questo perché questa funzione la chiamo una volta per la triennale e una per magistrale con link diverso, così nell'argomento dico che tipo di corso è.
const puppeteer = require('puppeteer');
const tipoLaurea = process.argv[2];

//qui ricevo la send del padre e chiamo la funzione di scrape. Nella send ricevo il link.
process.on('message', (messaggio) => {
    //console.log(messaggio);
    scrapePolimi(messaggio);
});

async function scrapePolimi(url) {
    //apro browser e una pagina nel browser
    const browser = await puppeteer.launch();
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
    await page.goto(url);

    const uni = 'polimi';

    var arrayCorsi = [];

    var next = [];

    var i = 1;

    //qui cerco gli elementi tramite fullxpath che alla fine è meglio che solo xpath che a volte da noie. In altri siti più complessi cambia la struttura dei cicli ma il funzionamento è lo stesso.
    do {
        //in questo caso in un solo elemento troviamo tutti i dati che ci servono. In altri casi ci serve cercare più elementi per estrapolare da ciascuno di essi i singoli dati.
        const [el] = await page.$x('/html/body/div/div/div/div[3]/div/div/ul[2]/li[' + i + ']/a');
        const titolo = await el.getProperty('textContent');
        const link = await el.getProperty('href');
        const nomeCorso = await titolo.jsonValue();
        const hrefTxt = await link.jsonValue();

        //in alcuni casi il tipo di laurea è estrapolato dal sito altre volte passato come parametro. Qui comunque metto nell'array i dati.
        arrayCorsi.push({ nomeCorso, hrefTxt, tipoLaurea, uni });

        //prima incremento il contatore poi verifico che ci sia un elemento successivo altrimenti esco.
        i += 1;
        [next] = await page.$x('/html/body/div/div/div/div[3]/div/div/ul[2]/li[' + i + ']/a');
    } while (next != undefined);

    //qui chiudo tutto e invio al padre i dati
    browser.close();
    process.send(arrayCorsi);
    process.exit();
    //return (arrayCorsi);
}