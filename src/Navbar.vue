<template>
  <b-navbar toggleable="lg" variant="dark" type="dark">
    <b-navbar-toggle target="navbar-toggle-collapse"></b-navbar-toggle>

    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="mx-auto"> 
        <b-nav-item
          ><router-link to="/" class="nav-link active"
            >Home</router-link
          ></b-nav-item
        >
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
          ><router-link to="/area-accademica" class="nav-link active"
            >Aree accademiche</router-link
          ></b-nav-item
        >
        <!-- Navbar dropdowns -->
        <b-nav-item-dropdown
          text="Liste Corsi di laurea"
          right
          class="nav-link active"
        >
          <b-dropdown-item
            ><router-link to="/lista-corsi-di-laurea-triennale"
              >Corsi di laurea triennali</router-link
            ></b-dropdown-item
          >
          <b-dropdown-item
            ><router-link to="/lista-corsi-di-laurea-magistrale"
              >Corsi di laurea magistrali</router-link
            ></b-dropdown-item
          >
          <b-dropdown-item
            ><router-link to="/lista-corsi-di-laurea-magistrale-a-ciclo-unico"
              >Corsi di laurea magistrali a ciclo unico</router-link
            ></b-dropdown-item
          >
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item
            ><router-link
              to="/lista-corsi-di-laurea-triennale-ad-accesso-libero"
              >Corsi di laurea triennali ad accesso libero</router-link
            ></b-dropdown-item
          >
        </b-nav-item-dropdown>

        <b-nav-item-dropdown
          text="Corsi di laurea per livello"
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
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item
            ><router-link to="/corsi-di-laurea-triennali-ad-accesso-libero"
              >Corsi di laurea triennali ad accesso libero</router-link
            ></b-dropdown-item
          >
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

