<template>
  <div class="container-md">
    <br />
    <h1 class="text-secondary">
      Lista corsi di laurea magistrali a ciclo unico
    </h1>
    <br />
    <h2 class="text-secondary">
      Qui puoi trovare la lista di tutti i corsi di laurea magistrali a ciclo
      unico
    </h2>
    <hr />
    <p>
      <strong>Attenzione!</strong> questa pagina fornisce solo la lista dei
      corsi di laurea magistrali a ciclo unico, per avere il
      <strong>link alla pagina del corso</strong> e la
      <strong>funzione di filtro</strong>
      <router-link to="/corsi-di-laurea-magistrale-a-ciclo-unico">
        visita questa pagina</router-link
      >.
    </p>
    <p>
      Qui si possono trovare oltre
      <strong>780 corsi di laurea magistrali</strong>. I corsi in questione sono
      relativi <strong>all'anno accademico 2020/2021</strong>.
    </p>
    <br />
    <table class="table table-sm table-bordered">
      <thead class="thead-dark">
        <th>Corso di laurea</th>
        <th>Università</th>
      </thead>
      <tbody v-for="corso in corsi" :key="corso.n">
        <tr data-view>
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
//import corsi from "../corsi.json";
import axios from "axios";

export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Lista magistrali a ciclo unico",
    // all titles will be injected into this template
    titleTemplate: "%s | corsiuniversitari.info",
    meta: [
      {
        name: "description",
        content:
          "In questa pagina puoi trovare la lista di tutti i corsi di laurea magistrali a ciclo unico Italiani.",
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
          "https://www.corsiuniversitari.info/lista-corsi-di-laurea-magistrale-a-ciclo-unico",
      },
    ],
  },
  data() {
    return {
      corsi: []
    }
  },
  async created() {
    try {
      const res = await axios.get(
        "https://json-server-corsi.herokuapp.com/corsi?t=Magistrale a Ciclo Unico",
      );

      this.corsi = res.data;
    } catch (e) {
      console.log(e);
    }
  },
  /*  methods: {
    FiltraLista: function () {
      var triennale = [];
      for (var x = 0; x < corsi.length; x++) {
        if (corsi[x].t == "Magistrale a Ciclo Unico") {
          triennale.push(corsi[x]);
        }
      }
      return triennale;
    },
  }, */
};
</script>
