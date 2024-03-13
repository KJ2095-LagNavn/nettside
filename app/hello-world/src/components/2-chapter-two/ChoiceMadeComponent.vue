<template>
  <div id="videobox">
    <h1>{{ this.title }}</h1>
    <VideoComponent :src="this.videoSrc" />
    <button v-on:click="buttonClicked()">Se andre utfall</button>
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
    buttonClicked() {
      console.log("functiom");
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
