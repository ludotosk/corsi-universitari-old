const puppeteer = require('puppeteer');

process.on('message', (messaggio) => {
    //console.log(messaggio);
    scrapeUnibg(messaggio);
});

async function scrapeUnibgCorso(url, browser, arrayCorsi) {
    const page = await browser.newPage();

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

    await page.goto(url);

    var arrayCorsi = [];

    const list = await page.evaluateHandle(() => {
        return Array.from(document.getElementById('contenitore-principale').getElementsByTagName('a')).map(a => a.href);
    });
    var lista = await list.jsonValue();

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