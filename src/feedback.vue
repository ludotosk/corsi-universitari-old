<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <br />
        <form
          name="feedback"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          data-netlify-recaptcha="true"
        >
          <input type="hidden" name="form-name" value="feedback" />
          <div class="form-group form-row">
            <label>Nome:</label>
            <br />
            <input
              type="text"
              name="name"
              class="form-control form-control-lg"
            />
          </div>
          <div class="form-group">
            <label>Email: </label>
            <br />
            <input
              type="email"
              name="email"
              class="form-control form-control-lg"
            />
          </div>
          <div class="form-group">
            <label>Il tuo messaggio:</label>
            <br />
            <textarea name="message" class="form-control"></textarea>
          </div>
          <div data-netlify-recaptcha="true"></div>
          <p>
            <button type="submit" class="btn btn-info">
              Invia
            </button>
          </p>
        </form>
        <br />
        <p>
          L'unica cosa necessaria per la compilazione del form è il messaggio.
          Nome ed e-mail sono opzionali. Però se vuoi essere ricontattato
          l'e-mail è d'obbligo. Schiacciando invia mi arriverà una notifica via
          e-mail di un nuovo messaggio.
        </p>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
import corsi from "../public/corsi.json";

export default {
  name: "feedback",
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "corsiuniversitari.info",
    // all titles will be injected into this template
    titleTemplate: "%s | invia feedback",
    meta: [
      {
        name: "description",
        content:
          "Pagina dei feedback, se hai qualcosa da scrivermi puoi contattarmi qui. Mi verrà mandata automaticamente un'email col testo del messaggio.",
      },
    ],
  },
  data() {
    return {
      corsi,
      filters: {
        nomeCorso: { value: "", keys: ["nomeCorso"] },
      },
      currentPage: 1,
      totalPages: 0,
    };
  },
  methods: {
    nameLength(row) {
      return row.tipoLaurea.length;
    },
  },
};
</script>