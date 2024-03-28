<template>
  <div id="startView">
    <h1>Kapittel 3: Bevisstgjøring og tiltaksplan for tiden fremover</h1>
    <p>
      Hensikten med kapittel 3 er å bevisstgjøre egne bekymringer og opplyse om
      hvilke tiltak man kan gjøre for å redusere de.
    </p>
    <Button v-on:click="startChapter()"> Start Kapittel 3 </Button>
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
      this.$store.dispatch("setCurrentPage", Pages.ChapterThree.Concerns);
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
