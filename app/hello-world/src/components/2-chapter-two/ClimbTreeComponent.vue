<template>
  <div id="videobox">
    <h1>Barnet klatrer opp i et høyt tre</h1>
    <VideoComponent src="../assets/videos/testvideo.mp4" />
    <p>Hva ville du ha gjort?</p>
    <ButtonsComponent
      :buttonName="'Be barnet klatre ned'"
      @clicked="buttonClicked('child climbs down')"
    />
    <ButtonsComponent
      :buttonName="'La barnet klatre videre'"
      @clicked="buttonClicked('child climbs up')"
    />
  </div>
</template>

<script>
import VideoComponent from "../VideoComponent.vue";
import ButtonsComponent from "../ButtonsComponent.vue";
import { Pages } from "@/store/enums.js";

export default {
  components: {
    VideoComponent,
    ButtonsComponent,
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
      if (upOrDown === "child climbs up") {
        this.$store.dispatch("setCurrentPage", Pages.ChapterTwo.ClimbedUpTree);
      } else {
        this.$store.dispatch(
          "setCurrentPage",
          Pages.ChapterTwo.ClimbedDownTree
        );
      }
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
