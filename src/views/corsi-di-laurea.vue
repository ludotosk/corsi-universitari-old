<template>
  <div class="container is-fullhd">
    <br />
    <h1 class="has-text-centered is-size-2 has-text-dark has-text-left">
      Tutti i Corsi di Laurea esistenti [2021/2022]
    </h1>
    <h2 class="has-text-centered is-size-3 has-text-dark has-text-left">
      Quali sono tutti i corsi di laurea?
    </h2>
    <!--     <hr />
    <p>Quali sono <strong>tutti i corsi di laurea Italiani esistenti</strong>? Qui puoi trovare la <strong>lista completa</strong> aggiornata <strong>all'anno accademico 2020/2021/2022</strong>!</p> -->
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
    <!--    <p>
    <strong>Attenzione!</strong> per eseguire la ricerca serve il nome del
    corso corretto. Es. <strong>biotecnologie</strong> si trova sotto
    "biotecnologie" "biotecnologia" "biotechnology" quindi per avere il
    risultato corretto inserire <strong>"biotec"</strong>. Cioè la parte
    comune a tutti i nomi. Il resto della <strong>guida</strong> è sotto la
    tabella.
  </p> -->
    <br />
    <v-table
      v-if="carico"
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
          <td class="has-text-weight-medium">
            <a
              :href="row.h"
              target="_blank"
              rel="noopener"
              >{{ row.n }}</a
            >
          </td>
          <td class="has-text-weight-medium">Corso di Laurea {{ row.t }}</td>
          <td class="has-text-weight-medium">{{ row.a }}</td>
          <td class="has-text-weight-medium">{{ row.u }}</td>
        </tr>
      </tbody>
    </v-table>
    <smart-pagination
      v-if="carico"
      :currentPage.sync="currentPage"
      :totalPages="totalPages"
      :maxPageLinks="4"
    />
    <br />
    <p>
      <strong>Corsiuniversitari.info </strong>è stato realizzato per aiutarti a
      trovare il tuo corso di laurea. In questo sito ci sono i corsi di tutte le
      università italiane.
    </p>
    <p>
      <strong> Come funziona?</strong> È molto semplice, basta digitare nella
      barra di ricerca es. "data science" e comparirà la lista di tutti i corsi
      con quel nome. Inoltre cliccando "Livello" vengono ordinati i corsi in
      base al tipo di laurea.
    </p>
    <p>
      <strong>Attenzione!</strong> La colonna test è per indicare quale corso ha
      <strong>test d'ingresso </strong>o è a numero programmato. In quel caso il
      corso sarà segnato come test sì, in caso di accesso libero come test no.
    </p>
    <br />
  </div>
</template>

<script>
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Tutti i corsi di laurea esistenti [2021/2022] ✅",
    meta: [
      {
        name: "description",
        content:
          "corsiuniversitari.info ti permette di cercare fra tutti i corsi di laurea del 2021/2022 in base al nome del corso e di trovare quello che fa per te.",
      },
      {
        name: "keywords",
        content:
          "Corsi di laurea, Corso di laurea, Corsi universitari, tutti i corsi di laurea, 2021/2022",
      },
    ],
    link: [
      {
        rel: "canonical",
        href: "https://www.corsiuniversitari.info/",
      },
      {
        rel: "preload",
        as: "fetch",
        href: "https://json-corsi-fastify.herokuapp.com/corsi",
        crossorigin: "anonymous",
      },
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
      carico: false,
    };
  },
  async mounted() {
    try {
      fetch("https://json-corsi-fastify.herokuapp.com/corsi")
        .then((response) => response.json())
        .then((data) => {
          this.corsi = data;
          this.carico = true;
        });
    } catch (e) {
      console.log(e);
    }
  },
};
</script>
