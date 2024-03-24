<template>
  <div id="startView">
    <h1>Kapittel 2: Scenarioer og Håndtering</h1>
    <p>
      Dette kapitlet skal ta deg gjennom 3 interaktive videoer. Se for deg at du
      er forelder og {{ this.childsName }} er barnet i videoene, og tenk over
      hva du ville gjort i situasjonene som oppstår. Valgene du tar vil påvirke
      utfallene i videoen. Hensikten med kapittel 2 er reflektere over hvordan
      ditt valg påvirket barnet.
    </p>
    <Button v-on:click="startChapter()"> Start Kapittel 2 </Button>
  </div>
</template>

<script>
import { Pages } from "@/store/enums";

export default {
  data() {
    return {
      childsName: String,
    };
  },
  methods: {
    startChapter() {
      this.$store.dispatch("setCurrentPage", Pages.ChapterTwo.ClimbTree);
    },
  },
  created() {
    this.childsName = this.$store.getters.getChildsName;
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
