<template>
  <div class="container is-fullhd">
    <br />
    <h1 class="has-text-centered is-size-2 has-text-dark has-text-left">
      Università a {{ uni }}, Corsi di laurea [2021/2022]
    </h1>
    <h2 class="has-text-centered is-size-3 has-text-dark has-text-left">
      Quali sono i corsi di laurea a {{ uni }}? Ecco la lista!
    </h2>
    <!--     <hr />
    <p>
      Qui si può trovare
      <strong>la lista dei corsi di laurea a {{ uni }}</strong
      >. I corsi in questione sono relativi
      <strong>all'anno accademico 2020/2021/2022</strong>.
    </p> -->
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
    <!--     <p>
      <strong>Attenzione!</strong> per eseguire la ricerca serve il nome del
      corso corretto. Es. <strong>biotecnologie</strong> si trova sotto
      "biotecnologie" "biotecnologia" "biotechnology" quindi per avere il
      risultato corretto inserire <strong>"biotec"</strong>. Cioè la parte
      comune a tutti i nomi. Il resto della <strong>guida</strong> è sotto la
      tabella.
    </p> -->
    <br />
    <div v-if="cambiaTabella">
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
          <v-th sortKey="t" defaultSort="asc" class="has-text-white"
            >Livello</v-th
          >
          <v-th sortKey="a" defaultSort="asc" class="has-text-white">Test</v-th>
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
                >{{ row.n }}</a
              >
            </td>
            <td>Corso di Laurea {{ row.t }}</td>
            <td>{{ row.a }}</td>
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
      <!-- tolto da qua -->
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
    <table class="table is-bordered is-hoverable" v-if="!cambiaTabella">
      <thead class="has-background-dark">
        <th class="has-text-white">Corso di laurea</th>
        <!--    <th class="has-text-white">Livello</th>
        <th class="has-text-white">Test</th> -->
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
          <!--    <td>{{ corso.t }}</td>
          <td>{{ corso.a }}</td> -->
          <td>{{ corso.u }}</td>
        </tr>
      </tbody>
    </table>
    <br />
  </div>
</template>

<script>
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Università a Torino, Corsi di laurea [2021/2022] ✅",
    meta: [
      {
        name: "description",
        content:
          "In questo sito potrai trovare rapidamente tutti i corsi di laurea torino, tutti raggruppati su una comoda tabella.",
      },
      {
        name: "keywords",
        content: "Corsi di laurea, Corso di laurea, Corsi di laurea torino",
      },
    ],
    link: [
      {
        rel: "canonical",
        href: "https://www.corsiuniversitari.info/corsi-di-laurea-torino",
      },
      {
        rel: "preload",
        as: "fetch",
        href: "https://json-corsi-fastify.herokuapp.com/corsi?s=TORINO",
        crossorigin: "anonymous"
      }
    ],
  },
  data() {
    return {
      filters: {
        n: { value: "", keys: ["n"] },
      },
      currentPage: 1,
      totalPages: 0,
      uni: "Torino",
      corsi: [],
      cambiaTabella: false,
    };
  },
  async mounted() {
    try {
      fetch("https://json-corsi-fastify.herokuapp.com/corsi?s=TORINO")
        .then((response) => response.json())
        .then((data) => (this.corsi = data));
    } catch (e) {
      console.log(e);
    }
  },
  watch: {
    "filters.n.value": function () {
      this.cambiaTabella = true;
    },
  },
};
</script>
