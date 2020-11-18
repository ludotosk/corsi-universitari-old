<template>
  <v-container>
    <v-simple-table fixed-header height="100%">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Nome corso</th>
            <th class="text-left">Tipo corso</th>
            <th class="text-letf">Università</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in corsi" :key="item.titoloTxt">
            <td>
              <a :href="item.hrefTxt">{{ item.titoloTxt }}</a>
            </td>
            <td>{{ item.tipoLaurea }}</td>
            <td>{{ item.uni }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
import corsiFile from "../public/corsi.json";

export default {
  name: "App",
  data() {
    return {
      corsi: corsiFile,
    };
  },
};
</script>
