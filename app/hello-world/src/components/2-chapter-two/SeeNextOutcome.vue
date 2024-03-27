<template>
  <div id="videobox">
    <h1>{{ componentTitle }}</h1>
    <VideoComponent :src="{ videoSrc }" />
    <ButtonsComponent :buttonName="'Neste'" @clicked="buttonClicked" />
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
  props: {
    componentTitle: String,
    videoSrc: String,
    secondVideo: String,
  },
  methods: {
    buttonClicked() {
      var currentPage = this.$store.getters.getCurrentPage;
      console.log(currentPage);
      if (
        currentPage == this.Pages.ChapterTwo.ClimbedUpTreeNext ||
        currentPage == this.Pages.ChapterTwo.ClimbedDownTreeNext
      ) {
        console.log("setting make tree hut");
        this.$store.dispatch("setCurrentPage", Pages.ChapterTwo.MakeTreeHut);
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
