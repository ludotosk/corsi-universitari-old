<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
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
              Corsi di laurea per livello
            </a>
            <div class="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
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
  </nav>
</template>

