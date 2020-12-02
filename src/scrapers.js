/* 
Ho fatto tre tipi di scraper.
Quello di polimi il più veloce. Quello consigliato.
Quello di unibg il più lento cerca tutti i link li filtra e si connette alle singole pagine. Da usare in casi estremi, ovvero se gli altri due non vanno.
Quello di unimib più lento di quello di polimi da usare quando il primo non funziona. Cerca tutti gli elementi tramite xpath.
*/
const fs = require('fs');
const { fork } = require('child_process');
const chromeLauncher = require('chrome-launcher');

async function launchScrape() {
    //questo l'ho messo solo per registare il tempo di esecuzione del programma
    const inizio = Date.now();
    //questa variabile la uso dopo per verificare che tutti i figli abbiano finito
    var i = 0;

    const opts = {
        chromeFlags: ['--headless'],
        logLevel: 'error',
        output: 'json'
    };

    // Launch chrome using chrome-launcher.
    const chrome = await chromeLauncher.launch(opts);
    console.log('chrome aperto');

    //qui creo un figlio per ogni università con la fork in alcuni casi trami la fork mando anche dei dati. Mentre con la send chiamo la funzion che fa partire il figlio e gli mando il link.
    const childUnimiTriennale = fork('./unimi.js');
    childUnimiTriennale.send({ url: 'https://www.unimi.it/it/corsi/corsi-di-laurea-triennali-e-magistrali-ciclo-unico', port: chrome.port });
    const childUnimiMagistrale = fork('./unimi.js');
    childUnimiMagistrale.send({ url: 'https://www.unimi.it/it/corsi/corsi-di-laurea-magistrale', port: chrome.port });
    const childUnimib = fork('./unimib.js');
    childUnimib.send({ url: 'https://www.unimib.it/didattica/corsi-studio-iscrizioni', port: chrome.port });
    const childPolimiTriennale = fork('./polimi.js', ['Laurea triennale']);
    childPolimiTriennale.send({ url: 'https://www.polimi.it/corsi/corsi-di-laurea/', port: chrome.port });
    const childPolimiMagistrale = fork('./polimi.js', ['Laurea magistrale']);
    childPolimiMagistrale.send({ url: 'https://www.polimi.it/corsi/corsi-di-laurea-magistrale/', port: chrome.port });
    const childBocconi = fork('./bocconi.js');
    childBocconi.send({ url: 'https://www.unibocconi.it/wps/wcm/connect/bocconi/sitopubblico_it/albero+di+navigazione/home/corsi+di+studio/', port: chrome.port });
    const childUnibgTriennale = fork('./unibg.js');
    childUnibgTriennale.send({ url: 'https://www.unibg.it/studia-noi/corsi/lauree-triennali-e-ciclo-unico', port: chrome.port });
    const childUnibgMagistrale = fork('./unibg.js');
    childUnibgMagistrale.send({ url: 'https://www.unibg.it/studia-noi/corsi/lauree-magistrali', port: chrome.port });
    const childPolitoTriennale = fork('./polito.js', ['Laurea triennale']);
    childPolitoTriennale.send({ url: 'https://didattica.polito.it/pls/portal30/sviluppo.offerta_formativa.lauree?p_tipo_cds=1&p_elenco=T&p_lang=IT', port: chrome.port });
    const childPolitoMagistrale = fork('./polito.js', ['Laurea magistrale']);
    childPolitoMagistrale.send({ url: 'https://didattica.polito.it/pls/portal30/sviluppo.offerta_formativa.lauree?p_tipo_cds=Z&p_elenco=T&p_lang=IT', port: chrome.port });
    const childUnito = fork('./unito.js');
    childUnito.send({ url: 'https://www.unito.it/didattica/offerta-formativa/corsi-studio', port: chrome.port });
    //const childUnibo = fork('./unibo.js');
    //childUnibo.send({ url: 'https://www.unibo.it/it/didattica/corsi-di-studio?orderby=area', port: chrome.port});

    var corsi = [];
    //creo l'array che conterrà tutti i risultati.
    //con la fuzione on cattura la risposta del figlio con i dati e poi eseguo l'aggiunta dei dati con la push all'array del padre. Dall'altra parte della on c'è una funzione send che dal figlio manda i dati.
    childUnimiTriennale.on('message', (messaggio) => {
        Array.prototype.push.apply(corsi, messaggio);
    });
    childUnimiMagistrale.on('message', (messaggio) => {
        Array.prototype.push.apply(corsi, messaggio);
    });
    //qui c'è una on che però cattura l'exit e non message. Quando il figlio si chiude incremento il contatore e scrivo che ha terminato.
    childUnimiTriennale.on('exit', (esco) => {
        console.log('unimi triennale ok');
        i++;
    });
    childUnimiMagistrale.on('exit', (esco) => {
        console.log('unimi magistrale ok');
        i++;
    });
    childUnimib.on('message', (messaggio) => {
        Array.prototype.push.apply(corsi, messaggio);
    });
    childUnimib.on('exit', (esco) => {
        console.log('unimib ok');
        i++;
    });
    childPolimiTriennale.on('message', (messaggio) => {
        Array.prototype.push.apply(corsi, messaggio);
    });
    childPolimiTriennale.on('exit', (esco) => {
        console.log('polimi triennale ok');
        i++;
    });
    childPolimiMagistrale.on('message', (messaggio) => {
        Array.prototype.push.apply(corsi, messaggio);
    });
    childPolimiMagistrale.on('exit', (esco) => {
        console.log('polimi magistrale ok');
        i++;
    });
    childBocconi.on('message', (messaggio) => {
        Array.prototype.push.apply(corsi, messaggio);
    });
    childBocconi.on('exit', (esco) => {
        console.log('bocconi ok');
        i++;
    });
    childUnibgTriennale.on('message', (messaggio) => {
        Array.prototype.push.apply(corsi, messaggio);
    });
    childUnibgTriennale.on('exit', (esco) => {
        console.log('unibg triennale ok');
        i++;
    });
    childUnibgMagistrale.on('message', (messaggio) => {
        Array.prototype.push.apply(corsi, messaggio);
    });
    childUnibgMagistrale.on('exit', (esco) => {
        console.log('unibg magistrale ok');
        i++;
    });
    childPolitoTriennale.on('message', (messaggio) => {
        Array.prototype.push.apply(corsi, messaggio);
    });
    childPolitoTriennale.on('exit', (esco) => {
        console.log('polito triennale ok');
        i++;
    });
    childPolitoMagistrale.on('message', (messaggio) => {
        Array.prototype.push.apply(corsi, messaggio);
    });
    childPolitoMagistrale.on('exit', (esco) => {
        console.log('polito magistrale ok');
        i++;
    });
    childUnito.on('message', (messaggio) => {
        Array.prototype.push.apply(corsi, messaggio);
    });
    childUnito.on('exit', (esco) => {
        console.log('unito ok');
        i++;
    });

    //qui ogni secondo controllo se tutti hanno finito. È un po' rudimentale ma funziona. Non so se si possa fare meglio. Quando tutti hanno finito scrive su file l'array, scrive nel terminale che ha terminato e dice quanto ci ha messo.
    setInterval((scrivi) => {
        if (i > 10) {
            fs.writeFile('../public/corsi.json', JSON.stringify(corsi), function (err) {
                if (err) return console.log(err);
                console.log('corsi > corsi.json');
                const fine = (Date.now() - inizio) / 1000;
                console.log('tempo in secondi', fine);
                chrome.kill();
                process.exit();
            });
        }
    }, 1000);
}

launchScrape();