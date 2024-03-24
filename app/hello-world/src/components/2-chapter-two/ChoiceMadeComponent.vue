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

export default {
  components: {
    VideoComponent,
    ButtonsComponent,
  },
  props: {
    componentTitle: String,
    videoSrc: String,
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
