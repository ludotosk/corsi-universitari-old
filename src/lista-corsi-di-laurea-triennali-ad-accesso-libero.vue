<template>
  <div class="container-md">
    <br />
    <h1 class="text-secondary">
      Lista corsi di laurea triennali ad accesso libero
    </h1>
    <br />
    <h2 class="text-secondary">
      Qui puoi trovare la lista dei corsi di laurea triennali ad accesso libero
    </h2>
    <hr />
    <p>
      Qui si possono trovare oltre
      <strong>1000 corsi di laurea triennali ad accesso libero</strong>. I corsi
      in questione sono relativi <strong>all'anno accademico 2020/2021</strong>.
    </p>
    <p>
      Se non sei interssato alla <strong>lista dei corsi di laurea</strong> ti
      consiglio di visitare
      <router-link to="/corsi-di-laurea"> questa pagina</router-link>. Dove puoi
      trovare una tabella con una funzione di filtro per cerca il corso di
      laurea che desideri.
    </p>
    <br />
    <table class="table table-sm table-bordered">
      <thead class="thead-dark">
        <th>Corso di laurea</th>
        <th>Università</th>
      </thead>
      <tbody v-for="corso in FiltraLista()" :key="corso.n">
        <tr>
          <td>{{ corso.n }}</td>
          <td>{{ corso.u }}</td>
        </tr>
      </tbody>
    </table>
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
          "In questa pagina puoi trovare la lista di tutti i corsi di laurea triennali ad accesso libero Italiani.",
      },
      {
        name: "keywords",
        content: "Corsi di laurea, Corso di laurea, Lista corsi di laurea",
      },
    ],
    link: [
      {
        rel: "canonical",
        href:
          "https://www.corsiuniversitari.info/lista-corsi-di-laurea-triennali-ad-accesso-libero",
      },
    ],
  },
  methods: {
    FiltraLista: function () {
      var triennale = [];
      for (var x = 0; x < corsi.length; x++) {
        if (corsi[x].t == "Triennale" && corsi[x].a == "No") {
          triennale.push(corsi[x]);
        }
      }
      return triennale;
    },
  },
};
</script>
