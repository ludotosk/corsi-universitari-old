<template>
  <div id="app">
   <!--  <router-view name="header" /> -->
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  meta: [
    {
      name: "description",
      content:
        "corsiuniversitari.info ti permette di cercare fra tutti i corsi di laurea italiani in base al nome del corso e di trovare quello che fa per te.",
    },
    { name: 'keywords', content: 'Corsi di laurea, Corso di laurea, Corsi universitari, Orientamento universitario' }
  ],
};
</script>
