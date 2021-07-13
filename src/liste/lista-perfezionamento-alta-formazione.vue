<template>
  <div class="container is-fullhd">
    <br />
    <h1 class="has-text-centered is-size-2 has-text-grey has-text-left">
      Lista corsi di perfezionamento - alta formazione
    </h1>
    <h2 class="has-text-grey is-size-2">
      Quali sono i corsi di perfezionamento? [lista completa]
    </h2>
    <hr />
    <p>
      Qui si possono trovare oltre
      <strong>800 corsi di perfezionamento - alta formazione</strong>, cioè
      tutti i corsi di perfezionamento - alta formazione esistenti in Italia.
      Aggiornati al 2020/2021
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
    </p>
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
          <th class="has-text-white">Nome del master</th>
          <th class="has-text-white">Livello</th>
          <th class="has-text-white">Arco</th>
          <v-th class="has-text-white" sortKey="uni" defaultSort="asc"
            >Università</v-th
          >
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
    </div>
    <table
      class="table is-bordered is-hoverable is-fullwidth"
      v-if="cerca == false"
    >
      <thead class="has-background-dark">
        <th class="has-text-white">Nome corso</th>
        <th class="has-text-white">Arco</th>
        <th class="has-text-white">Università</th>
      </thead>
      <tbody v-for="corso in corsi" :key="corso.corso">
        <tr data-view>
          <td><a :href="corso.link" class="text-break has-text-danger">{{ corso.corso }}</a></td>
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
        href: "https://www.corsiuniversitari.info/lista-perfezionamento-alta-formazione",
      },
    ],
  },
  data() {
    return {
      corsi: [],
      filters: {
        corso: { value: "", keys: ["corso"] },
      },
      currentPage: 1,
      totalPages: 0,
      livello: "Corso Perfezionamento - Alta Formazione",
      cerca: false,
    };
  },
  async beforeCreate() {
    try {
      const res = await axios.get(
        "https://json-corsi-fastify.herokuapp.com/master?tipo=Corso%20di%20Perfezionamento/Alta%20Formazione&_sort=corso,uni&_order=asc,asc"
      );

      this.corsi = res.data;
    } catch (e) {
      console.log(e);
    }
  },
  watch: {
    "filters.corso.value": function () {
      this.cerca = true;
    },
  },
};
</script>
