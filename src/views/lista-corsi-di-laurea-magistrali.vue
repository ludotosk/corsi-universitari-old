<template>
  <div class="container is-fullhd">
    <br />
    <h1 class="has-text-centered is-size-2 has-text-dark has-text-left">
      Corsi di laurea magistrali [lista 2021/2022]
    </h1>
    <h2 class="has-text-centered is-size-3 has-text-dark has-text-left">
      Quali sono i corsi di laurea magistrali? Ecco la lista!
    </h2>
    <!--     <hr />
    <p>
      Qui si possono trovare oltre
      <strong>2200 corsi di laurea magistrali</strong>. I corsi in questione
      sono relativi <strong>all'anno accademico 2020/2021/2022</strong>.
    </p> -->
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
    <!--     <p>
      <strong>Attenzione!</strong> per eseguire la ricerca serve il nome del
      corso corretto. Es. <strong>biotecnologie</strong> si trova sotto
      "biotecnologie" "biotecnologia" "biotechnology" quindi per avere il
      risultato corretto inserire <strong>"biotec"</strong>. Cioè la parte
      comune a tutti i nomi. Il resto della <strong>guida</strong> è sotto la
      tabella.
    </p> -->
    <br />
    <div v-if="cerca == true">
      <br />
      <v-table
        :data="corsi"
        :filters="filters"
        :pageSize="15"
        @totalPagesChanged="totalPages = $event"
        :currentPage.sync="currentPage"
        class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth"
      >
        <thead slot="head" class="has-background-dark">
          <th class="has-text-white">Corso di laurea</th>
          <v-th class="has-text-white" sortKey="s" defaultSort="asc"
            >Città</v-th
          >
          <v-th class="has-text-white" sortKey="a" defaultSort="asc">Test</v-th>
          <v-th class="has-text-white" sortKey="u" defaultSort="asc"
            >Università</v-th
          >
        </thead>
        <tbody slot="body" slot-scope="{ displayData }" data-view>
          <tr v-for="row in displayData" :key="row.guid">
            <td>
              <a
                :href="row.h"
                target="_blank"
                rel="noopener"
                >{{ row.n }}</a
              >
            </td>
            <td>{{ row.s }}</td>
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
    <table
      class="table is-bordered is-hoverable is-fullwidth"
      v-if="cerca == false"
    >
      <thead class="has-background-dark">
        <th class="has-text-white">Corso di laurea</th>
        <!--         <th class="has-text-white">Città</th>
        <th class="has-text-white">Test</th> -->
        <th class="has-text-white">Università</th>
      </thead>
      <tbody>
       <tr v-for="corso in corsi" :key="corso.n">
          <td>
            <a
              :href="corso.h"
              target="_blank"
              rel="noopener"
              class="has-text-danger"
              >{{ corso.n }}</a
            >
          </td>
          <!--           <td>{{ corso.s }}</td>
          <td>{{ corso.a }}</td> -->
          <td>{{ corso.u }}</td>
        </tr>
      </tbody>
    </table>
    <div v-if="cerca">
      <br />
      <p>
        <strong> Come funziona?</strong> È molto semplice, basta digitare nella
        barra di ricerca es. "data science" e comparirà la lista di tutti i
        corsi con quel nome. Inoltre cliccando "Livello" vengono ordinati i
        corsi in base al tipo di laurea.
      </p>
      <p>
        <strong>Attenzione!</strong> La colonna test è per indicare quale corso
        ha <strong>test d'ingresso </strong>o è a numero programmato. In quel
        caso il corso sarà segnato come test sì, in caso di accesso libero come
        test no.
      </p>
    </div>
    <br />
    <br />
  </div>
</template>

<script>
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Corsi di laurea magistrali [lista 2021/2022] ✅",
    // all titles will be injected into this template
    titleTemplate: "%s | corsiuniversitari.info",
    meta: [
      {
        name: "description",
        content:
          "Qui puoi trovare la lista di tutti i corsi di laurea magistrali Italiani. Visitaci per poter trovare altri strumenti.",
      },
      {
        name: "keywords",
        content: "Corsi di laurea, Corso di laurea, Lista corsi di laurea",
      },
    ],
    link: [
      {
        rel: "canonical",
        href: "https://www.corsiuniversitari.info/lista-corsi-di-laurea-magistrale",
      },
      {
        rel: "preload",
        as: "fetch",
        href: "https://json-corsi-fastify.herokuapp.com/corsi?t=Magistrale",
        crossorigin: "anonymous"
      }
    ],
  },
  data() {
    return {
      filters: {
        n: { value: "", keys: ["n"] },
      },
      currentPage: 1,
      totalPages: 0,
      corsi: [],
      cerca: false,
    };
  },
  async mounted() {
    try {
    fetch("https://json-corsi-fastify.herokuapp.com/corsi?t=Magistrale")
        .then((response) => response.json())
        .then((data) => (this.corsi = data));
    } catch (e) {
      console.log(e);
    }
  },
  watch: {
    "filters.n.value": function () {
      this.cerca = true;
    },
  },
};
</script>
