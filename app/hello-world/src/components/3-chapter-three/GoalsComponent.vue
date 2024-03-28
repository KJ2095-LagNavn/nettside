<template>
  <div id="startView">
    <h1>Mål</h1>
    <p>Set deg et hovedmål du ønsker å oppnå</p>
    <b>Jeg ønsker at:</b>
    <BubbleComponent
      v-bind:buttonNames="goals"
      v-bind:maxSelections="4"
      class="grid"
    />
    <Button v-on:click="startChapter()"> Neste </Button>
  </div>
</template>

<script>
import BubbleComponent from "./BubbleComponent.vue";
import { Pages } from "@/store/enums.js";

export default {
  components: {
    BubbleComponent,
  },
  data() {
    return {
      goals: [
        "Barnet skal lære seg grensesetting",
        "At jeg tenker mindre på hva andre tenker om min foreldrestil",
        "At barnet skal være trygg og selvstendig selv langt hjemmefra",
        "At barnet skal beherske bruk av farlige redskaper",
        "At barnet skal beherske lek med høy hastighet",
        "At barnet skal bli klar over egne ferdigheter og berherske lek i høyder",
      ],
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
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
}
</style>
