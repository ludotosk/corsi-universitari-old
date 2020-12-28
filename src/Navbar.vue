<template>
  <b-navbar variant="dark" type="dark">
    <b-navbar-nav>
      <b-nav-item><router-link to="/" class="nav-link active">Home</router-link></b-nav-item>
      <b-nav-item href="/tutti-i-corsi-di-laurea">
        <router-link to="/tutti-i-corsi-di-laurea" class="nav-link active"
          >Tutti i corsi di laurea</router-link
        ></b-nav-item
      >
      <b-nav-item
        ><router-link to="/universita" class="nav-link active">Università</router-link></b-nav-item
      >

      <!-- Navbar dropdowns -->
      <b-nav-item-dropdown text="Liste Corsi di laurea" right class="nav-link active">
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
          ><router-link to="/lista-corsi-di-laurea-triennale-ad-accesso-libero"
            >Corsi di laurea triennali ad accesso libero</router-link
          ></b-dropdown-item
        >
      </b-nav-item-dropdown>

      <b-nav-item-dropdown text="Corsi di laurea per livello" right class="nav-link active">
        <b-dropdown-item><router-link to="/corsi-di-laurea-triennale">Corsi di laurea triennali</router-link></b-dropdown-item>
        <b-dropdown-item><router-link to="/corsi-di-laurea-magistrale">Corsi di laurea magistrali</router-link></b-dropdown-item>
        <b-dropdown-item><router-link to="/corsi-di-laurea-magistrale-a-ciclo-unico">Corsi di laurea magistrali a ciclo unico</router-link></b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item><router-link to="/corsi-di-laurea-triennali-ad-accesso-libero">Corsi di laurea triennali ad accesso libero</router-link></b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar>

  <!--   <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-md">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link active" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" to="/tutti-i-corsi-di-laurea"
              >Tutti i corsi di laurea</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" to="/universita"
              >Università</router-link
            >
          </li>
          <li class="nav-item dropdown active">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Liste corsi di laurea
            </a>
            <div class="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
              <li class="dropdown-item bg-dark">
                <router-link
                  class="nav-link active"
                  to="/lista-corsi-di-laurea-triennale"
                  >Lista corsi di laurea triennali</router-link
                >
              </li>
              <li class="dropdown-item bg-dark">
                <router-link
                  class="nav-link active"
                  to="/lista-corsi-di-laurea-magistrale"
                  >Lista corsi di laurea magistrali</router-link
                >
              </li>
              <li class="dropdown-item bg-dark">
                <router-link
                  class="nav-link active"
                  to="/lista-corsi-di-laurea-magistrale-a-ciclo-unico"
                  >Lista corsi di laurea magistrali a ciclo unico</router-link
                >
              </li>
              <div class="dropdown-divider"></div>
              <li class="dropdown-item bg-dark">
                <router-link
                  class="nav-link active"
                  to="/lista-corsi-di-laurea-triennale-ad-accesso-libero"
                  >Lista corsi di laurea triennali ad accesso
                  libero</router-link
                >
              </li>
            </div>
          </li>
          
          <li class="nav-item dropdown active">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown1"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Corsi di laurea per livello
            </a>
            <div
              class="dropdown-menu bg-dark"
              aria-labelledby="navbarDropdown1"
            >
              <li class="dropdown-item bg-dark">
                <router-link
                  class="nav-link active"
                  to="/corsi-di-laurea-triennale"
                  >Corsi di laurea triennali</router-link
                >
              </li>
              <li class="dropdown-item bg-dark">
                <router-link
                  class="nav-link active"
                  to="/corsi-di-laurea-magistrale"
                  >Corsi di laurea magistrali</router-link
                >
              </li>
              <li class="dropdown-item bg-dark">
                <router-link
                  class="nav-link active"
                  to="/corsi-di-laurea-magistrale-a-ciclo-unico"
                  >Corsi di laurea magistrali a ciclo unico</router-link
                >
              </li>
            </div>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link active"
              to="/corsi-di-laurea-triennali-ad-accesso-libero"
              >Triennali ad accesso libero</router-link
            >
          </li> 
        </ul>
      </div>
    </div>
  </nav> -->
</template>

