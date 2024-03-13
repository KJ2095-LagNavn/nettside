<template>
  <div id="startView">
    <h1>Kapittel 2: Scenarioer og Håndtering</h1>
    <p>
      Dette kapitlet skal ta deg gjennom 3 interaktive videoer. Se for deg at du
      er forelder og {{ this.maiken }} er barnet i videoene, og tenk over hva du
      ville gjort i situasjonene som oppstår. Valgene du tar vil påvirke
      utfallene i videoen. Hensikten med kapittel 2 er reflektere over hvordan
      ditt valg påvirket barnet.
    </p>
    <Button v-on:click="startChapter()"> Start Kapittel 2 </Button>
  </div>
  <ClimbTreeCompnent
    :class="{ active: isStartActive }"
    @changeComponent="changeComponent"
  />
  <ClimbsUpTreeComponent
    :class="{ active: isStartActive }"
    videoSrc="../assets/videos/testvideo.mp4"
    title="Heyy"
  />
</template>

<script>
import ClimbTreeCompnent from "@/components/ClimbTreeComponent.vue";
import ClimbsUpTreeComponent from "@/components/ClimbsUpTreeComponent.vue";

export default {
  name: "KapittelTo",
  components: {
    ClimbTreeCompnent,
    ClimbsUpTreeComponent,
  },
  data() {
    return {
      childsName: String,
      isStartActive: true,
      component1: ClimbsUpTreeComponent,
    };
  },
  created() {
    this.childsName = this.$store.getters.getChildsName;
  },
  methods: {
    startChapter() {
      document.getElementById("startView").style.display = "none";
      this.isStartActive = !this.isStartActive;
    },
    getChildsName() {
      return this.$store.getters.getChildsName;
    },
    changeComponent() {
      console.log("Change component");
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
.active {
  display: none;
}
</style>
