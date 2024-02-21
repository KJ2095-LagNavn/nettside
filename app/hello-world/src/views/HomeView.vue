<template>
  <div class="home">
    <MultiChoiceComponent v-bind:buttonNames="['a', 'b', 'Maiken']" />
    <StartCourse />
    <ChildsInfo />
    <SelectChildPropertiesView />
  </div>
</template>

<script>
import MultiChoiceComponent from "@/components/MultiChoiceComponent.vue";
import StartCourse from "@/components/StartCourse.vue";
import ChildsInfo from "@/components/ChildsInfo.vue";
import SelectChildPropertiesView from "./SelectChildPropertiesView.vue";
export default {
  name: "HomeView",
  components: {
    MultiChoiceComponent,
    StartCourse,
    ChildsInfo,
    SelectChildPropertiesView,
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
