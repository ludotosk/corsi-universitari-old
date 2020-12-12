<template>
  <div>
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
        <v-th sortKey="t" defaultSort="asc">Tipo Laurea</v-th>
        <v-th sortKey="a" defaultSort="asc">Test</v-th>
        <th>Università</th>
      </thead>
      <tbody slot="body" slot-scope="{ displayData }">
        <tr v-for="row in displayData" :key="row.guid">
          <td>
            <a :href="row.h" target="_blank" rel="noopener">{{ row.n }}</a>
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
  </div>
</template>

<script>
import corsi from "./corsi.json";

export default {
  name: "home",
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "corsiuniversitari.info",
    // all titles will be injected into this template
    titleTemplate: "%s | Il tuo corso di laurea",
    meta: [
      {
        name: "description",
        content:
          "corsiuniversitari.info ti permette di cercare fra tutti i corsi di laurea italiani in base al nome del corso e di trovare quello che fa per te.",
      },
    ],
    link: [{ rel: "canonical", href: "https://www.corsiuniversitari.info/" }],
  },
  data() {
    return {
      corsi,
      filters: {
        n: { value: "", keys: ["n"] },
      },
      currentPage: 1,
      totalPages: 0,
    };
  },
};
</script>

<style scoped>
a,
tr {
  font-size: 0.75rem;
}
table,
body {
  margin: none;
  padding: none;
}
</style>