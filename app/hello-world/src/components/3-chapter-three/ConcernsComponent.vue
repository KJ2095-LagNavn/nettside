<template>
  <div id="startView">
    <h1>Vanlige bekymringer</h1>
    <p>Klikk på bekymringene du kjenner deg mest igjen i</p>
    <b>Jeg er bekymret for at:</b>
    <BubbleComponent
      v-bind:buttonNames="worries"
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
      worries: [
        "Barnet skal skade eller bli skadet i røff lek",
        "At andre skal tenke jeg er en dårlig forelder som lar barnet mitt ta risikoer",
        "At barnet skal være langt hjemmefra uten oppsyn",
        "At barnet skal kutte seg på redskaper(kniv, sag..)",
        "At barnet skal skade seg i høy fart",
        "At barnet faller ned fra treet",
      ],
    };
  },
  methods: {
    startChapter() {
      this.$store.dispatch("setCurrentPage", Pages.ChapterThree.ForThought);
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
