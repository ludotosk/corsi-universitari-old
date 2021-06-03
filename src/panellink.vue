<template>
  <div class="container is-fullhd">
    <nav class="panel is-dark">
      <p class="panel-heading">Link utili</p>
      <p class="panel-tabs">
        <a
          @click="citta"
          v-bind:class="{ active: !hideCitta, danger: hideCitta }"
          >Città</a
        >
        <a @click="uni" v-bind:class="{ active: !hideUni, danger: hideUni }"
          >Università</a
        >
        <a @click="area" v-bind:class="{ active: !hideArea, danger: hideArea }"
          >Area accademica</a
        >
      </p>
      <div v-bind:class="{ hidden: hideCitta }">
        <div class="panel-block">
          <router-link class="has-text-black-ter" to="/corsi-di-laurea-bari"
            >Corsi di laurea Bari</router-link
          >
        </div>
        <div class="panel-block">
          <router-link class="has-text-black-ter" to="/corsi-di-laurea-bologna"
            >Corsi di laurea Bologna</router-link
          >
        </div>
        <div class="panel-block">
          <router-link class="has-text-black-ter" to="/corsi-di-laurea-firenze"
            >Corsi di laurea Firenze</router-link
          >
        </div>
        <div class="panel-block">
          <router-link class="has-text-black-ter" to="/corsi-di-laurea-genova"
            >Corsi di laurea Genova</router-link
          >
        </div>
        <div class="panel-block">
          <router-link class="has-text-black-ter" to="/corsi-di-laurea-milano"
            >Corsi di laurea Milano</router-link
          >
        </div>
        <div class="panel-block">
          <router-link class="has-text-black-ter" to="/corsi-di-laurea-napoli"
            >Corsi di laurea Napoli</router-link
          >
        </div>
        <div class="panel-block">
          <router-link class="has-text-black-ter" to="/corsi-di-laurea-padova"
            >Corsi di laurea Padova</router-link
          >
        </div>
        <div class="panel-block">
          <router-link class="has-text-black-ter" to="/corsi-di-laurea-pavia"
            >Corsi di laurea Pavia</router-link
          >
        </div>
        <div class="panel-block">
          <router-link class="has-text-black-ter" to="/corsi-di-laurea-pisa"
            >Corsi di laurea Pisa</router-link
          >
        </div>
        <div class="panel-block">
          <router-link class="has-text-black-ter" to="/corsi-di-laurea-roma"
            >Corsi di laurea Roma</router-link
          >
        </div>
        <div class="panel-block">
          <router-link class="has-text-black-ter" to="/corsi-di-laurea-torino"
            >Corsi di laurea Torino</router-link
          >
        </div>
        <div class="panel-block">
          <router-link class="has-text-black-ter" to="/corsi-di-laurea-venezia"
            >Corsi di laurea Venezia</router-link
          >
        </div>
        <div class="panel-block">
          <router-link class="has-text-black-ter" to="/corsi-di-laurea-verona"
            >Corsi di laurea Verona</router-link
          >
        </div>
      </div>
      <div v-bind:class="{ hidden: hideUni }">
        <div class="panel-block">
          <router-link class="has-text-black-ter" to="/corsi-di-laurea-unibo"
            >Corsi di laurea Unibo</router-link
          >
        </div>
        <div class="panel-block">
          <router-link class="has-text-black-ter" to="/corsi-di-laurea-unipi"
            >Corsi di laurea Unipi</router-link
          >
        </div>
        <div class="panel-block">
          <router-link class="has-text-black-ter" to="/corsi-di-laurea-unipd"
            >Corsi di laurea Unipd</router-link
          >
        </div>
        <div class="panel-block">
          <router-link class="has-text-black-ter" to="/corsi-di-laurea-sapienza"
            >Corsi di laurea La Sapienza | Uniroma1</router-link
          >
        </div>
        <div class="panel-block">
          <router-link class="has-text-black-ter" to="/corsi-di-laurea-bicocca"
            >Corsi di laurea Bicocca</router-link
          >
        </div>
        <div class="panel-block">
          <router-link class="has-text-black-ter" to="/corsi-di-laurea-polimi"
            >Corsi di laurea Polimi</router-link
          >
        </div>
        <div class="panel-block">
          <router-link class="has-text-black-ter" to="/corsi-di-laurea-uniba"
            >Corsi di laurea Uniba</router-link
          >
        </div>
        <div class="panel-block">
          <router-link class="has-text-black-ter" to="/corsi-di-laurea-unifi"
            >Corsi di laurea Unifi</router-link
          >
        </div>
        <div class="panel-block">
          <router-link class="has-text-black-ter" to="/corsi-di-laurea-unimi"
            >Corsi di laurea Unimi</router-link
          >
        </div>
        <div class="panel-block">
          <router-link class="has-text-black-ter" to="/corsi-di-laurea-unina"
            >Corsi di laurea Unina</router-link
          >
        </div>
        <div class="panel-block">
          <router-link class="has-text-black-ter" to="/corsi-di-laurea-unipa"
            >Corsi di laurea Unipa</router-link
          >
        </div>
        <div class="panel-block">
          <router-link class="has-text-black-ter" to="/corsi-di-laurea-unipd"
            >Corsi di laurea Unipd</router-link
          >
        </div>
        <div class="panel-block">
          <router-link class="has-text-black-ter" to="/corsi-di-laurea-unipr"
            >Corsi di laurea Unipr</router-link
          >
        </div>
        <div class="panel-block">
          <router-link class="has-text-black-ter" to="/corsi-di-laurea-uniroma1"
            >Corsi di laurea Uniroma1</router-link
          >
        </div>
        <div class="panel-block">
          <router-link class="has-text-black-ter" to="/corsi-di-laurea-unisa"
            >Corsi di laurea Unisa</router-link
          >
        </div>
        <div class="panel-block">
          <router-link class="has-text-black-ter" to="/corsi-di-laurea-unito"
            >Corsi di laurea Unito</router-link
          >
        </div>
        <div class="panel-block">
          <router-link class="has-text-black-ter" to="/corsi-di-laurea-unikore"
            >Corsi di laurea Unikore</router-link
          >
        </div>
        <div class="panel-block">
          <router-link class="has-text-black-ter" to="/corsi-di-laurea-univda"
            >Corsi di laurea Univda</router-link
          >
        </div>
        <div class="panel-block">
          <router-link class="has-text-black-ter" to="/corsi-di-laurea-bocconi"
            >Corsi di laurea Bocconi</router-link
          >
        </div>
        <div class="panel-block">
          <router-link class="has-text-black-ter" to="/corsi-di-laurea-ecampus"
            >Corsi di laurea Ecampus</router-link
          >
        </div>
        <div class="panel-block">
          <router-link
            class="has-text-black-ter"
            to="/corsi-di-laurea-federico-ii"
            >Corsi di laurea Federico II</router-link
          >
        </div>
        <div class="panel-block">
          <router-link
            class="has-text-black-ter"
            to="/corsi-di-laurea-mercatorum"
            >Corsi di laurea Mercatorum</router-link
          >
        </div>
        <div class="panel-block">
          <router-link class="has-text-black-ter" to="/corsi-di-laurea-roma-tre"
            >Corsi di laurea Roma Tre</router-link
          >
        </div>
        <div class="panel-block">
          <router-link
            class="has-text-black-ter"
            to="/corsi-di-laurea-tor-vergata"
            >Corsi di laurea Tor Vergata</router-link
          >
        </div>
        <div class="panel-block">
          <router-link
            class="has-text-black-ter"
            to="/corsi-di-laurea-unicusano"
            >Corsi di laurea Unicusano</router-link
          >
        </div>
        <div class="panel-block">
          <router-link
            class="has-text-black-ter"
            to="/corsi-di-laurea-uninettuno"
            >Corsi di laurea Uninettuno</router-link
          >
        </div>
        <div class="panel-block">
          <router-link
            class="has-text-black-ter"
            to="/corsi-di-laurea-unipegaso"
            >Corsi di laurea Unipegaso</router-link
          >
        </div>
      </div>
      <div v-bind:class="{ hidden: hideArea }">
        <div class="panel-block">
          <router-link class="has-text-black-ter" to="/corsi-di-laurea-biologia"
            >Corsi di laurea biologia</router-link
          >
        </div>
        <div class="panel-block">
          <router-link
            class="has-text-black-ter"
            to="/corsi-di-laurea-biotecnologia"
            >Corsi di laurea biotecnologia</router-link
          >
        </div>
        <div class="panel-block">
          <router-link
            class="has-text-black-ter"
            to="/corsi-di-laurea-dietistica"
            >Corsi di laurea dietistica</router-link
          >
        </div>
        <div class="panel-block">
          <router-link class="has-text-black-ter" to="/corsi-di-laurea-farmacia"
            >Corsi di laurea farmacia</router-link
          >
        </div>
        <div class="panel-block">
          <router-link
            class="has-text-black-ter"
            to="/corsi-di-laurea-filosofia"
            >Corsi di laurea filosofia</router-link
          >
        </div>
        <div class="panel-block">
          <router-link class="has-text-black-ter" to="/corsi-di-laurea-fisica"
            >Corsi di laurea fisica</router-link
          >
        </div>
        <div class="panel-block">
          <router-link
            class="has-text-black-ter"
            to="/corsi-di-laurea-fisioterapia"
            >Corsi di laurea fisioterapia</router-link
          >
        </div>
        <div class="panel-block">
          <router-link
            class="has-text-black-ter"
            to="/corsi-di-laurea-infermieristica"
            >Corsi di laurea infermieristica</router-link
          >
        </div>
        <div class="panel-block">
          <router-link
            class="has-text-black-ter"
            to="/corsi-di-laurea-informatica"
            >Corsi di laurea informatica</router-link
          >
        </div>
        <div class="panel-block">
          <router-link
            class="has-text-black-ter"
            to="/corsi-di-laurea-logopedia"
            >Corsi di laurea logopedia</router-link
          >
        </div>
        <div class="panel-block">
          <router-link
            class="has-text-black-ter"
            to="/corsi-di-laurea-matematica"
            >Corsi di laurea matematica</router-link
          >
        </div>
        <div class="panel-block">
          <router-link class="has-text-black-ter" to="/corsi-di-laurea-medicina"
            >Corsi di laurea medicina</router-link
          >
        </div>
        <div class="panel-block">
          <router-link
            class="has-text-black-ter"
            to="/corsi-di-laurea-psicologia"
            >Corsi di laurea psicologia</router-link
          >
        </div>
        <div class="panel-block">
          <router-link
            class="has-text-black-ter"
            to="/corsi-di-laurea-scienze-della-formazione-primaria"
            >Corsi di laurea scienze della formazione primaria</router-link
          >
        </div>
        <div class="panel-block">
          <router-link
            class="has-text-black-ter"
            to="/corsi-di-laurea-scienze-motorie"
            >Corsi di laurea scienze motorie</router-link
          >
        </div>
        <div class="panel-block">
          <router-link class="has-text-black-ter" to="/corsi-di-laurea-storia"
            >Corsi di laurea storia</router-link
          >
        </div>
        <div class="panel-block">
          <router-link
            class="has-text-black-ter"
            to="/corsi-di-laurea-giurisprudenza"
            >Corsi di laurea giurisprudenza</router-link
          >
        </div>
        <div class="panel-block">
          <router-link class="has-text-black-ter" to="/corsi-di-laurea-lettere"
            >Corsi di laurea lettere</router-link
          >
        </div>
        <div class="panel-block">
          <router-link class="has-text-black-ter" to="/corsi-di-laurea-economia"
            >Corsi di laurea economia</router-link
          >
        </div>
      </div>
    </nav>
    <br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      hideCitta: false,
      hideUni: true,
      hideArea: true,
    };
  },
  methods: {
    citta() {
      this.hideCitta = false;
      this.hideUni = true;
      this.hideArea = true;
    },
    uni() {
      this.hideCitta = true;
      this.hideUni = false;
      this.hideArea = true;
    },
    area() {
      this.hideCitta = true;
      this.hideUni = true;
      this.hideArea = false;
    },
  },
};
</script>