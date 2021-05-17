<template>
  <div class="container is-fullhd">
    <br />
   <h1 class="has-text-centered is-size-2 has-text-grey has-text-left">Corsi di laurea {{ uni }}</h1>
    <br />
    <div class="field is-horizontal">
      <div class="field-body">
        <div class="field has-addons">
          <p class="control">
            <label for="basic-url" class="button is-static has-text-weight-medium has-text-black">Filtra in base al nome:</label>
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
    <br>
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
        <v-th sortKey="t" defaultSort="asc" class="has-text-white">Livello</v-th>
        <v-th sortKey="a" defaultSort="asc" class="has-text-white">Test</v-th>
        <v-th sortKey="u" defaultSort="asc" class="has-text-white">Università</v-th>
      </thead>
      <tbody slot="body" slot-scope="{ displayData }" data-view>
        <tr v-for="row in displayData" :key="row.guid">
          <td>
           <a :href="row.h" target="_blank" rel="noopener" class="has-text-danger">{{ row.n }}</a>
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
    <p>
      Qui si possono trovare
      <strong>tutti i corsi di laurea {{ uni }}</strong
      >. I corsi in questione sono relativi
      <strong>all'anno accademico 2020/2021</strong>.
    </p>
    <p>
      <strong> Come funziona?</strong> È molto semplice, basta digitare nella
      barra di ricerca es. "data science" e comparirà la lista di tutti i corsi
      con quel nome. Inoltre cliccando "Livello" vengono ordinati i corsi in
      base al tipo di laurea.
    </p>
    <p>
      <strong>Attenzione!</strong> La colonna test è per indicare quale corso ha
      <strong>test d'ingresso </strong>o è a numero programmato. In quel caso il
      corso sarà segnato come test sì, in caso di accesso libero come test no.
    </p>
    <br />
  </div>
</template>

<script>
//import corsi from "../corsi.json";
import axios from "axios";

export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Corsi di laurea farmacia",
    // all titles will be injected into this template
    titleTemplate: "%s | corsiuniversitari.info",
    meta: [
      {
        name: "description",
        content:
          "In questo sito potrai trovare rapidamente tutti i corsi di laurea di farmacia, tutti raggruppati su una comoda tabella.",
      },
      {
        name: "keywords",
        content: "Corsi di laurea, Corso di laurea, Corsi di laurea farmacia",
      },
    ],
    link: [
      {
        rel: "canonical",
        href: "https://www.corsiuniversitari.info/corsi-di-laurea-farmacia",
      },
  /*     {
        rel: "preload",
        href: "https://json-corsi-fastify.herokuapp.com/corsi?c=LM-13",
        as: "fetch",
      }, */
    ],
  },
  data() {
    return {
      filters: {
        n: { value: "", keys: ["n"] },
      },
      currentPage: 1,
      totalPages: 0,
      uni: "farmacia",
      corsi: [],
    };
  },
  async beforeCreate() {
    try {
      const res = await axios.get(
        "https://json-corsi-fastify.herokuapp.com/corsi?c=LM-13"
      );

      this.corsi = res.data;
    } catch (e) {
      console.log(e);
    }
  },
  /*  methods: {
    FiltraLista: function () {
      var array = [];
      for (var x = 0; x < corsi.length; x++) {
        if (corsi[x].c == "LM-13") {
          array.push(corsi[x]);
        }
      }
      return array;
    },
  }, */
};
</script>
