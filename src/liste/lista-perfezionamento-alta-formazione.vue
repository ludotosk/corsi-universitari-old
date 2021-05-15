<template>
  <div class="container is-fullhd">
    <br />
   <h1 class="has-text-centered is-size-2 has-text-grey has-text-left">
      Lista corsi di perfezionamento - alta formazione
    </h1>
    <br />
    <h2 class="has-text-grey is-size-2">
      Qui puoi trovare la lista di tutti i corsi di perfezionamento - alta formazione
    </h2>
    <hr />
    <p>
      <strong>Attenzione!</strong> questa pagina fornisce solo la lista dei corsi di perfezionamento - alta formazione, per avere il
      <strong>link alla pagina del corso</strong> e la
      <strong>funzione di filtro</strong>
      <router-link to="/perfezionamento-alta-formazione" class="has-text-danger">
        visita questa pagina</router-link
      >.
    </p>
    <p>
      Qui si possono trovare oltre
      <strong>800 corsi di perfezionamento - alta formazione</strong>.
    </p>
    <br />
     <table  class="table is-bordered">
     <thead class="has-background-dark">
        <th>Nome corso</th>
        <th>Arco</th>
        <th>Università</th>
      </thead>
      <tbody v-for="corso in corsi" :key="corso.corso">
        <tr data-view>
          <td class="text-break">{{ corso.corso }}</td>
          <td>{{ corso.durata }}</td>
          <td>{{ corso.uni }}</td>
        </tr>
      </tbody>
    </table>
    <br />
    <br />
  </div>
</template>

<script>
//import corsi from "../corsi.json";
import axios from "axios";

export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Lista corsi di perfezionamento - alta formazione",
    // all titles will be injected into this template
    titleTemplate: "%s | corsiuniversitari.info",
    meta: [
      {
        name: "description",
        content:
          "In questa pagina puoi trovare la lista di tutti i corsi di perfezionamento - alta formazione.",
      },
      {
        name: "keywords",
        content: "corsi di perfezionamento - alta formazione",
      },
    ],
    link: [
      {
        rel: "canonical",
        href:
          "https://www.corsiuniversitari.info/lista-perfezionamento-alta-formazione",
      },
    ],
  },
  data() {
    return {
            corsi: [
        {
          n: "Accounting e Finanza",
          h:
            "https://www.unibz.it/en/faculties/economics-management/master-accounting-finance/",
          t: "Magistrale",
          u: "Libera Università di BOLZANO",
          a: "Sì",
          c: "LM-77",
          e: 1,
          s: "BOLZANO - BOZEN",
        },
        {
          n: "Accounting e Libera Professione",
          h: "http://www.accounting-professione.unifi.it/",
          t: "Magistrale",
          u: "Università degli Studi di FIRENZE",
          a: "No",
          c: "LM-77",
          e: 1,
          s: "FIRENZE",
        },
        {
          n: "Acquacoltura e igiene delle produzioni ittiche",
          h: "http://corsi.unibo.it/Laurea/acquacoltura",
          t: "Triennale",
          u: "Alma mater studiorum Università di Bologna",
          a: "No",
          c: "L-38",
          e: 1,
          s: "CESENATICO",
        },
        {
          n: "Advanced Automotive Electronic Engineering",
          h: "http://corsi.unibo.it/2cycle/AutomotiveElectronicEngineering",
          t: "Magistrale",
          u: "Alma mater studiorum Università di Bologna",
          a: "Sì",
          c: "LM-29",
          e: 1,
          s: "BOLOGNA",
        },
        {
          n: "Advanced Automotive Engineering",
          h:
            "http://www.ingmo.unimore.it/site/home/didattica/lauree-magistrali.html",
          t: "Magistrale",
          u: "Università degli Studi di MODENA e REGGIO EMILIA",
          a: "Sì",
          c: "LM-33",
          e: 1,
          s: "MODENA",
        },
        {
          n: "Advanced Cosmetic Sciences",
          h: "http://corsi.unibo.it/2Cycle/AdvancedCosmeticSciences",
          t: "Magistrale",
          u: "Alma mater studiorum Università di Bologna",
          a: "No",
          c: "LM-54",
          e: 1,
          s: "RIMINI",
        },
        {
          n: "Advanced design",
          h:
            "http://corsi.unibo.it/Magistrale/AdvancedDesign/Pagine/default.aspx",
          t: "Magistrale",
          u: "Alma mater studiorum Università di Bologna",
          a: "No",
          c: "LM-12",
          e: 1,
          s: "BOLOGNA",
        },
        {
          n: "ADVANCED MOLECULAR SCIENCES",
          h: "http://www.master-ams.unifi.it/",
          t: "Magistrale",
          u: "Università degli Studi di FIRENZE",
          a: "No",
          c: "LM-54",
          e: 1,
          s: "FIRENZE",
        },
        {
          n: "Aeronautical Engineering - Ingegneria Aeronautica",
          h: "http://www.ingindinf.polimi.it/",
          t: "Magistrale",
          u: "Politecnico di MILANO",
          a: "Sì",
          c: "LM-20",
          e: 1,
          s: "MILANO",
        },
        {
          n: "Aerospace Engineering",
          h: "http://corsi.unibo.it/2cycle/AerospaceEngineering",
          t: "Magistrale",
          u: "Alma mater studiorum Università di Bologna",
          a: "Sì",
          c: "LM-20",
          e: 1,
          s: "FORLI'",
        },
        {
          n: "AEROSPACE ENGINEERING - INGEGNERIA AEROSPAZIALE",
          h: "https://www.ingegneria.unisalento.it/web/942656/home_page",
          t: "Magistrale",
          u: "Università del SALENTO",
          a: "No",
          c: "LM-20",
          e: 1,
          s: "BRINDISI",
        },
        {
          n: "Agribusiness",
          h:
            "https://www.unisi.it/scegli-il-tuo-percorso/ambiente-biologia-chimica-farmacia-geologia/agribusiness",
          t: "Triennale",
          u: "Università degli Studi di SIENA",
          a: "Sì",
          c: "L-25",
          e: 1,
          s: "SIENA",
        },
        {
          n: "AGRICOLTURA SOSTENIBILE",
          h: "http://www.unipg.it/perm/offerta-formativa/2020/corso/276",
          t: "Magistrale",
          u: "Università degli Studi di PERUGIA",
          a: "No",
          c: "LM-69",
          e: 1,
          s: "PERUGIA",
        },
        {
          n: "Agricoltura sostenibile e di precisione",
          h:
            "https://offertaformativa.unicatt.it/cdl-agricoltura-sostenibile-e-di-precisione-2020",
          t: "Magistrale",
          u: "Università Cattolica del Sacro Cuore",
          a: "No",
          c: "LM-69",
          e: 1,
          s: "PIACENZA",
        },
        {
          n: "Agricultural and food economics",
          h:
            "https://offertaformativa.unicatt.it/cdl-agricultural-and-food-economics-2020",
          t: "Magistrale",
          u: "Università Cattolica del Sacro Cuore",
          a: "No",
          c: "LM-69",
          e: 1,
          s: "CREMONA",
        },
        {
          n: "Agroingegneria",
          h: "https://www.unipa.it/dipartimenti/saaf/cds/agroingegneria2073",
          t: "Triennale",
          u: "Università degli Studi di PALERMO",
          a: "No",
          c: "L-25",
          e: 1,
          s: "PALERMO",
        }
      ],
    }
  },
  async beforeCreate() {
    try {
      const res = await axios.get(
        "https://json-server-corsi.herokuapp.com/master?tipo=Corso%20di%20Perfezionamento/Alta%20Formazione&_sort=corso,uni&_order=asc,asc",
      );

      this.corsi = res.data;
    } catch (e) {
      console.log(e);
    }
  },
  /*  methods: {
    FiltraLista: function () {
      var triennale = [];
      for (var x = 0; x < corsi.length; x++) {
        if (corsi[x].t == "Magistrale a Ciclo Unico") {
          triennale.push(corsi[x]);
        }
      }
      return triennale;
    },
  }, */
};
</script>
