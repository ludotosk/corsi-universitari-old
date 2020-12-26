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
              Università
            </a>
            <div class="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
              <li class="nav-item">
                <router-link class="nav-link active" to="/corsi-di-laurea-unibo"
                  >Corsi di laurea Unibo</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link active" to="/corsi-di-laurea-unipi"
                  >Corsi di laurea Unipi</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link active" to="/corsi-di-laurea-unipd"
                  >Corsi di laurea Unipd</router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link active"
                  to="/corsi-di-laurea-sapienza"
                  >Corsi di laurea La Sapienza</router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link active"
                  to="/corsi-di-laurea-bicocca"
                  >Corsi di laurea Bicocca</router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link active"
                  to="/corsi-di-laurea-polimi"
                  >Corsi di laurea Polimi</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link active" to="/corsi-di-laurea-uniba"
                  >Corsi di laurea Uniba</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link active" to="/corsi-di-laurea-unifi"
                  >Corsi di laurea Unifi</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link active" to="/corsi-di-laurea-unimi"
                  >Corsi di laurea Unimi</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link active" to="/corsi-di-laurea-unina"
                  >Corsi di laurea Unina</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link active" to="/corsi-di-laurea-unipa"
                  >Corsi di laurea Unipa</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link active" to="/corsi-di-laurea-unipd"
                  >Corsi di laurea Unipd</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link active" to="/corsi-di-laurea-unipr"
                  >Corsi di laurea Unipr</router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link active"
                  to="/corsi-di-laurea-uniroma1"
                  >Corsi di laurea Uniroma1</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link active" to="/corsi-di-laurea-unisa"
                  >Corsi di laurea Unisa</router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link active"
                  to="/corsi-di-laurea-unito"
                  >Corsi di laurea Unito</router-link
                >
              </li>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

