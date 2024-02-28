<template>
  <video
    :src="src"
    :autoplay="autoplay"
    :loop="loop"
    :muted="muted"
    :controls="controls"
    class="video-player"
    @loadedmetadata="onLoadedMetadata"
    @ended="onEnded"
  >
    Your browser does not support the video tag.
  </video>
</template>

<script>
export default {
  name: "VideoComponent",
  props: {
    src: {
      type: String,
      required: true,
    },
    autoplay: {
      type: Boolean,
      default: false,
    },
    loop: {
      type: Boolean,
      default: false,
    },
    muted: {
      type: Boolean,
      default: false,
    },
    controls: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    onLoadedMetadata(event) {
      // Triggered when the browser has loaded the metadata of the video
      console.log("Video metadata loaded", event);
    },
    onEnded(event) {
      // Triggered when the video has reached the end
      console.log("Video playback ended", event);
      // You can add custom logic here, for example, to emit an event
      this.$emit("ended");
    },
  },
};
</script>

<style>
.video-player {
  width: 100%;
  height: auto;
}
</style>
