<template>
  <div class="container-md">
    <br />
    <h1 class="text-secondary">Lista corsi di laurea</h1>
    <br />
    <h2 class="text-secondary">
      In questa pagina puoi trovare la lista di tutti i corsi di laurea Italiani
    </h2>
    <hr />
    <p>
      Qui si possono trovare oltre
      <strong>4700 corsi di laurea</strong> italiani. I corsi in questione sono
      relativi <strong>all'anno accademico 2020/2021</strong>.
    </p>
    <p>
      Se non sei interssato alla <strong>lista dei corsi di laurea</strong> ti
      consiglio di visitare
      <router-link to="/corsi-di-laurea"> questa pagina</router-link>. Dove puoi
      trovare una tabella con una funzione di filtro per cerca il corso di
      laurea che desideri.
    </p>
    <br />
    <ol>
      <li v-for="corso in CreaTriennale()" :key="corso.n">
        Corso di {{ corso.t }} in <a :href="corso.h">{{ corso.n }}</a> presso
        {{ corso.u }}
      </li>
    </ol>
    <br />
    <br />
  </div>
</template>

<script>
import corsi from "./corsi.json";

export default {
  name: "lista corsi di laurea",
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Lista corsi di laurea",
    // all titles will be injected into this template
    titleTemplate: "%s | corsiuniversitari.info",
    meta: [
      {
        name: "description",
        content:
          "Qui puoi trovare la lista di tutti i corsi di laurea Italiani.",
      },
      {
        name: "keywords",
        content: "Corsi di laurea, Corso di laurea, Lista corsi di laurea",
      },
    ],
    link: [
      {
        rel: "canonical",
        href: "https://www.corsiuniversitari.info/lista-corsi-di-laurea",
      },
    ],
  },
  methods: {
    CreaTriennale: function() {
      var triennale = [];
      for (var x = 0; x < corsi.length; x++) {
        if (corsi[x].t == "Laurea Triennale") {
          triennale.push(corsi[x]);
        }
      }
      return triennale;
    },
  },
};
</script>
