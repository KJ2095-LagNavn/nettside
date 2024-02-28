<template>
  <div class="home">
    <MultiChoiceComponent v-bind:buttonNames="['a', 'b', 'Maiken']" />
<StartCourse />
    <ChildsInfo />
    <VideoComponent
      :src="require('@/assets/videos/testvideo.mp4')"
      :autoplay="true"
      :loop="true"
      :muted="true"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import MultiChoiceComponent from "@/components/MultiChoiceComponent.vue";
import StartCourse from "@/components/StartCourse.vue";
import ChildsInfo from "@/components/ChildsInfo.vue";
import VideoComponent from "@/components/VideoComponent.vue";

export default {
  name: "HomeView",
  components: {
    MultiChoiceComponent,
    StartCourse,
    ChildsInfo,
    VideoComponent,
  },
};
</script>

<style>
.home {
  display: block;
  align-content: center;
}
</style>
