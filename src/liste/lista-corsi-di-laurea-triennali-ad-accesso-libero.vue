<template>
  <div class="container is-fullhd">
    <br />
   <h1 class="has-text-centered is-size-2 has-text-grey has-text-left">
      Lista corsi di laurea triennali ad accesso libero
    </h1>
    <br />
    <h2 class="has-text-grey is-size-2">
      Qui puoi trovare la lista dei corsi di laurea triennali ad accesso libero
    </h2>
    <hr />
    <p>
      <strong>Attenzione!</strong> questa pagina fornisce solo la lista dei
      corsi di laurea triennali ad accesso libero, per avere il
      <strong>link alla pagina del corso</strong> e la
      <strong>funzione di filtro</strong>
      <router-link to="/corsi-di-laurea-triennali-ad-accesso-libero" class="has-text-danger"> visita questa pagina</router-link>.
    </p>
    <p>
      Qui si possono trovare
      <strong>tutti i corsi di laurea triennali ad accesso libero</strong>. I corsi
      in questione sono relativi <strong>all'anno accademico 2020/2021</strong>.
    </p>
    <br />
     <table  class="table is-bordered">
     <thead class="has-background-dark">
        <th class="has-text-white">Corso di laurea</th>
        <th class="has-text-white">Università</th>
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
    title: "Lista corsi di laurea triennali ad accesso libero",
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
        content: "Corsi di laurea, Corso di laurea, Lista corsi di laurea ad accesso libero",
      },
    ],
    link: [
      {
        rel: "canonical",
        href:
          "https://www.corsiuniversitari.info/lista-corsi-di-laurea-triennale-ad-accesso-libero",
      },
    ],
  },
   data() {
    return{
      corsi: [],
    }
  },
  async beforeCreate() {
    try {
      const res = await axios.get(
        "https://json-corsi-fastify.herokuapp.com/corsi?t=Triennale&a=No"
      );

      this.corsi = res.data;
    } catch (e) {
      console.log(e);
    }
  },
/*   methods: {
    FiltraLista: function () {
      var triennale = [];
      for (var x = 0; x < corsi.length; x++) {
        if (corsi[x].t == "Triennale" && corsi[x].a == "No") {
          triennale.push(corsi[x]);
        }
      }
      return triennale;
    },
  }, */
};
</script>
