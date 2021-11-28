<template>
  <div>
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <img
            src="/img/icons/android-chrome-192x192.png"
            height="32"
            width="32"
            alt="logo corsiuniversitati.info"
          />
        </router-link>

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar"
          v-on:click="isActive = !isActive"
          v-bind:class="{ active: isActive }"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbar" class="navbar-menu" v-bind:class="{ active: isActive }">
        <div
          class="navbar-start has-text-weight-medium"
          style="flex-grow: 1; justify-content: center"
        >
          <router-link to="/" class="navbar-item"
            >Tutti i corsi di laurea</router-link
          >
          <router-link to="/corsi-di-laurea-online" class="navbar-item"
            >Corsi online</router-link
          >
          <router-link to="/corsi-di-laurea-in-inglese" class="navbar-item"
            >In inglese</router-link
          >
          <div class="navbar-item has-dropdown is-hoverable">
            <p class="navbar-link">Città</p>
            <div class="navbar-dropdown">
              <router-link class="navbar-item" to="/corsi-di-laurea-bologna"
                >Corsi di laurea Bologna</router-link
              >
              <router-link class="navbar-item" to="/corsi-di-laurea-firenze"
                >Corsi di laurea Firenze</router-link
              >
              <router-link class="navbar-item" to="/corsi-di-laurea-milano"
                >Corsi di laurea Milano</router-link
              >
              <router-link class="navbar-item" to="/corsi-di-laurea-padova"
                >Corsi di laurea Padova</router-link
              >
              <router-link class="navbar-item" to="/corsi-di-laurea-roma"
                >Corsi di laurea Roma</router-link
              >
              <router-link class="navbar-item" to="/corsi-di-laurea-torino"
                >Corsi di laurea Torino</router-link
              >
              <router-link class="navbar-item" to="/corsi-di-laurea-bari"
                >Corsi di laurea Bari</router-link
              >
              <router-link class="navbar-item" to="/corsi-di-laurea-pisa"
                >Corsi di laurea Pisa</router-link
              >
              <router-link class="navbar-item" to="/corsi-di-laurea-napoli"
                >Corsi di laurea Napoli</router-link
              >
              <router-link class="navbar-item" to="/corsi-di-laurea-palermo"
                >Corsi di laurea Palermo</router-link
              >
            </div>
          </div>
          <router-link to="/lauree-triennali-elenco" class="navbar-item"
            >Triennali</router-link
          >
          <a
            href="/lista-corsi-di-laurea-senza-test"
            class="navbar-item"
            >Corsi senza test</a
          >
          <a href="https://www.corsiuniversitari.info/link" target="_blank" class="navbar-item"
            >Test medicina</a
          >
        </div>
        <div class="navbar-end">
          <a href="https://www.corsiuniversitari.info/link" class="navbar-item"
            ><img
              src="/img/whatsapp-svgrepo-com.svg"
              alt="pagina gruppo whatsapp"
              height="40"
              width="40"
            />
            Gruppo whatsapp</a
          >
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
};
</script>