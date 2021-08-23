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
        </a>
      </div>

      <div id="navbar" class="navbar-menu" v-bind:class="{ active: isActive }">
        <div
          class="navbar-start has-text-weight-medium"
          style="flex-grow: 1; justify-content: center"
        >
          <router-link to="/tutti-i-corsi-di-laurea" class="navbar-item"
            >Tutti i corsi di laurea</router-link
          >
          <router-link to="/corsi-di-laurea-online" class="navbar-item"
            >Corsi online</router-link
          >
          <router-link to="/corsi-di-laurea-internazionali" class="navbar-item"
            >Corsi internazionali</router-link
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

              <router-link class="navbar-item" to="/corsi-di-laurea-venezia"
                >Corsi di laurea Venezia</router-link
              >
            </div>
          </div>
          <router-link to="/lauree-triennali-elenco" class="navbar-item"
            >Triennali</router-link
          >
          <!--        <div class="navbar-item has-dropdown is-hoverable">
            <p class="navbar-link">Corsi per livello</p>

            <div class="navbar-dropdown">
              <router-link
                to="/corsi-di-laurea-magistrale-a-ciclo-unico"
                class="navbar-item"
                >Corsi di laurea magistrali a ciclo unico</router-link
              >
              <hr class="navbar-divider" />

              <router-link
                to="/lista-corsi-di-laurea-magistrale"
                class="navbar-item"
                >Lista corsi magistrali</router-link
              >
            </div>
          </div> -->
          <div class="navbar-item has-dropdown is-hoverable">
            <p class="navbar-link">Corsi no test</p>

            <div class="navbar-dropdown is-right">
              <router-link
                to="/lista-corsi-di-laurea-senza-test"
                class="navbar-item"
                >Corsi senza test magistrali/triennali/ciclo unico</router-link
              >
              <router-link
                to="/lista-corsi-di-laurea-triennale-ad-accesso-libero"
                class="navbar-item"
                >Lista corsi triennali ad accesso libero</router-link
              >
            </div>
          </div>
        </div>
        <div class="navbar-end">
          <router-link to="/comunita" class="navbar-item"
            ><img
              src="/img/whatsapp-svgrepo-com.svg"
              alt="pagina gruppo whatsapp"
              height="40"
              width="40"
            />
            Gruppo whatsapp</router-link
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