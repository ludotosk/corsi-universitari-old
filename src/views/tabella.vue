<template>
  <div>
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
              class="has-text-danger"
              >{{ row.n }}</a
            >
          </td>
          <td>{{ row.t }}</td>
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
    <a
      href="https://www.corsiuniversitari.info/tutti-i-corsi-di-laurea"
      class="has-text-danger"
      target="_blank"
      id="link-sito"
      >corsiuniversitari.info</a
    >
  </div>
</template>

<script>
export default {
  name: "home",
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Tabella",
    // all titles will be injected into this template
    titleTemplate: "%s | corsiuniversitari.info",
    meta: [{ name: "robots", content: "noindex" }],
    link: [
      {
        rel: "preload",
        as: "fetch",
        href: "https://www.corsiuniversitari.info/api/corsi",
        crossorigin: "anonymous"
      }
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
  async mounted() {
    try {
      fetch("https://www.corsiuniversitari.info/api/corsi")
        .then((response) => response.json())
        .then((data) => (this.corsi = data));
    } catch (e) {
      console.log(e);
    }
  },
};
</script>

<style scoped>
@media screen and (max-width: 768px) {
  a,
  tr {
    font-size: 0.75rem;
  }
  table,
  body {
    margin: none;
    padding: none;
  }
  #link-sito {
    font-size: 1rem;
  }
}
</style>
