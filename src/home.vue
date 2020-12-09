<template>
  <div class="container-md">
    <br />
    <h1 class="text-secondary">Una semplice tabella</h1>
    <br />
    <h2 class="text-secondary">Ecco il corso che stai cercando</h2>
    <br />
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <label class="input-group-text" id="basic-addon3" for="basic-url"
          >Filtra in base al nome:</label
        >
      </div>
      <input
        type="text"
        class="form-control"
        id="basic-url"
        aria-describedby="basic-addon3"
        v-model="filters.n.value"
      />
    </div>
    <p><strong>Attenzione!</strong> per eseguire la ricerca serve il nome del corso corretto. Es. <strong>biotecnologie</strong> si trova sotto "biotecnologie" "biotecnologia" "biotechnology" quindi per avere il risultato corretto inserire <strong>"biotec"</strong>. Cioè la parte comune a tutti i nomi. Il resto della <strong>guida</strong> è sotto la tabella</p>
    <v-table
      :data="corsi"
      :filters="filters"
      :pageSize="15"
      @totalPagesChanged="totalPages = $event"
      :currentPage.sync="currentPage"
      class="table table-striped table-hover table-sm table-bordered"
    >
      <thead slot="head" class="thead-dark">
        <th>Nome corso</th>
        <v-th sortKey="t" defaultSort="asc">Tipo Laurea</v-th>
        <v-th sortKey="a" defaultSort="asc">Test</v-th>
        <th>Università</th>
      </thead>
      <tbody slot="body" slot-scope="{ displayData }">
        <tr v-for="row in displayData" :key="row.guid">
          <td>
            <a :href="row.h" target="_blank" rel="noopener">{{ row.n }}</a>
          </td>
          <td>{{ row.t }}</td>
          <td>{{ row.a }}</td>
          <td>{{ row.u }}</td>
        </tr>
      </tbody>
    </v-table>
    <smart-pagination
      :currentPage.sync="currentPage"
      :totalPages="totalPages"
      :maxPageLinks="5"
    />
    <br />
    <p>
      Per spiegare come funziona questo sito preferisco raccontarne la storia,
      credo che ne illustri in maniera soddisfacente la sua utilità.
    </p>
    <p>
      Arrivato all'ultimo anno di università mi sono trovato davanti a un
      problema comune: dover cercare il
      <strong> migliore corso di laurea magistrale </strong> per me. Avendo un
      briciolo di ambizione sapevo che avrei dovuto cercare in tutti gli atenei
      italiani. Volendo fare data science ho fatto qualche ricerca su google, ma
      ho subito capito che non sarebbe stato facile. Infatti non solo c'era
      un'infinità di università tra cui sceglie, ma il corso compariva anche in
      varie aree accademiche, come scienze statistiche, scienze informatiche ed
      economia. Perciò, dopo aver perso qualche giornata in ricerche, ho creato
      questo strumento affinché possa facilitare la ricerca di altri studenti
      come me.
    </p>
    <p>
      Qui si possono trovare oltre <strong>4700 corsi di laurea</strong>
      italiani che ho estrapolato da un sito istituzionale. I corsi in questione
      sono relativi <strong>all'anno accademico 2020/2021</strong>.
    </p>
    <p>
      <strong> Come funziona?</strong> È molto semplice, basta digitare nella
      barra di ricerca es. "data science" e comparirà la lista di tutti i corsi
      con quel nome. Inoltre cliccando "tipo laurea" vengono ordinati i corsi in
      base al tipo di laurea.
    </p>
    <p>
      <strong>Attenzione!</strong> le lauree magistali a ciclo unico compaiono
      sotto laurea magistrale. La colonna test è per indicare quale corso ha test d'ingresso o è a numero programmato. In quel caso il corso sarà segnato come test sì, in caso di ingresso libero come testo no.
    </p>
    <p>
      Per contattarmi in caso di problemi, dati mancanti o funzionalità mancanti
      qui c'è la sezione <router-link to="/feedback" class="text-primary">feedback</router-link>. Per
      chi preferisse c'è
      <a href="https://www.instagram.com/ludotosk/" class="text-primary">Instagram</a>.
    </p>
    <p>Per l'informativa sulla privacy <router-link to="/cookie-policy" class="text-primary">clicca qui</router-link>.</p>
  </div>
</template>

<script>
import corsi from "../public/corsi.json";

export default {
  name: "home",
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "corsiuniversitari.info",
    // all titles will be injected into this template
    titleTemplate: "%s | cerca il tuo corso",
    meta: [
      {
        name: "description",
        content:
          "corsiuniversitari.info ti permette di cercare fra tutti i corsi universitari italiani in base al nome del corso e di trovare quello che fa per te.",
      },
    ],
  },
  data() {
    return {
      corsi,
      filters: {
        n: { value: "", keys: ["n"] },
      },
      currentPage: 1,
      totalPages: 0,
    };
  },
  methods: {
    nameLength(row) {
      return row.t.length;
    },
  },
};
</script>