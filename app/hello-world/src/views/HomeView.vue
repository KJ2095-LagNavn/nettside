<template>
  <div class="home">
    <StartCourse />
    <ChildsInfo />
    <ButtonsComponent text1="Write button text here" />
  </div>
</template>

<script>
// @ is an alias to /src
import ButtonsComponent from "@/components/ButtonsComponent.vue";
import StartCourse from "@/components/StartCourse.vue";
import ChildsInfo from "@/components/ChildsInfo.vue";

export default {
  name: "HomeView",
  components: {
    ButtonsComponent,
    StartCourse,
    ChildsInfo,
  },
  props: {
    courseStarted: Boolean,
  },
};
</script>

<style>
.home {
  display: block;
  align-content: center;
}
</style>
