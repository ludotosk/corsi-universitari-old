<template>
  <div>
    <label>Filtra in base al nome:</label>
    <input class="form-control" v-model="filters.nomeCorso.value" />
    <v-table :data="corsi" :filters="filters">
      <thead slot="head">
        <th>Nome corso</th>
        <th>Tipo Laurea</th>
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
    };
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