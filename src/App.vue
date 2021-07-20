<template>
  <div id="app">
    <router-view name="header"></router-view>
    <router-view style="min-height: 100vh"></router-view>
    <router-view name="panel"></router-view>
    <router-view name="footer"></router-view>
    <div class="modal" v-bind:class="{ 'is-active': isActive }">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Unisciti al gruppo Whatsapp!</p>
          <button
            class="delete"
            aria-label="close"
            v-on:click="attiva()"
          ></button>
        </header>
        <section class="modal-card-body">
          <h2 class="has-text-centered is-size-4 has-text-dark has-text-left">
            Perché accedere al gruppo di corsiuniversitari.info?
          </h2>
          <hr />
          <p>
            <mark class="has-background-success">Perché</mark> puoi trovare
            altre <strong>persone come te che cercano il corso giusto</strong>.
          </p>
          <p>
            <mark class="has-background-success">Perché</mark> a volte è la
            semplice mancanza di informazione a fare la differenza.
          </p>
          <p>
            <mark class="has-background-success">Perché</mark> puoi
            <strong>confrontarti con chi già fa quel corso di laurea</strong>!
          </p>
          <p>
            <mark class="has-background-success">Perché</mark> i
            <strong
              >manifesti universitari sono tutti i uguali e solo uno studente
              conosce la vita della sede universitaria</strong
            >.
          </p>
        </section>
        <footer class="modal-card-foot">
          <a href="https://chat.whatsapp.com/EiygmP7oY944HWFgwuejLD"><button class="button is-primary">Entra nel gruppo</button></a>
          <button class="button" v-on:click="attiva()">Chiudi</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
  async beforeUpdate() {
    try {
      document.getElementById("navbar").setAttribute("class", `navbar-menu`);
    } catch (e) {
      //nulla
    }
  },
  async created() {
    window.setTimeout(this.attiva, 60000);
  },
  methods: {
    attiva() {
      this.isActive = !this.isActive;
    },
  },
};
</script>