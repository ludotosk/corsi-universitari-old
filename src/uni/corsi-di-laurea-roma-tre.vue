<template>
  <div class="container-md">
    <br />
    <h1 class="text-secondary">Corsi di laurea {{uni}}</h1>
    <br />
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <label class="input-group-text" id="basic-addon3" for="basic-url"
          >Filtra in base al nome:</label
        >
      </div>
      <input
        type="text"
        class="form-control"
        id="basic-url"
        aria-describedby="basic-addon3"
        v-model="filters.n.value"
      />
    </div>
    <p>
      <strong>Attenzione!</strong> per eseguire la ricerca serve il nome del
      corso corretto. Es. <strong>biotecnologie</strong> si trova sotto
      "biotecnologie" "biotecnologia" "biotechnology" quindi per avere il
      risultato corretto inserire <strong>"biotec"</strong>. Cioè la parte
      comune a tutti i nomi. Il resto della <strong>guida</strong> è sotto la
      tabella
    </p>
    <v-table
      :data="corsi"
      :filters="filters"
      :pageSize="15"
      @totalPagesChanged="totalPages = $event"
      :currentPage.sync="currentPage"
      class="table table-striped table-hover table-sm table-bordered"
    >
      <thead slot="head" class="thead-dark">
        <th>Corso di laurea</th>
        <v-th sortKey="t" defaultSort="asc">Livello</v-th>
        <v-th sortKey="a" defaultSort="asc">Test</v-th>
        <th>Università</th>
      </thead>
      <tbody slot="body" slot-scope="{ displayData }" data-view>
        <tr v-for="row in displayData" :key="row.guid">
          <td>
            <a :href="row.h" target="_blank" rel="noopener">{{ row.n }}</a>
          </td>
          <td>Corso di Laurea {{ row.t }}</td>
          <td>{{ row.a }}</td>
          <td>{{uni}} </td>
        </tr>
      </tbody>
    </v-table>
    <smart-pagination
      :currentPage.sync="currentPage"
      :totalPages="totalPages"
      :maxPageLinks="5"
    />
    <br />
    <p>
      Qui si possono trovare
      <strong>tutti i corsi di laurea {{uni}}</strong>. I corsi in questione sono relativi
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
import axios from "axios";

export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Corsi di laurea Roma Tre",
    // all titles will be injected into this template
    titleTemplate: "%s | corsiuniversitari.info",
    meta: [
      {
        name: "description",
        content:
          "In questo sito potrai trovare rapidamente tutti i corsi di laurea roma tre, tutti raggruppati su una comoda tabella.",
      },
      {
        name: "keywords",
        content:
          "Corsi di laurea, Corso di laurea, Corsi di laurea roma tre",
      },
    ],
    link: [
      {
        rel: "canonical",
        href: "https://www.corsiuniversitari.info/corsi-di-laurea-roma-tre",
      },
    ],
  },
  data() {
    return {
      filters: {
        n: { value: "", keys: ["n"] },
      },
      currentPage: 1,
      totalPages: 0,
      uni: "Roma Tre",
      corsi: []
    };
  },
  async beforeCreate() {
    try {
      const res = await axios.get(
        'https://json-server-corsi.herokuapp.com/corsi?u=Università degli Studi ROMA TRE'
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
        if (corsi[x].u == "Università degli Studi ROMA TRE") {
          array.push(corsi[x]);
        }
      }
      return array;
    },
  }, */
};
</script>
