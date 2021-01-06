<template>
  <div class="container-md">
    <br />
    <h1 class="text-secondary">Corsi di laurea divisi per ateneo</h1>
    <hr />
    <ul class="list-group">
      <li class="list-group-item">
        <router-link class="nav-link active" to="/corsi-di-laurea-unibo"
          >Corsi di laurea Unibo</router-link
        >
      </li>
      <li class="list-group-item">
        <router-link class="nav-link active" to="/corsi-di-laurea-unipi"
          >Corsi di laurea Unipi</router-link
        >
      </li>
      <li class="list-group-item">
        <router-link class="nav-link active" to="/corsi-di-laurea-unipd"
          >Corsi di laurea Unipd</router-link
        >
      </li>
      <li class="list-group-item">
        <router-link class="nav-link active" to="/corsi-di-laurea-sapienza"
          >Corsi di laurea La Sapienza</router-link
        >
      </li>
      <li class="list-group-item">
        <router-link class="nav-link active" to="/corsi-di-laurea-bicocca"
          >Corsi di laurea Bicocca</router-link
        >
      </li>
      <li class="list-group-item">
        <router-link class="nav-link active" to="/corsi-di-laurea-polimi"
          >Corsi di laurea Polimi</router-link
        >
      </li>
      <li class="list-group-item">
        <router-link class="nav-link active" to="/corsi-di-laurea-uniba"
          >Corsi di laurea Uniba</router-link
        >
      </li>
      <li class="list-group-item">
        <router-link class="nav-link active" to="/corsi-di-laurea-unifi"
          >Corsi di laurea Unifi</router-link
        >
      </li>
      <li class="list-group-item">
        <router-link class="nav-link active" to="/corsi-di-laurea-unimi"
          >Corsi di laurea Unimi</router-link
        >
      </li>
      <li class="list-group-item">
        <router-link class="nav-link active" to="/corsi-di-laurea-unina"
          >Corsi di laurea Unina</router-link
        >
      </li>
      <li class="list-group-item">
        <router-link class="nav-link active" to="/corsi-di-laurea-unipa"
          >Corsi di laurea Unipa</router-link
        >
      </li>
      <li class="list-group-item">
        <router-link class="nav-link active" to="/corsi-di-laurea-unipd"
          >Corsi di laurea Unipd</router-link
        >
      </li>
      <li class="list-group-item">
        <router-link class="nav-link active" to="/corsi-di-laurea-unipr"
          >Corsi di laurea Unipr</router-link
        >
      </li>
      <li class="list-group-item">
        <router-link class="nav-link active" to="/corsi-di-laurea-uniroma1"
          >Corsi di laurea Uniroma1</router-link
        >
      </li>
      <li class="list-group-item">
        <router-link class="nav-link active" to="/corsi-di-laurea-unisa"
          >Corsi di laurea Unisa</router-link
        >
      </li>
      <li class="list-group-item">
        <router-link class="nav-link active" to="/corsi-di-laurea-unito"
          >Corsi di laurea Unito</router-link
        >
      </li>
      <li class="list-group-item">
        <router-link class="nav-link active" to="/corsi-di-laurea-unikore"
          >Corsi di laurea Unikore</router-link
        >
      </li>
      <li class="list-group-item">
        <router-link class="nav-link active" to="/corsi-di-laurea-univda"
          >Corsi di laurea Univda</router-link
        >
      </li>
      <li class="list-group-item">
        <router-link class="nav-link active" to="/corsi-di-laurea-bocconi"
          >Corsi di laurea Bocconi</router-link
        >
      </li>
      <li class="list-group-item">
        <router-link class="nav-link active" to="/corsi-di-laurea-ecampus"
          >Corsi di laurea Ecampus</router-link
        >
      </li>
      <li class="list-group-item">
        <router-link class="nav-link active" to="/corsi-di-laurea-federico-ii"
          >Corsi di laurea Federico II</router-link
        >
      </li>
      <li class="list-group-item">
        <router-link class="nav-link active" to="/corsi-di-laurea-mercatorum"
          >Corsi di laurea Mercatorum</router-link
        >
      </li>
      <li class="list-group-item">
        <router-link class="nav-link active" to="/corsi-di-laurea-roma-tre"
          >Corsi di laurea Roma Tre</router-link
        >
      </li>
      <li class="list-group-item">
        <router-link class="nav-link active" to="/corsi-di-laurea-tor-vergata"
          >Corsi di laurea Tor Vergata</router-link
        >
      </li>
      <li class="list-group-item">
        <router-link class="nav-link active" to="/corsi-di-laurea-unicusano"
          >Corsi di laurea Unicusano</router-link
        >
      </li>
      <li class="list-group-item">
        <router-link class="nav-link active" to="/corsi-di-laurea-uninettuno"
          >Corsi di laurea Uninettuno</router-link
        >
      </li>
      <li class="list-group-item">
        <router-link class="nav-link active" to="/corsi-di-laurea-unipegaso"
          >Corsi di laurea Unipegaso</router-link
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
    title: "Univerisità",
    titleTemplate: "%s | corsiuniversitari.info",
    meta: [
      {
        name: "description",
        content:
          "Questa è la lista delle università per la quale abbiamo la tabella di tutti i corsi di laurea filtrati per ateneo.",
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
        href: "https://www.corsiuniversitari.info/universita",
      },
    ],
  },
};
</script>