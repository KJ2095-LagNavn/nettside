<template>
  <div id="videobox">
    <h1>{{ componentTitle }}</h1>
    <VideoComponent :src="{ videoSrc }" />
    <ButtonsComponent
      :buttonName="'Se andre utfall'"
      @clicked="buttonClicked"
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
  props: {
    componentTitle: String,
    videoSrc: String,
    secondVideo: String,
  },
  data() {
    return {
      Pages,
    };
  },
  methods: {
    buttonClicked() {
      var currentPage = this.$store.getters.getCurrentPage;
      if (currentPage == this.Pages.ChapterTwo.ClimbedUpTree) {
        this.$store.dispatch(
          "setCurrentPage",
          Pages.ChapterTwo.ClimbedDownTreeNext
        );
      } else if (currentPage == this.Pages.ChapterTwo.ClimbedDownTree) {
        this.$store.dispatch(
          "setCurrentPage",
          Pages.ChapterTwo.ClimbedUpTreeNext
        );
      }
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
