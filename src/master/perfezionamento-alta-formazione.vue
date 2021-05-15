<template>
  <div class="container is-fullhd">
    <br />
   <h1 class="has-text-centered is-size-2 has-text-grey has-text-left">Corsi di Perfezionamento - Alta Formazione</h1>
    <br />
    <div class="field is-horizontal">
      <div class="field-body">
        <div class="field has-addons">
          <p class="control">
            <a class="button is-static has-text-weight-medium has-text-black">Filtra in base al nome:</a>
          </p>
          <input
            type="text"
            class="input"
            id="basic-url"
            aria-describedby="basic-addon3"
            v-model="filters.corso.value"
          />
        </div>
      </div>
    </div>
    <p>
      <strong>Attenzione!</strong> per eseguire la ricerca serve il nome del
      corso corretto. Es. <strong>biotecnologie</strong> si trova sotto
      "biotecnologie" "biotecnologia" "biotechnology" quindi per avere il
      risultato corretto inserire <strong>"biotec"</strong>. Cioè la parte
      comune a tutti i nomi.
    </p><br>
    <v-table
      :data="corsi"
      :filters="filters"
      :pageSize="15"
      @totalPagesChanged="totalPages = $event"
      :currentPage.sync="currentPage"
      class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth"
    >
      <thead slot="head" class="has-background-dark">
          <th class="has-text-white">Nome del master</th>
        <th class="has-text-white">Livello</th>
        <th class="has-text-white">Arco</th>
        <v-th class="has-text-white" sortKey="uni" defaultSort="asc">Università</v-th>
      </thead>
      <tbody slot="body" slot-scope="{ displayData }" data-view>
        <tr v-for="row in displayData" :key="row.guid">
          <td>
            <a
              :href="row.link"
              target="_blank"
              rel="noopener"
              class="has-text-danger"
              >{{ row.corso }}</a
            >
          </td>
          <td class="text-break">{{ livello }}</td>
          <td>{{ row.durata }}</td>
          <td>{{ row.uni }}</td>
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
      <strong>tutti i corsi di perfezionamento - alta formazione</strong
      >.
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
    title: "Corsi perfezionamento - alta formazione",
    // all titles will be injected into this template
    titleTemplate: "%s | corsiuniversitari.info",
    meta: [
      {
        name: "description",
        content:
          "In questo sito potrai trovare rapidamente tutti i corsi di perfezionamento - alta formazione, tutti raggruppati su una comoda tabella.",
      },
      {
        name: "keywords",
        content: "Master di Secondo livello",
      },
    ],
    link: [
      {
        rel: "canonical",
        href: "https://www.corsiuniversitari.info/perfezionamento-alta-formazione",
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
      livello: "Corso Perfezionamento - Alta Formazione",
      corsi: [],
    };
  },
  async beforeCreate() {
    try {
      const res = await axios.get(
        "https://json-server-corsi.herokuapp.com/master?tipo=Corso%20di%20Perfezionamento/Alta%20Formazione&_sort=corso,uni&_order=asc,asc"
      );

      this.corsi = res.data;
    } catch (e) {
      console.log(e);
    }
  },
};
</script>