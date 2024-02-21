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
    StartCourse,
    ChildsInfo,
  },
};
</script>

<style>
.home {
  display: block;
  align-content: center;
}
</style>
