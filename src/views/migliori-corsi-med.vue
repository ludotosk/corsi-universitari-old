<template>
  <div class="container is-fullhd">
    <br />
    <h1 class="has-text-centered is-size-2 has-text-dark has-text-left">
      Migliori università di medicina [2020]
    </h1>
    <h2 class="has-text-centered is-size-3 has-text-dark has-text-left">
      Qual è l'università di medicina migliore d'Italia?
    </h2>
    <hr />
    <p>
      Ogni anno
      <a
        href="https://als-fattore2a.org/"
        rel="noopener"
        target="_blank"
        class="has-text-danger"
        >Associazione Liberi Specializzandi</a
      >
      rilascia la classifica delle migliori unviersità Italiane in relazione ai
      punteggi conseguiti dai candidati SSM rispetto all'università dove si sono
      laureati. Le fonti di questa classifica sono la graduatoria SMM e i dati
      provenienti dalla Fnomceo. Noi oltre a riportare la loro classifica
      annuale abbiamo anche fatto una media delle classifiche degli ultimi tre
      anni, grazie a questa accortezza i dati sono più precisi in quanto si
      basano su un campione più ampio.
      <router-link to="/migliori-universita-italiane" class="has-text-danger">
        Se invece vuoi scoprire quali sono le migliori università italiane
        clicca qui</router-link
      >!
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
    <div>
      <label for="2020">
        <input type="checkbox" class="checkbox" id="2020" v-model="venti" />
        2020
      </label>
      <label for="2019">
        <input
          type="checkbox"
          class="checkbox"
          id="2019"
          v-model="diciannove"
        />
        2019
      </label>
      <label for="2018">
        <input type="checkbox" class="checkbox" id="2018" v-model="diciotto" />
        2018
      </label>
    </div>
    <br />
    <v-table
      :data="corsi"
      :filters="filters"
      class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth"
    >
      <thead slot="head" class="has-background-dark">
        <v-th sortKey="uni" defaultSort="asc" class="has-text-white"
          >Università</v-th
        >
        <v-th sortKey="media" defaultSort="asc" class="has-text-white"
          >Media 3 anni</v-th
        >
        <v-th sortKey="venti" defaultSort="asc" class="has-text-white" v-if="venti"
          >2020</v-th
        >
        <v-th sortKey="diciannove" defaultSort="asc" class="has-text-white" v-if="diciannove"
          >2019</v-th
        >
        <v-th sortKey="diciotto" defaultSort="asc" class="has-text-white" v-if="diciotto"
          >2018</v-th
        >
      </thead>
      <tbody slot="body" slot-scope="{ displayData }" data-view>
        <tr v-for="row in displayData" :key="row.guid">
          <td class="has-text-weight-medium">
            {{ row.uni }}
          </td>
          <td class="has-text-weight-medium">{{ row.media }}</td>
          <td class="has-text-weight-medium" v-if="venti">{{ row.venti }}</td>
          <td class="has-text-weight-medium" v-if="diciannove">{{ row.diciannove }}</td>
          <td class="has-text-weight-medium" v-if="diciotto">{{ row.diciotto }}</td>
        </tr>
      </tbody>
    </v-table>
    <p>
      <a
        href="https://als-fattore2a.org/"
        rel="noopener"
        target="_blank"
        class="has-text-danger"
        >Fonte: Associazione Liberi Specializzandi</a
      >
    </p>
    <br />
  </div>
</template>


<script>
import corsi from "../assets/migliori-med.json";

export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Migliori università di medicina [2020] 👩‍⚕️",
    // all titles will be injected into this template
    titleTemplate: "%s | corsiuniversitari.info",
    meta: [
      {
        name: "description",
        content:
          "Quali sono le migliori università di medicina? Visita la nostra pagina con la classifica degli ultimi tre anni di als!",
      },
      {
        name: "keywords",
        content: "migliori lauree, corsi di laurea, medicina",
      },
    ],
    link: [
      {
        rel: "canonical",
        href: "https://www.corsiuniversitari.info/migliori-universita-medicina",
      },
    ],
  },
  data() {
    return {
      corsi: corsi,
      venti: false,
      diciannove: false,
      diciotto: false,
      filters: {
        n: { value: "", keys: ["uni"] },
      },
    };
  },
};
</script>