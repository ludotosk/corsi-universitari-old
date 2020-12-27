<template>
  <div class="container-md">
    <br />
    <h1 class="text-secondary">Lista corsi di laurea magistrali</h1>
    <br />
    <h2 class="text-secondary">
      Qui puoi trovare la lista di tutti i corsi di laurea magistrali Italiani
    </h2>
    <hr />
    <p>
      <strong>Attenzione!</strong> questa pagina fornisce solo la lista dei
      corsi di laurea magistrali, per avere il <strong>link alla pagina del corso</strong> e la <strong>funzione di filtro</strong> 
      <router-link to="/corsi-di-laurea-magistrale"> visita questa pagina</router-link>.
    </p>
    <p>
      Qui si possono trovare oltre
      <strong>2200 corsi di laurea magistrali</strong>. I corsi in questione
      sono relativi <strong>all'anno accademico 2020/2021</strong>.
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
import corsi from "../corsi.json";

export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Lista corsi di laurea magistrali",
    // all titles will be injected into this template
    titleTemplate: "%s | corsiuniversitari.info",
    meta: [
      {
        name: "description",
        content:
          "Qui puoi trovare la lista di tutti i corsi di laurea magistrali Italiani. Visitaci per poter trovare altri strumenti.",
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
          "https://www.corsiuniversitari.info/lista-corsi-di-laurea-magistrali",
      },
    ],
  },
  methods: {
    FiltraLista: function () {
      var triennale = [];
      for (var x = 0; x < corsi.length; x++) {
        if (corsi[x].t == "Magistrale") {
          triennale.push(corsi[x]);
        }
      }
      return triennale;
    },
  },
};
</script>
