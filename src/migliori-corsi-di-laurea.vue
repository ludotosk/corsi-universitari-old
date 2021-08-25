<template>
  <div class="container is-fullhd">
    <br />
    <h1 class="has-text-centered is-size-2 has-text-dark has-text-left">
      Migliori lauree per trovare lavoro [2020]
    </h1>
    <h2 class="has-text-centered is-size-3 has-text-dark has-text-left">
      Quale laurea ti permette di guadagnare di più?
    </h2>
    <hr />
    <p>
      Quali sono le migliori lauree dal punto di vista del guadango e
      dell'occupazione? In questa tabella filtrata e ordinabile potrete trovare
      i dati forniti da alma laurea nell'indagine 2020, i dati sono relativi ai
      laureati da tre anni. I corsi di laurea selezionati riguardano le classi
      di laurea dei corsi magistrali e delle magistrali a ciclo unico. Per
      ulteriori informazioni su metologia e campione dei dati vi invito ad
      andare sul link in fondo alla tabella. <router-link to="/migliori-universita-italiane" class="has-text-danger"> Se invece vuoi scoprire quali sono
      le migliori università italiane clicca qui</router-link>!
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
            v-model="filters.n.value"
          />
        </div>
      </div>
    </div>
    <br />
    <v-table
      :data="corsi"
      :filters="filters"
      class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth"
    >
      <thead slot="head" class="has-background-dark">
        <v-th sortKey="Classe" defaultSort="asc" class="has-text-white"
          >Classe di laurea</v-th
        >
        <v-th sortKey="Occupazione" defaultSort="asc" class="has-text-white"
          >Occupazione %</v-th
        >
        <v-th sortKey="Stipendio" defaultSort="asc" class="has-text-white"
          >Stipendio medio netto €</v-th
        >
      </thead>
      <tbody slot="body" slot-scope="{ displayData }" data-view>
        <tr v-for="row in displayData" :key="row.guid">
          <td class="has-text-weight-medium">
            {{ row.Classe }}
          </td>
          <td class="has-text-weight-medium">{{ row.Occupazione }}</td>
          <td class="has-text-weight-medium">{{ row.Stipendio }}</td>
        </tr>
      </tbody>
    </v-table>
    <p>
      <a
        href="https://www2.almalaurea.it/cgi-php/universita/statistiche/tendine.php?config=profilo&lang=it"
        rel="noopener"
        target="_blank"
        class="has-text-danger"
        >Fonte: alma laurea</a
      >
    </p>
    <br />
  </div>
</template>


<script>
import corsi from "./migliori-corsi.json";

export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Migliori lauree per trovare lavoro [2020]",
    // all titles will be injected into this template
    titleTemplate: "%s | corsiuniversitari.info",
    meta: [
      {
        name: "description",
        content:
          "Quali sono le migliori lauree per stipendio e per occupazione? In questa pagina potrai trovare una tabella contenente tutti i dati per scoprirlo!",
      },
      {
        name: "keywords",
        content:
          "migliori lauree, corsi di laurea, lauree per trovare lavoro, lauree per stipendio",
      },
    ],
    link: [
      {
        rel: "canonical",
        href: "https://www.corsiuniversitari.info/migliori-corsi-di-laurea",
      },
    ],
  },
  data() {
    return {
      corsi: corsi,
      filters: {
        n: { value: "", keys: ["Classe"] },
      },
    };
  },
};
</script>