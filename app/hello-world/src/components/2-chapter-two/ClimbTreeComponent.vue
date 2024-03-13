<template>
  <div id="videobox">
    <h1>Barnet klatrer opp i et høyt tre</h1>
    <VideoComponent src="../assets/videos/testvideo.mp4" />
    <p>Hva ville du ha gjort?</p>
    <button v-on:click="buttonClicked('child climbs down')">
      Be barnet klatre ned
    </button>
    <button v-on:click="buttonClicked('child climbs up')">
      La barnet klatre videre
    </button>
  </div>
</template>

<script>
import VideoComponent from "../VideoComponent.vue";

export default {
  components: {
    VideoComponent,
  },
  data() {
    return {
      title: String,
      text: String,
      videoSrc: String,
    };
  },
  methods: {
    buttonClicked(upOrDown) {
      this.$store.dispatch("setFirstClimbing", upOrDown);
      this.$emit("changeComponent", upOrDown);
    },
  },
};
</script>

<style>
#videobox {
  padding: 3em;
  margin: 3em;
  background-color: #ececec;
  border-radius: 25px;
  position: relative;
}
</style>
