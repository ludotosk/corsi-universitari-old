<template>
  <div class="container is-fullhd" data-view>
    <br />
    <h1 class="has-text-centered is-size-2 has-text-dark has-text-left">
      Inviaci qui il tuo feedback
    </h1>
    <hr />
    <form
      name="feedback"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="feedback" />
      <div class="form-group form-row">
        <label for="nome">Nome:</label>
        <br />
        <div class="control">
          <input id="nome" type="text" name="name" class="input" />
        </div>
      </div>
      <div class="form-group">
        <label for="email">Email: </label>
        <br />
        <div class="control">
          <input id="email" type="email" name="email" class="input" />
        </div>
      </div>
      <div class="form-group">
        <label for="message">Il tuo messaggio:</label>
        <br />
        <div class="control">
          <textarea id="message" name="message" class="textarea"></textarea>
        </div>
      </div>
      <br />
      <div class="control">
        <button type="submit" class="button is-link has-background-dark">
          Invia
        </button>
      </div>
    </form>
    <br />
    <p>
      L'unica cosa necessaria per la compilazione del form è il messaggio. Nome
      ed e-mail sono opzionali. Però se vuoi essere ricontattato l'e-mail è
      d'obbligo. Schiacciando invia mi arriverà una notifica via e-mail di un
      nuovo messaggio.
    </p>
  </div>
</template>

<script>
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "contattami",
    // all titles will be injected into this template
    titleTemplate: "%s | corsiuniversitari.info",
    meta: [
      {
        name: "description",
        content:
          "Pagina dei feedback, se hai qualcosa da scrivermi puoi contattarmi qui. Mi verrà mandata automaticamente un'email col testo del messaggio.",
      },
      {
        name: "keywords",
        content:
          "Corsi di laurea, Corso di laurea, Corsi universitari, Orientamento universitario",
      },
    ],
    link: [
      {
        rel: "canonical",
        href: "https://www.corsiuniversitari.info/contattami",
      },
    ],
  },
};
</script>