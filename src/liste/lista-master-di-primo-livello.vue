<template>
  <div class="container-md">
    <br />
    <h1 class="text-secondary">
      Lista master di primo livello
    </h1>
    <br />
    <h2 class="text-secondary">
      Qui puoi trovare la lista di tutti i master di primo livello
    </h2>
    <hr />
    <p>
      <strong>Attenzione!</strong> questa pagina fornisce solo la lista dei master di primo livello, per avere il
      <strong>link alla pagina del corso</strong> e la
      <strong>funzione di filtro</strong>
      <router-link to="/master-primo-livello" class="text-danger">
        visita questa pagina</router-link
      >.
    </p>
    <p>
      Qui si possono trovare oltre
      <strong>1700 master di primo livello</strong>.
    </p>
    <br />
    <table class="table table-sm table-bordered">
      <thead class="thead-dark">
        <th>Nome master</th>
        <th>Università</th>
      </thead>
      <tbody v-for="corso in corsi" :key="corso.corso">
        <tr data-view>
          <td>{{ corso.corso }}</td>
          <td>{{ corso.uni }}</td>
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
    title: "Lista master di primo livello",
    // all titles will be injected into this template
    titleTemplate: "%s | corsiuniversitari.info",
    meta: [
      {
        name: "description",
        content:
          "In questa pagina puoi trovare la lista di tutti i master di primo livello Italiani.",
      },
      {
        name: "keywords",
        content: "Master di primo livello",
      },
    ],
    link: [
      {
        rel: "canonical",
        href:
          "https://www.corsiuniversitari.info/lista-master-primo-livello",
      },
    ],
  },
  data() {
    return {
      corsi: []
    }
  },
  async beforeCreate() {
    try {
      const res = await axios.get(
        "https://json-server-corsi.herokuapp.com/master?tipo=Master di Primo Livello&_sort=corso,uni&_order=asc,asc",
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
