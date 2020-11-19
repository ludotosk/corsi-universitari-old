<template>
  <v-table :data="corsi">
    <thead slot="head">
      <th>Nome corso</th>
      <th>Tipo Laurea</th>
      <th>Università</th>
    </thead>
      <tbody slot="body" slot-scope="{displayData}">
        <tr v-for="row in displayData" :key="row.titoloTxt">
          <td><a :href="row.hrefTxt">{{ row.titoloTxt }}</a></td>
          <td>{{ row.tipoLaurea }}</td>
          <td>{{ row.uni }}</td>
        </tr>
    </tbody>
  </v-table>
</template>

<script>
import corsi from "../public/corsi.json";

export default {
  name: "App",
  data() {
    return {
      corsi,
    };
  },
};
</script>
