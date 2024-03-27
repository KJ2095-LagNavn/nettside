<template>
  <div class="videobox" id="firstVideo">
    <h1>Barnet overnatte med venner i skogen?</h1>
    <VideoComponent src="../assets/videos/testvideo.mp4" />
    <p>Hva ville du ha gjort?</p>
    <button v-on:click="buttonClicked('nei')">Du sier nei</button>
    <button v-on:click="buttonClicked('ja')">Du sier ja</button>
  </div>
</template>

<script>
import VideoComponent from "../VideoComponent.vue";
import { Pages } from "@/store/enums.js";

export default {
  components: {
    VideoComponent,
  },
  methods: {
    buttonClicked(text) {
      if (text === "ja") {
        this.$store.dispatch("setCurrentPage", Pages.ChapterTwo.Sleepover);
      } else {
        this.$store.dispatch("setCurrentPage", Pages.ChapterTwo.NoSleepover);
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
