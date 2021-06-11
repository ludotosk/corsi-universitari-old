<template>
  <div class="container is-fullhd">
    <br />
    <h1 class="has-text-centered is-size-2 has-text-grey has-text-left">
      Università senza test d'ingresso [2021]
    </h1>
    <br />
    <h2 class="has-text-grey is-size-2">
      Quali sono le università senza test d'ingresso? [corsi di laurea 2021]
    </h2>
    <hr />
    <p>
      <strong>Attenzione!</strong> questa pagina fornisce solo la lista dei
      corsi di laurea 2021 (di tutte le università) senza test d'ingresso, per avere il
      <strong>link alla pagina del corso</strong> e la
      <strong>funzione di filtro</strong>
      <b class="has-text-danger" @click="cerca = true"> clicca qui!</b>
  <!--     <router-link to="/corsi-di-laurea-senza-test" class="has-text-danger">
        visita questa pagina</router-link
      >. -->
    </p>
    <p>
      Qui si può trovare <strong>la lista dei corsi di laurea senza test d'ingresso</strong>. I corsi in
      questione sono relativi <strong>all'anno accademico 2020/2021</strong>.
    </p>
    <br />
    <div v-if="cerca == true">
      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field has-addons">
            <p class="control">
              <label
                for="basic-url"
                class="button is-static has-text-weight-medium has-text-black"
                >Filtra in base al nome:</label
              >
            </p>
            <input
              type="text"
              class="input"
              id="basic-url"
              aria-describedby="basic-addon3"
              v-model="filters.n.value"
            />
          </div>
        </div>
      </div>
      <p>
        <strong>Attenzione!</strong> per eseguire la ricerca serve il nome del
        corso corretto. Es. <strong>biotecnologie</strong> si trova sotto
        "biotecnologie" "biotecnologia" "biotechnology" quindi per avere il
        risultato corretto inserire <strong>"biotec"</strong>. Cioè la parte
        comune a tutti i nomi. Il resto della <strong>guida</strong> è sotto la
        tabella.
      </p>
      <br />
      <v-table
        :data="corsi"
        :filters="filters"
        :pageSize="15"
        @totalPagesChanged="totalPages = $event"
        :currentPage.sync="currentPage"
        class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth"
      >
        <thead slot="head" class="has-background-dark">
          <th class="has-text-white">Corso di laurea</th>
          <th class="has-text-white">Livello</th>
          <v-th sortKey="u" defaultSort="asc" class="has-text-white"
            >Università</v-th
          >
        </thead>
        <tbody slot="body" slot-scope="{ displayData }" data-view>
          <tr v-for="row in displayData" :key="row.guid">
            <td>
              <a
                :href="row.h"
                target="_blank"
                rel="noopener"
                class="has-text-danger"
                >{{ row.n }}</a
              >
            </td>
            <td>Corso di Laurea {{ row.t }} Senza Test</td>
            <td>{{ row.u }}</td>
          </tr>
        </tbody>
      </v-table>
      <smart-pagination
        :currentPage.sync="currentPage"
        :totalPages="totalPages"
        :maxPageLinks="4"
      />
    </div>
    <table class="table is-bordered" v-if="cerca == false">
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
    title: "Università senza test d'ingresso [2021]",
    // all titles will be injected into this template
    titleTemplate: "%s | corsiuniversitari.info",
    meta: [
      {
        name: "description",
        content:
          "In questa pagina puoi trovare la lista di tutti i corsi di laurea senza test d'ingresso Italiani.",
      },
      {
        name: "keywords",
        content:
          "Corsi di laurea, Corso di laurea, Lista corsi di laurea senza test d'ingresso'",
      },
    ],
    link: [
      {
        rel: "canonical",
        href:
          "https://www.corsiuniversitari.info/lista-corsi-di-laurea-senza-test",
      },
    ],
  },
  data() {
    return {
      corsi: [],
      cerca: false,
      filters: {
        n: { value: "", keys: ["n"] },
      },
      currentPage: 1,
      totalPages: 0,
    };
  },
  async beforeCreate() {
    try {
      const res = await axios.get(
        "https://json-corsi-fastify.herokuapp.com/corsi?a=No"
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
