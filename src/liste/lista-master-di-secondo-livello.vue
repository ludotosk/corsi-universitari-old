<template>
  <div class="container is-fullhd">
    <br />
   <h1 class="has-text-centered is-size-2 has-text-grey has-text-left">
      Lista master di secondo livello
    </h1>
    <br />
    <h2 class="has-text-grey is-size-2">
      Qui puoi trovare la lista di tutti i master di secondo livello
    </h2>
    <hr />
    <p>
      <strong>Attenzione!</strong> questa pagina fornisce solo la lista dei master di secondo livello, per avere il
      <strong>link alla pagina del corso</strong> e la
      <strong>funzione di filtro</strong>
      <router-link to="/master-secondo-livello" class="has-text-danger">
        visita questa pagina</router-link
      >.
    </p>
    <p>
      Qui si possono trovare oltre
      <strong>1500 master di secondo livello</strong>.
    </p>
    <br />
     <table  class="table is-bordered">
     <thead class="has-background-dark">
        <th class="has-text-white">Nome master</th>
        <th class="has-text-white">Arco</th>
        <th class="has-text-white">Università</th>
      </thead>
      <tbody v-for="corso in corsi" :key="corso.corso">
        <tr data-view>
          <td class="text-break">{{ corso.corso }}</td>
          <td>{{ corso.durata }}</td>
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
    title: "Lista master di secondo livello",
    // all titles will be injected into this template
    titleTemplate: "%s | corsiuniversitari.info",
    meta: [
      {
        name: "description",
        content:
          "In questa pagina puoi trovare la lista di tutti i master di secondo livello Italiani.",
      },
      {
        name: "keywords",
        content: "Master di secondo livello",
      },
    ],
    link: [
      {
        rel: "canonical",
        href:
          "https://www.corsiuniversitari.info/lista-master-secondo-livello",
      },
    ],
  },
  data() {
    return {
      corsi: [],
    }
  },
  async beforeCreate() {
    try {
      const res = await axios.get(
        "https://json-corsi-fastify.herokuapp.com/master?tipo=Master di Secondo Livello&_sort=corso,uni&_order=asc,asc",
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
