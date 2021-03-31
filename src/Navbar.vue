<template>
  <b-navbar toggleable="lg" variant="dark" type="dark">
    <b-navbar-brand
      ><router-link to="/" class="nav-link active"
        ><img
          src="/img/icons/android-chrome-192x192.png"
          height="30"
          width="30"
          alt="logo corsiuniversitati.info" /></router-link
    ></b-navbar-brand>

    <b-navbar-toggle target="navbar-toggle-collapse"></b-navbar-toggle>

    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="/tutti-i-corsi-di-laurea">
          <router-link to="/tutti-i-corsi-di-laurea" class="nav-link active"
            >Tutti i corsi di laurea</router-link
          ></b-nav-item
        >
        <b-nav-item
          ><router-link to="/citta" class="nav-link active"
            >Città</router-link
          ></b-nav-item
        >
        <b-nav-item
          ><router-link to="/area-accademica-uni" class="nav-link active"
            >Aree accademiche / Uni</router-link
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
        <b-nav-item-dropdown text="Post Laurea" right class="nav-link active">
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
          <b-dropdown-item
            ><router-link to="/perfezionamento-alta-formazione"
              >Corsi Perfezionamento - Alta Formazione</router-link
            ></b-dropdown-item
          >
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item
            ><router-link to="/lista-master-primo-livello"
              >Lista master primo livello</router-link
            ></b-dropdown-item
          >
          <b-dropdown-item
            ><router-link to="/lista-master-secondo-livello"
              >Lista master secondo livello</router-link
            ></b-dropdown-item
          >
                    <b-dropdown-item
            ><router-link to="/lista-perfezionamento-alta-formazione"
              >Lista Corsi Perfezionamento - Alta Formazione</router-link
            ></b-dropdown-item
          >
        </b-nav-item-dropdown>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item
          href="https://t.me/corsiuniversitari_bot"
          class="nav-link d-flex flex-column"
        >
          <img
            height="30px"
            width="30px"
            src="data:image/png;base64,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"
          />
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
