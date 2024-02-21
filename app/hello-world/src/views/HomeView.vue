<template>
  <div class="home">
    <MultiChoiceComponent v-bind:buttonNames="['a', 'b', 'Maiken']" />
    <StartCourse />
    <ChildsInfo />
    <ButtonsComponent text1="Write button text here" />
  </div>
</template>

<script>
// @ is an alias to /src
import MultiChoiceComponent from "@/components/MultiChoiceComponent.vue";
import ButtonsComponent from "@/components/ButtonsComponent.vue";
import StartCourse from "@/components/StartCourse.vue";
import ChildsInfo from "@/components/ChildsInfo.vue";

export default {
  name: "HomeView",
  components: {
    ButtonsComponent,
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
