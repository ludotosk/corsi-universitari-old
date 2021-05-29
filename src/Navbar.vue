<template>
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
        <span aria-hidden="true" ></span>
        <span aria-hidden="true" ></span>
        <span aria-hidden="true" ></span>
        <span aria-hidden="true" ></span>
        <span aria-hidden="true" ></span>
        <span aria-hidden="true" ></span>
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

        <router-link to="/citta" class="navbar-item">Città</router-link>
        <router-link to="/area-accademica-uni" class="navbar-item"
          >Aree accademiche / Uni</router-link
        >
        <router-link to="/corsi-di-laurea-in-inglese" class="navbar-item"
          >Corsi in inglese</router-link
        >
        <div class="navbar-item has-dropdown is-hoverable">
          <p class="navbar-link">Corsi per livello</p>

          <div class="navbar-dropdown">
            <router-link to="/corsi-di-laurea-triennale" class="navbar-item"
              >Corsi di laurea triennali</router-link
            >
            <router-link to="/corsi-di-laurea-magistrale" class="navbar-item"
              >Corsi di laurea magistrali</router-link
            >
            <router-link
              to="/corsi-di-laurea-magistrale-a-ciclo-unico"
              class="navbar-item"
              >Corsi di laurea magistrali a ciclo unico</router-link
            >
            <router-link
              to="/corsi-di-laurea-triennali-ad-accesso-libero"
              class="navbar-item"
              >Corsi di laurea triennali ad accesso libero</router-link
            >
            <hr class="navbar-divider" />
            <router-link
              to="/lista-corsi-di-laurea-triennale"
              class="navbar-item"
              >Lista corsi triennali</router-link
            >
            <router-link
              to="/lista-corsi-di-laurea-magistrale"
              class="navbar-item"
              >Lista corsi magistrali</router-link
            >
            <router-link
              to="/lista-corsi-di-laurea-magistrale-a-ciclo-unico"
              class="navbar-item"
              >Lista corsi magistrali a ciclo unico</router-link
            >
            <router-link
              to="/lista-corsi-di-laurea-triennale-ad-accesso-libero"
              class="navbar-item"
              >Lista corsi triennali ad accesso libero</router-link
            >
          </div>
        </div>
        <div class="navbar-item has-dropdown is-hoverable">
          <p class="navbar-link">Post laurea</p>
          <div class="navbar-dropdown">
            <router-link to="/master-primo-livello" class="navbar-item"
              >Master di primo livello</router-link
            >
            <router-link to="/master-secondo-livello" class="navbar-item"
              >Master di secondo livello</router-link
            >
            <router-link
              to="/perfezionamento-alta-formazione"
              class="navbar-item"
              >Corsi Perfezionamento - Alta Formazione</router-link
            >
            <hr class="navbar-divider" />
            <router-link to="/lista-master-primo-livello" class="navbar-item"
              >Lista master primo livello</router-link
            >
            <router-link to="/lista-master-secondo-livello" class="navbar-item"
              >Lista master secondo livello</router-link
            ><router-link
              to="/lista-perfezionamento-alta-formazione"
              class="navbar-item"
              >Lista Corsi Perfezionamento - Alta Formazione</router-link
            >
          </div>
        </div>
      </div>

      <div class="navbar-end"></div>
    </div>
  </nav>
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