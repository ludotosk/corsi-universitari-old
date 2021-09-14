<template>
  <div>
    <footer class="has-background-dark has-text-light footer">
      <div class="content has-text-weight-medium has-text-centered">
        <p>
          Sviluppato a Morgex - Valle d'Aosta da Ludovico Toscano. Contatti email:
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
          <p class="modal-card-title">Unisciti ai nostri gruppi!</p>
          <button
            class="delete"
            aria-label="close"
            v-on:click="attiva()"
          ></button>
        </header>
        <section class="modal-card-body">
          <h2 class="has-text-centered is-size-4 has-text-dark has-text-left">
            Perché i nostri gruppi possono essere d'aiuto?
          </h2>
          <hr />
          <p>
            Nel <mark class="has-background-success">gruppo generico</mark> ti
            puoi confrontare con <strong>centinaia di persone</strong>
            relativamente all'ambito universitario.
          </p>
          <p>
            Nel <mark class="has-background-success">gruppo test</mark> troverai
            il nostro <strong>simulatore test</strong> e altre persone che si
            stanno preparando ai vari <strong>test d'ingresso</strong>, sono
            compresi i <strong>tolc</strong> e i
            <strong>test di medicina</strong>.
          </p>
        </section>
        <footer class="modal-card-foot">
          <a
            href="https://chat.whatsapp.com/EiygmP7oY944HWFgwuejLD"
            class="button is-primary"
            >Generico</a
          >
          <a href="https://t.me/corsiuniversitari" class="button is-primary"
            >Gruppo test</a
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