<template>
  <v-container>
    <v-card>
      <v-card-title>
        Corsi di Laurea
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="corsi"
        :search="search"
      ></v-data-table>
    </v-card>
  </v-container>
</template>

<script>
import corsiFile from "../public/corsi.json";

export default {
  name: "App",
  data() {
    return {
      search: '',
      headers: [
        {
          text: "Nome",
          align: "start",
          sortable: false,
          value: "titoloTxt",
        },
        {
          text: "Link",
          align: "start",
          sortable: false,
          value: "hrefTxt",
        },
        {
          text: "Tipo di Laurea",
          align: "start",
          sortable: false,
          value: "tipoLaurea",
        },
        {
          text: "Università",
          align: "start",
          sortable: false,
          value: "uni",
        },
      ],
      corsi: corsiFile,
    };
  },
};
</script>
