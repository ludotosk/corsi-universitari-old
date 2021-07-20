<template>
  <div class="container is-fullhd" data-view>
    <br />
    <h1 class="has-text-centered is-size-2 has-text-dark has-text-left">
      Corsi di laurea per città
    </h1>
    <br>
    <h2 class="has-text-centered is-size-3 has-text-dark has-text-left">
      Ecco la lista delle nostre città
    </h2>
    <hr />
    <ul class="list-group">
      <div class="box">
        <router-link class="has-text-black-ter" to="/corsi-di-laurea-bari"
          >Corsi di laurea Bari</router-link
        >
      </div>
      <div class="box">
        <router-link class="has-text-black-ter" to="/corsi-di-laurea-bologna"
          >Corsi di laurea Bologna</router-link
        >
      </div>
      <div class="box">
        <router-link class="has-text-black-ter" to="/corsi-di-laurea-firenze"
          >Corsi di laurea Firenze</router-link
        >
      </div>
      <div class="box">
        <router-link class="has-text-black-ter" to="/corsi-di-laurea-genova"
          >Corsi di laurea Genova</router-link
        >
      </div>
      <div class="box">
        <router-link class="has-text-black-ter" to="/corsi-di-laurea-milano"
          >Corsi di laurea Milano</router-link
        >
      </div>
      <div class="box">
        <router-link class="has-text-black-ter" to="/corsi-di-laurea-napoli"
          >Corsi di laurea Napoli</router-link
        >
      </div>
      <div class="box">
        <router-link class="has-text-black-ter" to="/corsi-di-laurea-padova"
          >Corsi di laurea Padova</router-link
        >
      </div>
      <div class="box">
        <router-link class="has-text-black-ter" to="/corsi-di-laurea-pavia"
          >Corsi di laurea Pavia</router-link
        >
      </div>
      <div class="box">
        <router-link class="has-text-black-ter" to="/corsi-di-laurea-pisa"
          >Corsi di laurea Pisa</router-link
        >
      </div>
      <div class="box">
        <router-link class="has-text-black-ter" to="/corsi-di-laurea-roma"
          >Corsi di laurea Roma</router-link
        >
      </div>
      <div class="box">
        <router-link class="has-text-black-ter" to="/corsi-di-laurea-torino"
          >Corsi di laurea Torino</router-link
        >
      </div>
      <div class="box">
        <router-link class="has-text-black-ter" to="/corsi-di-laurea-venezia"
          >Corsi di laurea Venezia</router-link
        >
      </div>
      <div class="box">
        <router-link class="has-text-black-ter" to="/corsi-di-laurea-verona"
          >Corsi di laurea Verona</router-link
        >
      </div>
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
    link: [
      { rel: "canonical", href: "https://www.corsiuniversitari.info/citta" },
    ],
  },
};
</script>