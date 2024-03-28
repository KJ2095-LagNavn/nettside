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
  data() {
    return {
      Pages,
    };
  },
  props: {
    componentTitle: String,
    videoSrc: String,
    secondVideo: String,
  },
  methods: {
    buttonClicked() {
      var currentPage = this.$store.getters.getCurrentPage;
      if (
        currentPage == this.Pages.ChapterTwo.ClimbedUpTreeNext ||
        currentPage == this.Pages.ChapterTwo.ClimbedDownTreeNext
      ) {
        this.$store.dispatch("setCurrentPage", Pages.ChapterTwo.MakeTreeHut);
      } else if (
        currentPage == this.Pages.ChapterTwo.ChildMadeTreeHutNext ||
        currentPage == this.Pages.ChapterTwo.ParentMadeTreeHutNext
      ) {
        this.$store.dispatch("setCurrentPage", Pages.ChapterTwo.TentSleepover);
      } else if (
        currentPage == this.Pages.ChapterTwo.NoSleepoverNext ||
        currentPage == this.Pages.ChapterTwo.SleepoverNext
      ) {
        this.$store.dispatch("setCurrentPage", Pages.ChapterThree.Intro);
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
