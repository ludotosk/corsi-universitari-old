<template>
  <div class="container-md">
    <br />
    <h1 class="text-secondary">Tutti i Corsi di Laurea</h1>
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
      tabella.
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
        <v-th sortKey="u" defaultSort="asc">Università</v-th>
      </thead>
      <tbody slot="body" slot-scope="{ displayData }" data-view>
        <tr v-for="row in displayData" :key="row.guid">
          <td>
            <a
              :href="row.h"
              target="_blank"
              rel="noopener"
              class="text-danger"
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
      :maxPageLinks="5"
    />
    <br />
    <p>
      <strong>Corsiuniversitari.info </strong>è stato realizzato per aiutarti a
      trovare il tuo corso di laurea. In questo sito ci sono i corsi di tutte le
      università italiane.
    </p>
    <p>
      Qui si possono trovare
      <strong>tutti i corsi di laurea</strong> italiani che ho estrapolato da un
      sito istituzionale. I corsi in questione sono relativi
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
    title: "Tutti i corsi di laurea",
    // all titles will be injected into this template
    titleTemplate: "%s | corsiuniversitari.info",
    meta: [
      {
        name: "description",
        content:
          "corsiuniversitari.info ti permette di cercare fra tutti i corsi di laurea italiani in base al nome del corso e di trovare quello che fa per te.",
      },
      {
        name: "keywords",
        content:
          "Corsi di laurea, Corso di laurea, Corsi universitari, tutti i corsi di laurea",
      },
    ],
    link: [
      {
        rel: "canonical",
        href: "https://www.corsiuniversitari.info/tutti-i-corsi-di-laurea",
      },
    ],
  },
  data() {
    return {
      corsi: [],
      filters: {
        n: { value: "", keys: ["n"] },
      },
      currentPage: 1,
      totalPages: 0,
    };
  },
  async beforeCreate() {
/*     try {
      const res = await axios.get(
        "https://json-server-corsi.herokuapp.com/corsi?_sort=u,a,t&_order=asc,desc,desc"
      );

      this.corsi = res.data;
    } catch (e) {
      console.log(e);
    } */
    try {
      const res = await axios.get(
        "/.netlify/functions/api"
      );
      
      this.corsi = res.data;
    } catch (e) {
      console.log(e);
    }
  },
};
</script>
