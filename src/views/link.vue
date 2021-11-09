<template>
  <div id="pagina">
    <img
      id="logo"
      src="/img/icons/android-chrome-192x192.png"
      alt="logo sito"
      height="96"
      width="96"
    />
    <p id="brand">@present_med.gram | corsiuniversitari.info</p>
    <a href="https://chat.whatsapp.com/EiygmP7oY944HWFgwuejLD"
      >Whatsapp orientamento universitario</a
    >
    <a href="https://t.me/corsiuniversitari">Telegram con simulatore quiz</a>
    <a href="https://www.corsiuniversitari.info/"
      >Sito con tutti i corsi di laurea</a
    >
    <a href="https://instagram.com/present_med.gram"
      >Pagina Instagram per preparazione a medicina</a
    >
    <a href="mailto:corsiuniversitari@ludotosk.it" id="firma">🎨 @ludotosk</a>
  </div>
</template>

<script>
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "@present_med.gram | corsiuniversitari.info",
    meta: [
      {
        name: "description",
        content:
          "Pagina link social di @present_med.gram | corsiuniversitari.info, qui ci sono i link per il sito, instagram, telegram e whatsapp.",
      },
      { name: "robots", content: "noindex" },
    ],
    link: [
      {
        rel: "canonical",
        href: "https://www.corsiuniversitari.info/link",
      },
    ],
  },
};
</script>


<style>
#pagina {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
}
#brand {
  margin: 1em;
}
#logo {
  background-color: white;
  border-radius: 50%;
  margin: 1em;
}
body {
  background-color: #3d3b3c;
  color: white;
  font-weight: bold;
}
a {
  padding: 1em;
  margin: 0.5em;
  width: calc(100% - 1em);
  max-width: 680px;
  border-radius: 0px;
  background-color: white;
  font-weight: bold;
  border: 2px solid white;
  transition: 0.25s;
  font-size: 16px;
  text-transform: uppercase;
  text-align: center;
  color: black;
}
a:hover {
  background-color: #3d3b3c;
  color: white;
}
#firma {
  all: unset;
  position: absolute;
  bottom: 1em;
  cursor: pointer;
}
</style>