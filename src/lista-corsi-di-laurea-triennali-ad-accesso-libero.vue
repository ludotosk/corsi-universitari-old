<template>
  <div class="container-md">
    <br />
    <h1 class="text-secondary">Lista corsi di laurea triennali ad accesso libero</h1>
    <br />
    <h2 class="text-secondary">
      Qui puoi trovare la lista dei corsi di laurea triennali ad accesso libero
    </h2>
    <hr />
    <p>
      Qui si possono trovare oltre
      <strong>1000 corsi di laurea triennali ad accesso libero</strong>. I corsi in questione sono
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
      <li v-for="corso in FiltraLista()" :key="corso.n">
        Corso di {{ corso.t }} | <a :href="corso.h">{{ corso.n }}</a> |
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
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Lista corsi di laurea triennali",
    // all titles will be injected into this template
    titleTemplate: "%s | corsiuniversitari.info",
    meta: [
      {
        name: "description",
        content:
          "Qui puoi trovare la lista di tutti i corsi di laurea triennali Italiani.",
      },
      {
        name: "keywords",
        content: "Corsi di laurea, Corso di laurea, Lista corsi di laurea",
      },
    ],
    link: [
      {
        rel: "canonical",
        href: "https://www.corsiuniversitari.info/lista-corsi-di-laurea-triennali-ad-accesso-libero",
      },
    ],
  },
  methods: {
    FiltraLista: function() {
      var triennale = [];
      for (var x = 0; x < corsi.length; x++) {
        if (corsi[x].t == "Laurea Triennale" && corsi[x].a == "No") {
          triennale.push(corsi[x]);
        }
      }
      return triennale;
    },
  },
};
</script>
