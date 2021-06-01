<template>
  <div class="container is-fullhd">
    <br />
    <h1 class="has-text-centered is-size-2 has-text-grey has-text-left">
      Master di primo livello [lista 2021]
    </h1>
    <br />
    <h2 class="has-text-grey is-size-2">
      Quali sono i master di primo livello? Ecco la lista!
    </h2>
    <hr />
    <p>
      <strong>Attenzione!</strong> questa pagina fornisce solo la lista dei
      master di primo livello, per avere il
      <strong>link alla pagina del corso</strong> e la
      <strong>funzione di filtro</strong>
      <b @click="cerca = true" class="has-text-danger"> clicca qui!</b>
      <!--       <router-link to="/master-primo-livello" class="has-text-danger">
        visita questa pagina</router-link
      >. -->
    </p>
    <p>
      Qui si possono trovare oltre
      <strong>1700 master di primo livello</strong>.
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
            <td>{{ row.tipo }}</td>
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
    <table class="table is-bordered" v-if="cerca == false">
      <thead class="has-background-dark">
        <th class="has-text-white">Nome master</th>
        <th class="has-text-white">Arco</th>
        <th class="has-text-white">Università</th>
      </thead>
      <tbody v-for="corso in corsi" :key="corso.corso">
        <tr data-view>
          <td class="text-break">{{ corso.corso }}</td>
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
    title: "Master di primo livello [lista 2021]",
    // all titles will be injected into this template
    titleTemplate: "%s | corsiuniversitari.info",
    meta: [
      {
        name: "description",
        content:
          "In questa pagina puoi trovare la lista di tutti i master di primo livello Italiani.",
      },
      {
        name: "keywords",
        content: "Master di primo livello",
      },
    ],
    link: [
      {
        rel: "canonical",
        href: "https://www.corsiuniversitari.info/lista-master-primo-livello",
      },
    ],
  },
  data() {
    return {
      corsi: [],
      cerca: false,
      filters: {
        corso: { value: "", keys: ["corso"] },
      },
      currentPage: 1,
      totalPages: 0,
    };
  },
  async beforeCreate() {
    try {
      const res = await axios.get(
        "https://json-corsi-fastify.herokuapp.com/master?tipo=Master di Primo Livello&_sort=corso,uni&_order=asc,asc"
      );

      this.corsi = res.data;
    } catch (e) {
      console.log(e);
    }
  },
  /*  methods: {
    FiltraLista: function () {
      var triennale = [];
      for (var x = 0; x < corsi.length; x++) {
        if (corsi[x].t == "Magistrale a Ciclo Unico") {
          triennale.push(corsi[x]);
        }
      }
      return triennale;
    },
  }, */
};
</script>
