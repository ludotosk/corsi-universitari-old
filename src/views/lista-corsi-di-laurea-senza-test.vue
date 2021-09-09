<template>
  <div class="container is-fullhd">
    <br />
    <h1 class="has-text-centered is-size-2 has-text-dark has-text-left">
      Università senza test d'ingresso [2021]
    </h1>
    <h2 class="has-text-centered is-size-3 has-text-dark has-text-left">
      Quali sono le università senza test d'ingresso?
    </h2>
    <hr />
    <p>
      Quali facoltà offrono corsi senza test d'ingresso? In questa pagina puoi
      trovare tutti i corsi di laurea ad accesso libero!
    </p>
    <br />
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
    <div>
      <label for="Triennali" v-if="cerca == false">
        <input
          type="checkbox"
          class="checkbox"
          id="Triennali"
          v-model="triennali"
        />
        Mostra solo corsi di laurea triennali
      </label>
    </div>
    <!--     <p>
      <strong>Attenzione!</strong> per eseguire la ricerca serve il nome del
      corso corretto. Es. <strong>biotecnologie</strong> si trova sotto
      "biotecnologie" "biotecnologia" "biotechnology" quindi per avere il
      risultato corretto inserire <strong>"biotec"</strong>. Cioè la parte
      comune a tutti i nomi. Il resto della <strong>guida</strong> è sotto la
      tabella.
    </p> -->
    <br />
    <div v-if="cerca == true">
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
          <th class="has-text-white">Città</th>
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
            <td>{{ row.s }}</td>
            <td>Corso di Laurea {{ row.t }}</td>
            <td>{{ row.u }}</td>
          </tr>
        </tbody>
      </v-table>
      <smart-pagination
        :currentPage.sync="currentPage"
        :totalPages="totalPages"
        :maxPageLinks="4"
      />
      <br />
      <p>
        <strong> Come funziona?</strong> È molto semplice, basta digitare nella
        barra di ricerca es. "data science" e comparirà la lista di tutti i
        corsi con quel nome. Inoltre cliccando "Livello" vengono ordinati i
        corsi in base al tipo di laurea.
      </p>
      <p>
        <strong>Attenzione!</strong> La colonna test è per indicare quale corso
        ha <strong>test d'ingresso </strong>o è a numero programmato. In quel
        caso il corso sarà segnato come test sì, in caso di accesso libero come
        test no.
      </p>
    </div>
    <table
      class="table is-bordered is-hoverable is-fullwidth"
      v-if="cerca == false"
    >
      <div v-if="!triennali">
        <thead class="has-background-dark">
          <th class="has-text-white">Corso di laurea ad accesso libero</th>
          <th class="has-text-white">Università</th>
        </thead>
        <tbody>
          <tr v-for="corso in corsi" :key="corso.n">
              <td>
                <a
                  :href="corso.h"
                  target="_blank"
                  rel="noopener"
                  class="has-text-danger"
                  >{{ corso.n }}</a
                >
              </td>
              <td>{{ corso.u }}</td>
          </tr>
        </tbody>
      </div>
      <div v-if="triennali">
        <thead class="has-background-dark">
          <th class="has-text-white">Corso di laurea ad accesso libero</th>
          <th class="has-text-white">Università</th>
        </thead>
        <tbody>
          <tr v-for="corso in corsi" :key="corso.n">
            <td>
              <a
                :href="corso.h"
                target="_blank"
                rel="noopener"
                class="has-text-danger"
                >{{ corso.n }}</a
              >
            </td>
            <td>{{ corso.u }}</td>
          </tr>
        </tbody>
      </div>
    </table>
    <br />
    <br />
  </div>
</template>

<script>
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
          "Università senza test d'ingresso 2021, qui puoi trovare tutti i corsi di laurea di tutte le facoltà ad accesso libero!",
      },
      {
        name: "keywords",
        content:
          "Corsi di laurea senza test d'ingresso, Corsi di laurea ad accesso libero, Facoltà senza test d'ingresso, Facoltà ad accesso libero",
      },
    ],
    link: [
      {
        rel: "canonical",
        href: "https://www.corsiuniversitari.info/lista-corsi-di-laurea-senza-test",
      },
    ],
  },
  data() {
    return {
      corsi: [],
      cerca: false,
      triennali: false,
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
        "https://www.corsiuniversitari.info/api/corsi?a=No"
      );

      this.corsi = res.data;
    } catch (e) {
      console.log(e);
    }
  },
  watch: {
    "filters.n.value": function () {
      this.cerca = true;
    },
  },
};
</script>
