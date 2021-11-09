<template>
  <div>
    <footer class="has-background-dark has-text-light footer">
      <div class="content has-text-weight-medium has-text-centered">
        <p>
          Sviluppato a Morgex - Valle d'Aosta da Ludovico Toscano. Contatti:
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
            Come possiamo aiutarti?
          </h2>
          <hr />
          <p>
            Abbiamo un
            <mark class="has-background-success">gruppo di orientamento</mark>,
            un
            <mark class="has-background-success"
              >gruppo dedicato ai test d'ingresso</mark
            >
            e in fine una
            <mark class="has-background-success">pagina Instagram per</mark> la
            preparazione a <mark class="has-background-success">medicina</mark>!
          </p>
          <p>
            Nel gruppo di <strong>orientamento</strong> troverai centania di
            persone che come te cercando di entrare nel corso giusto.
          </p>
          <p>
            Nel gruppo per i <strong>test d'ingresso</strong> troverai persone
            che come te si vogliono preparare ai <strong>tolc</strong> o al
            <strong>test di medicina</strong>. Inoltre abbiamo un
            <strong>simulatore per i test</strong>.
          </p>
          <p>
            Infine l'account <strong>Instagram per medicina</strong> conterrà
            informazioni utili per aiutarti a passare il test.
          </p>
        </section>
        <footer class="modal-card-foot">
          <a href="https://www.corsiuniversitari.info/link" class="button is-primary"
            >Link di accesso</a
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