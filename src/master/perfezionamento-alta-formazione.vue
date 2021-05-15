<template>
  <div class="container is-fullhd">
    <br />
   <h1 class="has-text-centered is-size-2 has-text-grey has-text-left">Corsi di Perfezionamento - Alta Formazione</h1>
    <br />
    <div class="field is-horizontal">
      <div class="field-body">
        <div class="field has-addons">
          <p class="control">
            <label for="basic-url" class="button is-static has-text-weight-medium has-text-black">Filtra in base al nome:</label>
          </p>
          <input
            type="text"
            class="input"
            id="basic-url"
            aria-describedby="basic-addon3"
            v-model="filters.corso.value"
          />
        </div>
      </div>
    </div>
    <p>
      <strong>Attenzione!</strong> per eseguire la ricerca serve il nome del
      corso corretto. Es. <strong>biotecnologie</strong> si trova sotto
      "biotecnologie" "biotecnologia" "biotechnology" quindi per avere il
      risultato corretto inserire <strong>"biotec"</strong>. Cioè la parte
      comune a tutti i nomi.
    </p><br>
    <v-table
      :data="corsi"
      :filters="filters"
      :pageSize="15"
      @totalPagesChanged="totalPages = $event"
      :currentPage.sync="currentPage"
      class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth"
    >
      <thead slot="head" class="has-background-dark">
          <th class="has-text-white">Nome del master</th>
        <th class="has-text-white">Livello</th>
        <th class="has-text-white">Arco</th>
        <v-th class="has-text-white" sortKey="uni" defaultSort="asc">Università</v-th>
      </thead>
      <tbody slot="body" slot-scope="{ displayData }" data-view>
        <tr v-for="row in displayData" :key="row.guid">
          <td>
            <a
              :href="row.link"
              target="_blank"
              rel="noopener"
              class="has-text-danger"
              >{{ row.corso }}</a
            >
          </td>
          <td class="text-break">{{ livello }}</td>
          <td>{{ row.durata }}</td>
          <td>{{ row.uni }}</td>
        </tr>
      </tbody>
    </v-table>
    <smart-pagination
      :currentPage.sync="currentPage"
      :totalPages="totalPages"
      :maxPageLinks="4"
    />
    <br />
    <p>
      Qui si possono trovare
      <strong>tutti i corsi di perfezionamento - alta formazione</strong
      >.
    </p>
    <p>
      <strong> Come funziona?</strong> È molto semplice, basta digitare nella
      barra di ricerca es. "data science" e comparirà la lista di tutti i corsi
      con quel nome.
    </p>
    <br />
  </div>
</template>

<script>
//import corsi from "../corsi.json";
import axios from "axios";

export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Corsi perfezionamento - alta formazione",
    // all titles will be injected into this template
    titleTemplate: "%s | corsiuniversitari.info",
    meta: [
      {
        name: "description",
        content:
          "In questo sito potrai trovare rapidamente tutti i corsi di perfezionamento - alta formazione, tutti raggruppati su una comoda tabella.",
      },
      {
        name: "keywords",
        content: "Master di Secondo livello",
      },
    ],
    link: [
      {
        rel: "canonical",
        href: "https://www.corsiuniversitari.info/perfezionamento-alta-formazione",
      },
    ],
  },
  data() {
    return {
      filters: {
        corso: { value: "", keys: ["corso"] },
      },
      currentPage: 1,
      totalPages: 0,
      livello: "Corso Perfezionamento - Alta Formazione",
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
    };
  },
  async beforeCreate() {
    try {
      const res = await axios.get(
        "https://json-server-corsi.herokuapp.com/master?tipo=Corso%20di%20Perfezionamento/Alta%20Formazione&_sort=corso,uni&_order=asc,asc"
      );

      this.corsi = res.data;
    } catch (e) {
      console.log(e);
    }
  },
};
</script>