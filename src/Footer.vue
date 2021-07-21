<template>
  <div>
    <footer class="has-background-dark has-text-light footer">
      <div class="content has-text-weight-medium has-text-centered">
        <p>
          Sito a cura di Ludovico Toscano. Contatti email:
          <a href="mailto:corsiuniversitari@ludotosk.it" class="has-text-danger"
            >corsiuniversitari@ludotosk.it</a
          >
          oppure
          <router-link to="/contattami" class="has-text-danger"
            >usa questa pagina</router-link
          >. Per leggere l'informativa sui cookie
          <router-link to="/cookie-policy" class="has-text-danger">
            visita questa pagina</router-link
          >.
        </p>
      </div>
    </footer>
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
          <a href="https://chat.whatsapp.com/EiygmP7oY944HWFgwuejLD"
            ><button class="button is-primary">Entra nel gruppo</button></a
          >
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