<template>
  <div class="container is-fullhd">
    <br />
   <h1 class="has-text-centered is-size-2 has-text-grey has-text-left">
      Lista corsi di perfezionamento - alta formazione
    </h1>
    <br />
    <h2 class="has-text-grey is-size-2">
      Qui puoi trovare la lista di tutti i corsi di perfezionamento - alta formazione
    </h2>
    <hr />
    <p>
      <strong>Attenzione!</strong> questa pagina fornisce solo la lista dei corsi di perfezionamento - alta formazione, per avere il
      <strong>link alla pagina del corso</strong> e la
      <strong>funzione di filtro</strong>
      <router-link to="/perfezionamento-alta-formazione" class="has-text-danger">
        visita questa pagina</router-link
      >.
    </p>
    <p>
      Qui si possono trovare oltre
      <strong>800 corsi di perfezionamento - alta formazione</strong>.
    </p>
    <br />
     <table  class="table is-bordered">
     <thead class="has-background-dark">
        <th>Nome corso</th>
        <th>Arco</th>
        <th>Università</th>
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
    title: "Lista corsi di perfezionamento - alta formazione",
    // all titles will be injected into this template
    titleTemplate: "%s | corsiuniversitari.info",
    meta: [
      {
        name: "description",
        content:
          "In questa pagina puoi trovare la lista di tutti i corsi di perfezionamento - alta formazione.",
      },
      {
        name: "keywords",
        content: "corsi di perfezionamento - alta formazione",
      },
    ],
    link: [
      {
        rel: "canonical",
        href:
          "https://www.corsiuniversitari.info/lista-perfezionamento-alta-formazione",
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
        "https://json-server-corsi.herokuapp.com/master?tipo=Corso%20di%20Perfezionamento/Alta%20Formazione&_sort=corso,uni&_order=asc,asc",
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
