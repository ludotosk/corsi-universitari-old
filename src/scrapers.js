//qui integro le librerie che servono a node. 
//Oltre a questo commento anche quello del polimi e quello di unibg. Il primo è per siti con strutture omogenee, il secondo più pesante per siti con strutture disomogenee
//in unimi c'è un tipolaurea.trim() quella funzione serve per elimare gli spazi prima e dopo la stringa che in alcuni casi compaiono.
const fs = require('fs');
const { fork } = require('child_process');

async function launchScrape() {
    //questo l'ho messo solo per registare il tempo di esecuzione del programma
    const inizio = Date.now();
    //questa variabile la uso dopo per verificare che tutti i figli abbiano finito
    var i = 0;

    //qui creo un figlio per ogni università con la fork in alcuni casi trami la fork mando anche dei dati. Mentre con la send chiamo la funzion che fa partire il figlio e gli mando il link.
    const childUnimiTriennale = fork('./unimi.js');
    childUnimiTriennale.send('https://www.unimi.it/it/corsi/corsi-di-laurea-triennali-e-magistrali-ciclo-unico');
    const childUnimiMagistrale = fork('./unimi.js');
    childUnimiMagistrale.send('https://www.unimi.it/it/corsi/corsi-di-laurea-magistrale');
    const childUnimib = fork('./unimib.js');
    childUnimib.send('https://www.unimib.it/didattica/corsi-studio-iscrizioni');
    const childPolimiTriennale = fork('./polimi.js', ['Laurea triennale']);
    childPolimiTriennale.send('https://www.polimi.it/corsi/corsi-di-laurea/');
    const childPolimiMagistrale = fork('./polimi.js', ['Laurea magistrale']);
    childPolimiMagistrale.send('https://www.polimi.it/corsi/corsi-di-laurea-magistrale/');
    const childBocconi = fork('./bocconi.js');
    childBocconi.send('https://www.unibocconi.it/wps/wcm/connect/bocconi/sitopubblico_it/albero+di+navigazione/home/corsi+di+studio/');
    const childUnibgTriennale = fork('./unibg.js');
    childUnibgTriennale.send('https://www.unibg.it/studia-noi/corsi/lauree-triennali-e-ciclo-unico');
    const childUnibgMagistrale = fork('./unibg.js');
    childUnibgMagistrale.send('https://www.unibg.it/studia-noi/corsi/lauree-magistrali');
    
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

    //qui ogni secondo controllo se tutti hanno finito. È un po' rudimentale ma funziona. Non so se si possa fare meglio. Quando tutti hanno finito scrive su file l'array, scrive nel terminale che ha terminato e dice quanto ci ha messo.
    setInterval((scrivi) => {
        if (i > 7) {
            fs.writeFile('../public/corsi.json', JSON.stringify(corsi), function (err) {
                if (err) return console.log(err);
                console.log('corsi > corsi.json');
                const fine = (Date.now() - inizio) / 1000;
                console.log('tempo in secondi', fine);
                process.exit();
            });
        }
    }, 1000);
}

launchScrape();