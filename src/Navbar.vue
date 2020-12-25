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
            <router-link class="nav-link active" to="/corsi-di-laurea"
              >Cerca corsi di laurea</router-link
            >
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle active"
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
              <router-link
                class="nav-link active"
                to="/lista-corsi-di-laurea-triennali"
                >Lista Triennali</router-link
              >
              <router-link
                class="nav-link active"
                to="/lista-corsi-di-laurea-magistrali"
                >Lista Magistrali</router-link
              >
              <router-link
                class="nav-link active"
                to="/lista-corsi-di-laurea-magistrali-a-ciclo-unico"
                >Lista Magistrali a Ciclo Unico</router-link
              >
              <router-link
                class="nav-link active"
                to="/lista-corsi-di-laurea-triennali-ad-accesso-libero"
                >Lista Triennali ad accesso libero</router-link
              >
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
