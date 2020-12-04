<template>
  <div>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon3"
          >Filtra in base al nome:</span
        >
      </div>
      <input
        type="text"
        class="form-control"
        id="basic-url"
        aria-describedby="basic-addon3"
        v-model="filters.nomeCorso.value"
      />
    </div>
    <v-table
      :data="corsi"
      :filters="filters"
      :pageSize="50"
      @totalPagesChanged="totalPages = $event"
      :currentPage.sync="currentPage"
      class="table table-striped table-hover table-sm"
    >
      <thead slot="head" class="thead-dark">
        <th>Nome corso</th>
        <v-th :sortKey="nameLength" defaultSort="desc">Tipo Laurea</v-th>
        <th>Università</th>
      </thead>
      <tbody slot="body" slot-scope="{ displayData }">
        <tr v-for="row in displayData" :key="row.guid">
          <td>
            <a :href="row.hrefTxt">{{ row.nomeCorso }}</a>
          </td>
          <td>{{ row.tipoLaurea }}</td>
          <td>{{ row.uni }}</td>
        </tr>
      </tbody>
    </v-table>
    <smart-pagination
      :currentPage.sync="currentPage"
      :totalPages="totalPages"
    />
  </div>
</template>

<script>
import corsi from "../public/corsi.json";

export default {
  name: "App",
  data() {
    return {
      corsi,
      filters: {
        nomeCorso: { value: "", keys: ["nomeCorso"] },
      },
      currentPage: 1,
      totalPages: 0,
    };
  },
  methods: {
    nameLength (row) {
      return row.tipoLaurea.length
    },
  },
};
</script>

<style>
table,
th,
td {
  border: 1px solid black;
}
</style>