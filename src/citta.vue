<template>
  <div class="container-md" data-view>
    <br />
    <h1 class="text-secondary">Corsi di laurea per città</h1>
    <hr />
    <ul class="list-group">
      <li class="list-group-item">
        <router-link class="nav-link active" to="/corsi-di-laurea-bari"
          >Corsi di laurea Bari</router-link
        >
      </li>
      <li class="list-group-item">
        <router-link class="nav-link active" to="/corsi-di-laurea-bologna"
          >Corsi di laurea Bologna</router-link
        >
      </li>
      <li class="list-group-item">
        <router-link class="nav-link active" to="/corsi-di-laurea-firenze"
          >Corsi di laurea Firenze</router-link
        >
      </li>
      <li class="list-group-item">
        <router-link class="nav-link active" to="/corsi-di-laurea-genova"
          >Corsi di laurea Genova</router-link
        >
      </li>
      <li class="list-group-item">
        <router-link class="nav-link active" to="/corsi-di-laurea-milano"
          >Corsi di laurea Milano</router-link
        >
      </li>
      <li class="list-group-item">
        <router-link class="nav-link active" to="/corsi-di-laurea-napoli"
          >Corsi di laurea Napoli</router-link
        >
      </li>
      <li class="list-group-item">
        <router-link class="nav-link active" to="/corsi-di-laurea-padova"
          >Corsi di laurea Padova</router-link
        >
      </li>
      <li class="list-group-item">
        <router-link class="nav-link active" to="/corsi-di-laurea-pavia"
          >Corsi di laurea Pavia</router-link
        >
      </li>
      <li class="list-group-item">
        <router-link class="nav-link active" to="/corsi-di-laurea-pisa"
          >Corsi di laurea Pisa</router-link
        >
      </li>
      <li class="list-group-item">
        <router-link class="nav-link active" to="/corsi-di-laurea-roma"
          >Corsi di laurea Roma</router-link
        >
      </li>
      <li class="list-group-item">
        <router-link class="nav-link active" to="/corsi-di-laurea-torino"
          >Corsi di laurea Torino</router-link
        >
      </li>
      <li class="list-group-item">
        <router-link class="nav-link active" to="/corsi-di-laurea-venezia"
          >Corsi di laurea Venezia</router-link
        >
      </li>
      <li class="list-group-item">
        <router-link class="nav-link active" to="/corsi-di-laurea-verona"
          >Corsi di laurea Verona</router-link
        >
      </li>
    </ul>
    <br />
  </div>
</template>

<script>
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Città",
    titleTemplate: "%s | corsiuniversitari.info",
    meta: [
      {
        name: "description",
        content:
          "Questa è la lista delle università per la quale abbiamo la tabella di tutti i corsi di laurea filtrati per citta.",
      },
      {
        name: "keywords",
        content:
          "Corsi di laurea, Corso di laurea, Corsi universitari, Orientamento universitario",
      },
    ],
    link: [{ rel: "canonical", href: "https://www.corsiuniversitari.info/citta" }],
  },
};
</script>