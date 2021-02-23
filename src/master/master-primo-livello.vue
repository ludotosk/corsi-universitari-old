<template>
  <div class="container-md">
    <br />
    <h1 class="text-secondary">Master di {{livello}}</h1>
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
        v-model="filters.corso.value"
      />
    </div>
    <p>
      <strong>Attenzione!</strong> per eseguire la ricerca serve il nome del
      corso corretto. Es. <strong>biotecnologie</strong> si trova sotto
      "biotecnologie" "biotecnologia" "biotechnology" quindi per avere il
      risultato corretto inserire <strong>"biotec"</strong>. Cioè la parte
      comune a tutti i nomi.
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
        <th>Nome del master</th>
        <th>Livello</th>
        <v-th sortKey="uni" defaultSort="asc">Università</v-th>
      </thead>
      <tbody slot="body" slot-scope="{ displayData }" data-view>
        <tr v-for="row in displayData" :key="row.guid">
          <td>
           <a :href="row.link" target="_blank" rel="noopener" class="text-danger">{{ row.corso }}</a>
          </td>
          <td>{{ row.tipo }}</td>
          <td>{{ row.uni }} </td>
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
      <strong>tutti i master di {{livello}}</strong>.
    </p>
    <p>
      <strong> Come funziona?</strong> È molto semplice, basta digitare nella
      barra di ricerca es. "data science" e comparirà la lista di tutti i corsi
      con quel nome.
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
    title: "Master di Primo Livello",
    // all titles will be injected into this template
    titleTemplate: "%s | corsiuniversitari.info",
    meta: [
      {
        name: "description",
        content:
          "In questo sito potrai trovare rapidamente tutti master di primo livello, tutti raggruppati su una comoda tabella.",
      },
      {
        name: "keywords",
        content:
          "Master di primo livello",
      },
    ],
    link: [
      {
        rel: "canonical",
        href: "https://www.corsiuniversitari.info/master-primo-livello",
      },
    ],
  },
  data() {
    return {
      filters: {
        corso: { value: "", keys: ["corso"] },
      },
      currentPage: 1,
      totalPages: 0,
      livello: "Primo Livello",
      corsi: []
    };
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
};
</script>
