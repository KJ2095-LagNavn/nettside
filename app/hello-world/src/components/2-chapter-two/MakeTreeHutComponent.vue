<template>
  <div class="videobox" id="firstVideo">
    <h1>Barnet vil bygge trehytte med farlig verktøy</h1>
    <VideoComponent src="../assets/videos/testvideo.mp4" />
    <p>Hva ville du ha gjort?</p>
    <button v-on:click="buttonClicked('child climbs down')">
      Vis barnet hvordan verktøyene brukes og la barnet gjøre jobben selv
    </button>
    <button v-on:click="buttonClicked('child climbs up')">
      Vis barnet hvordan verktøyene brukes og gjør jobben selv
    </button>
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
  display: inline-block;
  margin: 3em;
  background-color: #ececec;
  border-radius: 25px;
  position: relative;
}
</style>
