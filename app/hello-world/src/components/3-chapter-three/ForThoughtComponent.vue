<template>
  <div id="startView">
    <h1>Til tanke</h1>
    <p>
      I dag tenker vi mer over barnas oppvekst enn vi gjorde før, og deres frie
      lek og nysgjerrighet kan dempes av all tilretteleggingen vi gjør for at
      leken skal være trygg, uansett. Selv om det er gode tanker som ligger til
      grunn så må vi også huske å <b>la barn få være barn.</b>
    </p>
    <div>
      Av mye forskning som OutdoorPlay i Canada har gjennomført
      [https://www.outsideplay.org/], så oppsummeres det fint i at barn liker,
      utforsker og trenger lek som inneholder
      <li>høyder</li>
      <li>høye hastigheter</li>
      <li>bruk av verktøy som hammer, sag og kniv</li>
      <li>nærhet til naturens elementer som vann og ild</li>
      <li>røffhet</li>
      ... for at de skal få god og viktig utvikling, og god fysisk og mental
      helse.
    </div>
    <div>
      <p>
        Få ting er så viktig som den utviklingen vi har som barn, den følger oss
        hele livet. Selv om det kan virke skremmende å se barnet ditt klatre
        høyt, løpe fort eller bruke kniv, er det viktig å huske på at dette er
        viktig for barnas utvikling. Så neste gang du kjenner hjertet slå
        hardere når barnet ditt er høyt i et tre: Ta et steg tilbake, pust
        rolig, tenk på hvor modig barnet er som tørr og hvor flink det er som
        får det til, og bruk det til å bygge opp selvtillitt.
      </p>
    </div>
    <Button v-on:click="startChapter()"> Neste </Button>
  </div>
</template>

<script>
import { Pages } from "@/store/enums.js";

export default {
  data() {
    return {
      Pages,
    };
  },
  methods: {
    startChapter() {
      this.$store.dispatch("setCurrentPage", Pages.ChapterThree.Actions);
    },
  },
};
</script>

<style>
#startView {
  padding: 3em;
  margin: 3em;
  background-color: #ececec;
  border-radius: 25px;
  width: 50%;
  height: 30%;
  position: relative;
}
</style>
