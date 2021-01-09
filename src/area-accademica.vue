<template>
  <div class="container-md" data-view>
    <br />
    <h1 class="text-secondary">Corsi di laurea divisi per area accademica</h1>
    <hr />
    <ul class="list-group">
      <li class="list-group-item">
        <router-link class="nav-link active" to="/corsi-di-laurea-biologia"
          >Corsi di laurea biologia</router-link
        >
      </li>
      <li class="list-group-item">
        <router-link class="nav-link active" to="/corsi-di-laurea-biotecnologia"
          >Corsi di laurea biotecnologia</router-link
        >
      </li>
      <li class="list-group-item">
        <router-link class="nav-link active" to="/corsi-di-laurea-dietistica"
          >Corsi di laurea dietistica</router-link
        >
      </li>
      <li class="list-group-item">
        <router-link class="nav-link active" to="/corsi-di-laurea-farmacia"
          >Corsi di laurea farmacia</router-link
        >
      </li>
      <li class="list-group-item">
        <router-link class="nav-link active" to="/corsi-di-laurea-filosofia"
          >Corsi di laurea filosofia</router-link
        >
      </li>
      <li class="list-group-item">
        <router-link class="nav-link active" to="/corsi-di-laurea-fisica"
          >Corsi di laurea fisica</router-link
        >
      </li>
      <li class="list-group-item">
        <router-link class="nav-link active" to="/corsi-di-laurea-fisioterapia"
          >Corsi di laurea fisioterapia</router-link
        >
      </li>
      <li class="list-group-item">
        <router-link
          class="nav-link active"
          to="/corsi-di-laurea-infermieristica"
          >Corsi di laurea infermieristica</router-link
        >
      </li>
      <li class="list-group-item">
        <router-link class="nav-link active" to="/corsi-di-laurea-informatica"
          >Corsi di laurea informatica</router-link
        >
      </li>
      <li class="list-group-item">
        <router-link class="nav-link active" to="/corsi-di-laurea-logopedia"
          >Corsi di laurea logopedia</router-link
        >
      </li>
      <li class="list-group-item">
        <router-link class="nav-link active" to="/corsi-di-laurea-matematica"
          >Corsi di laurea matematica</router-link
        >
      </li>
      <li class="list-group-item">
        <router-link class="nav-link active" to="/corsi-di-laurea-medicina"
          >Corsi di laurea medicina</router-link
        >
      </li>
      <li class="list-group-item">
        <router-link class="nav-link active" to="/corsi-di-laurea-psicologia"
          >Corsi di laurea psicologia</router-link
        >
      </li>
      <li class="list-group-item">
        <router-link
          class="nav-link active"
          to="/corsi-di-laurea-scienze-della-formazione-primaria"
          >Corsi di laurea scienze della formazione primaria</router-link
        >
      </li>
      <li class="list-group-item">
        <router-link
          class="nav-link active"
          to="/corsi-di-laurea-scienze-motorie"
          >Corsi di laurea scienze motorie</router-link
        >
      </li>
      <li class="list-group-item">
        <router-link class="nav-link active" to="/corsi-di-laurea-storia"
          >Corsi di laurea storia</router-link
        >
      </li>
      <li class="list-group-item">
        <router-link
          class="nav-link active"
          to="/corsi-di-laurea-giurisprudenza"
          >Corsi di laurea giurisprudenza</router-link
        >
      </li>
      <li class="list-group-item">
        <router-link class="nav-link active" to="/corsi-di-laurea-lettere"
          >Corsi di laurea lettere</router-link
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
    title: "Area accademica",
    titleTemplate: "%s | corsiuniversitari.info",
    meta: [
      {
        name: "description",
        content:
          "Questa è la lista delle aree accademiche per le quali abbiamo filtrato tutti i corsi di laurea di tutte le università.",
      },
      {
        name: "keywords",
        content:
          "Corsi di laurea, Corso di laurea, Corsi universitari, Orientamento universitario",
      },
    ],
    link: [
      {
        rel: "canonical",
        href: "https://www.corsiuniversitari.info/area-accademica",
      },
    ],
  },
};
</script>