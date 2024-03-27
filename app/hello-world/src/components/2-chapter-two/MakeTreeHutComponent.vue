<template>
  <div class="videobox" id="firstVideo">
    <h1>Barnet vil bygge trehytte med farlig verktøy</h1>
    <VideoComponent src="../assets/videos/testvideo.mp4" />
    <p>Hva ville du ha gjort?</p>
    <button v-on:click="buttonClicked('vis barnet')">
      Vis barnet hvordan verktøyene brukes og la barnet gjøre jobben selv
    </button>
    <button v-on:click="buttonClicked('gjør selv')">
      Vis barnet hvordan verktøyene brukes og gjør jobben selv
    </button>
  </div>
</template>

<script>
import VideoComponent from "../VideoComponent.vue";
import { Pages } from "@/store/enums.js";

export default {
  components: {
    VideoComponent,
  },
  data() {
    return {
      Pages,
    };
  },
  methods: {
    buttonClicked(text) {
      if (text === "vis barnet") {
        this.$store.dispatch(
          "setCurrentPage",
          Pages.ChapterTwo.ChildMadeTreeHut
        );
      } else {
        this.$store.dispatch(
          "setCurrentPage",
          Pages.ChapterTwo.ParentMadeTreeHut
        );
      }
    },
  },
};
</script>

<style>
.videobox {
  padding: 3em;
  margin: 3em;
  background-color: #ececec;
  border-radius: 25px;
  position: relative;
}
</style>
