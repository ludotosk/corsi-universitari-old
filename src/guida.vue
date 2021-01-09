<template>
  <div class="container-md" data-view>
    <br />
    <h1 class="text-secondary">Guida all'utilizzo del sito</h1>
    <h2 class="text-secondary">
      Come scegliere corso di laurea? Ecco il nostro sito!
    </h2>
    <hr />
    <div class="embed-responsive embed-responsive-16by9">
      <iframe
        class="embed-responsive-item"
        src="https://www.youtube.com/embed/ZOE7AzL7ncs"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Guida al sito",
    titleTemplate: "%s | corsiuniversitari.info",
    meta: [
      {
        name: "description",
        content:
          "In questa pagina c'è il nostro video guida all'utilizzo del sito. Speriamo possa esserti d'aiuto nella ricerca del tuo corso di laurea.",
      },
      {
        name: "keywords",
        content:
          "Corsi di laurea, Corso di laurea, Corsi universitari, Orientamento universitario",
      },
    ],
    link: [{ rel: "canonical", href: "https://www.corsiuniversitari.info/guida" }],
  },
};
</script>