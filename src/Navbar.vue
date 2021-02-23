<template>
  <b-navbar toggleable="lg" variant="dark" type="dark">
    <b-navbar-brand><router-link to="/" class="nav-link active"
            ><img src="/img/icons/android-chrome-192x192.png" height="30" width="30"></router-link
          ></b-navbar-brand>
    
    <b-navbar-toggle target="navbar-toggle-collapse"></b-navbar-toggle>

    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="mx-auto">
        <b-nav-item href="/tutti-i-corsi-di-laurea">
          <router-link to="/tutti-i-corsi-di-laurea" class="nav-link active"
            >Tutti i corsi di laurea</router-link
          ></b-nav-item
        >
        <b-nav-item
          ><router-link to="/universita" class="nav-link active"
            >Università</router-link
          ></b-nav-item
        >
        <b-nav-item
          ><router-link to="/citta" class="nav-link active"
            >Città</router-link
          ></b-nav-item
        >
        <b-nav-item
          ><router-link to="/area-accademica" class="nav-link active"
            >Aree accademiche</router-link
          ></b-nav-item
        >

        <b-nav-item-dropdown
          text="Corsi per livello"
          right
          class="nav-link active"
        >
          <b-dropdown-item
            ><router-link to="/corsi-di-laurea-triennale"
              >Corsi di laurea triennali</router-link
            ></b-dropdown-item
          >
          <b-dropdown-item
            ><router-link to="/corsi-di-laurea-magistrale"
              >Corsi di laurea magistrali</router-link
            ></b-dropdown-item
          >
          <b-dropdown-item
            ><router-link to="/corsi-di-laurea-magistrale-a-ciclo-unico"
              >Corsi di laurea magistrali a ciclo unico</router-link
            ></b-dropdown-item
          >

          <b-dropdown-item
            ><router-link to="/corsi-di-laurea-triennali-ad-accesso-libero"
              >Corsi di laurea triennali ad accesso libero</router-link
            ></b-dropdown-item
          >
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item
            ><router-link to="/lista-corsi-di-laurea-triennale"
              >Lista corsi triennali</router-link
            ></b-dropdown-item
          >
          <b-dropdown-item
            ><router-link to="/lista-corsi-di-laurea-magistrale"
              >Lista corsi magistrali</router-link
            ></b-dropdown-item
          >
          <b-dropdown-item
            ><router-link to="/lista-corsi-di-laurea-magistrale-a-ciclo-unico"
              >Lista corsi magistrali a ciclo unico</router-link
            ></b-dropdown-item
          >
          <b-dropdown-item
            ><router-link
              to="/lista-corsi-di-laurea-triennale-ad-accesso-libero"
              >Lista corsi triennali ad accesso libero</router-link
            ></b-dropdown-item
          >
        </b-nav-item-dropdown>
        <b-nav-item
          ><router-link to="/corsi-di-laurea-in-inglese" class="nav-link active"
            >Corsi in inglese</router-link
          ></b-nav-item
        >
         <b-nav-item-dropdown
          text="Master"
          right
          class="nav-link active"
        >
          <b-dropdown-item
            ><router-link to="/master-primo-livello"
              >Master di primo livello</router-link
            ></b-dropdown-item
          >
          <b-dropdown-item
            ><router-link to="/master-secondo-livello"
              >Master di secondo livello</router-link
            ></b-dropdown-item
          >
       
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item
            ><router-link to="/lista-master-primo-livello"
              >Lista primo livello</router-link
            ></b-dropdown-item
          >
          <b-dropdown-item
            ><router-link to="/lista-master-secondo-livello"
              >Lista secondo livello</router-link
            ></b-dropdown-item
          >
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
