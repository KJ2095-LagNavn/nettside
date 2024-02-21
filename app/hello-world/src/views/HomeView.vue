<template>
  <div class="home">
    <MultiChoiceComponent v-bind:buttonNames="['a', 'b', 'Maiken']" />
    <StartCourse />
    <ChildsInfo />
  </div>
</template>

<script>
import MultiChoiceComponent from "@/components/MultiChoiceComponent.vue";
import StartCourse from "@/components/StartCourse.vue";
import ChildsInfo from "@/components/ChildsInfo.vue";
export default {
  name: "HomeView",
  components: {
    MultiChoiceComponent,
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
