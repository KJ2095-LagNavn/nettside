<template>
  <div class="videobox" id="firstVideo">
    <h1>Barnet overnatte med venner i skogen?</h1>
    <VideoComponent src="../assets/videos/testvideo.mp4" />
    <p>Hva ville du ha gjort?</p>
    <button v-on:click="buttonClicked('child climbs down')">Du sier nei</button>
    <button v-on:click="buttonClicked('child climbs up')">Du sier ja</button>
  </div>
</template>

<script>
import VideoComponent from "../VideoComponent.vue";

export default {
  components: {
    VideoComponent,
  },
  methods: {
    buttonClicked(text) {
      console.log(text);
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
