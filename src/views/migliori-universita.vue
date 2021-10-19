<template>
  <div class="container is-fullhd">
    <br />
    <h1 class="has-text-centered is-size-2 has-text-dark has-text-left">
      Migliori università Italiane 2021/2022/2021/2022
    </h1>
    <h2 class="has-text-centered is-size-3 has-text-dark has-text-left">
      Qual'è la migliore università in Italia?
    </h2>
    <hr />
    <p>
      Queli sono i migliori atenei Italiani? Ecco la risposta secondo
      <a
        rel="noopener"
        class="has-text-danger"
        target="_blank"
        href="https://www.censis.it/formazione/la-classifica-censis-delle-universit%C3%A0-italiane-edizione-2021/20222021/2022/gli-atenei-statali"
        >il rapporto Censis 2021/2022/2021/2022</a
      >! Prima di lasciarvi alla tabella vi faccio notare come non ci siano i
      dati di occupabilità per le università non statali, quindi nella colonna
      troverete 0 come punteggio. Come potrete vedere il punteggio va da 0 a 110
      quindi non si esprime in termini percentuali, per la leggenda sulla
      dimesione degli atenei vi rimando sotto alla tabella invece per
      <router-link to="/migliori-corsi-di-laurea" class="has-text-danger"
        >la classifica dei migliori corsi di laurea clicca qui.</router-link
      >
      Buona lettura!
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
    <div class="is-hidden-touch">
      <label for="borse">
        <input type="checkbox" class="checkbox" id="borse" v-model="borse" />
        Borse di studio
      </label>
      <label for="Comunicazione">
        <input
          type="checkbox"
          class="checkbox"
          id="Comunicazione"
          v-model="comunicazione"
        />
        Comunicazione e servizi digitali
      </label>
      <label for="inter">
        <input type="checkbox" class="checkbox" id="inter" v-model="inter" />
        Internazionalizzazione
      </label>
      <label for="occupabilita">
        <input
          type="checkbox"
          class="checkbox"
          id="occupabilita"
          v-model="occupabilita"
        />
        Occupabilita
      </label>
      <label for="servizi">
        <input
          type="checkbox"
          class="checkbox"
          id="servizi"
          v-model="servizi"
        />
        Servizi
      </label>
      <label for="strutture">
        <input
          type="checkbox"
          class="checkbox"
          id="strutture"
          v-model="strutture"
        />
        Strutture
      </label>
    </div>
    <div class="is-hidden-desktop">
      <label for="borse">
        <input type="checkbox" class="checkbox" id="borse" v-model="borse" />
        Borse di studio
      </label>
      <br />
      <label for="Comunicazione">
        <input
          type="checkbox"
          class="checkbox"
          id="Comunicazione"
          v-model="comunicazione"
        />
        Comunicazione e servizi digitali
      </label>
      <br />
      <label for="inter">
        <input type="checkbox" class="checkbox" id="inter" v-model="inter" />
        Internazionalizzazione
      </label>
      <br />
      <label for="occupabilita">
        <input
          type="checkbox"
          class="checkbox"
          id="occupabilita"
          v-model="occupabilita"
        />
        Occupabilita
      </label>
      <br />
      <label for="servizi">
        <input
          type="checkbox"
          class="checkbox"
          id="servizi"
          v-model="servizi"
        />
        Servizi
      </label>
      <br />
      <label for="strutture">
        <input
          type="checkbox"
          class="checkbox"
          id="strutture"
          v-model="strutture"
        />
        Strutture
      </label>
    </div>
    <br />
    <v-table
      :data="corsi"
      :filters="filters"
      class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth"
    >
      <thead slot="head" class="has-background-dark">
        <v-th sortKey="ateneo" defaultSort="asc" class="has-text-white"
          >Ateneo</v-th
        >
        <v-th sortKey="dimensione" defaultSort="asc" class="has-text-white"
          >Dimensioni</v-th
        >
        <v-th sortKey="tipologia" defaultSort="asc" class="has-text-white"
          >Tipologia</v-th
        >
        <v-th
          sortKey="borse"
          defaultSort="asc"
          class="has-text-white"
          v-if="borse"
          >Borse</v-th
        >
        <v-th
          sortKey="comunicazione"
          defaultSort="asc"
          class="has-text-white"
          v-if="comunicazione"
          >Comunicazione e servizi digitali</v-th
        >
        <v-th
          sortKey="internazionalizzazione"
          defaultSort="asc"
          class="has-text-white"
          v-if="inter"
          >Internazionalizzazione</v-th
        >
        <v-th
          sortKey="occupabilita"
          defaultSort="asc"
          class="has-text-white"
          v-if="occupabilita"
          >Occupabilita</v-th
        >
        <v-th
          sortKey="servizi"
          defaultSort="asc"
          class="has-text-white"
          v-if="servizi"
          >Servizi</v-th
        >
        <v-th
          sortKey="strutture"
          defaultSort="asc"
          class="has-text-white"
          v-if="strutture"
          >Strutture</v-th
        >
        <v-th sortKey="punteggio" defaultSort="asc" class="has-text-white"
          >Punteggio</v-th
        >
      </thead>
      <tbody slot="body" slot-scope="{ displayData }" data-view>
        <tr v-for="row in displayData" :key="row.guid">
          <td class="has-text-weight-medium">
            {{ row.ateneo }}
          </td>
          <td class="has-text-weight-medium">{{ row.dimensione }}</td>
          <td class="has-text-weight-medium">
            {{ row.tipologia }}
          </td>
          <td class="has-text-weight-medium" v-if="borse">{{ row.borse }}</td>
          <td class="has-text-weight-medium" v-if="comunicazione">
            {{ row.comunicazione }}
          </td>
          <td class="has-text-weight-medium" v-if="inter">
            {{ row.internazionalizzazione }}
          </td>
          <td class="has-text-weight-medium" v-if="occupabilita">
            {{ row.occupabilita }}
          </td>
          <td class="has-text-weight-medium" v-if="servizi">
            {{ row.servizi }}
          </td>
          <td class="has-text-weight-medium" v-if="strutture">
            {{ row.strutture }}
          </td>
          <td class="has-text-weight-medium">{{ row.punteggio }}</td>
        </tr>
      </tbody>
    </v-table>
    <p>
      <a
        class="has-text-danger"
        rel="noopener"
        target="_blank"
        href="https://www.censis.it/formazione/la-classifica-censis-delle-universit%C3%A0-italiane-edizione-2021/20222021/2022/gli-atenei-statali"
        >Fonte: Censis</a
      >
    </p>
    <br />
    <table
      class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth"
    >
      <thead class="has-background-dark">
        <th class="has-text-white">Tipo</th>
        <th class="has-text-white">Dimensione</th>
        <th class="has-text-white">Numero studenti</th>
      </thead>
      <tbody>
        <tr>
          <td>Statali</td>
          <td>Mega</td>
          <td>Oltre 40000</td>
        </tr>
        <tr>
          <td>Statali</td>
          <td>Grandi</td>
          <td>20000-40000</td>
        </tr>
        <tr>
          <td>Statali</td>
          <td>Medi</td>
          <td>10000-20000</td>
        </tr>
        <tr>
          <td>Statali</td>
          <td>Piccoli</td>
          <td>Fino a 10000</td>
        </tr>
        <tr>
          <td>Non statali</td>
          <td>Grandi</td>
          <td>Oltre 10000</td>
        </tr>
        <tr>
          <td>Non statali</td>
          <td>Medi</td>
          <td>5000-10000</td>
        </tr>
        <tr>
          <td>Non statali</td>
          <td>Piccoli</td>
          <td>Fino a 5000</td>
        </tr>
      </tbody>
    </table>
    <br />
  </div>
</template>

<script>
import corsi from "../assets/migliori-uni.json";

export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Migliori università italiane 2021/2022/2021/2022",
    // all titles will be injected into this template
    titleTemplate: "%s | Classifica Censis",
    meta: [
      {
        name: "description",
        content:
          "Quali sono le migliori università 2021/2022/2021/2022? Abbiamo creato una tabella consultabile con tutti i punteggi Censis di tutte le università italiane!",
      },
      {
        name: "keywords",
        content: "migliori università, classifica censis",
      },
    ],
    link: [
      {
        rel: "canonical",
        href: "https://www.corsiuniversitari.info/migliori-universita-italiane",
      },
    ],
  },
  data() {
    return {
      borse: false,
      comunicazione: false,
      inter: false,
      occupabilita: false,
      servizi: false,
      strutture: false,
      corsi: corsi,
      filters: {
        n: { value: "", keys: ["ateneo"] },
      },
    };
  },
};
</script>