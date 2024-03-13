<template>
  <div class="startCourse">
    <h1>Kurs i Risikofylt Lek</h1>
    <button @click="startCourse">Start Kurset</button>
  </div>
</template>

<script>
import { Chapter } from "@/store/enums.js";
export default {
  name: "StartCourseComponent",
  methods: {
    startCourse() {
      this.$store.dispatch("setStartCourse");
      this.$store.dispatch("setCurrentChapter", Chapter.Intro);
      this.$store.dispatch("setCurrentPage", 1);
      console.log(this.$store.getters.getCurrentChapterAndPage);
    },
  },
};
</script>

<style>
.startCourse {
  padding: 3em;
  margin: 3em;
  background-color: #ececec;
  border-radius: 25px;
  width: 50%;
  height: 30%;
  position: relative;
}
</style>
