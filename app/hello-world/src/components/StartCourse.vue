<template>
  <div class="startCourse">
    <h1>Kurs i Risikofylt Lek</h1>
    <button @click="startCourse">Start Kurset</button>
  </div>
</template>

<script>
export default {
  name: "StartCourseComponent",
  methods: {
    startCourse() {
      this.$store.dispatch("setStartCourse");
      console.log(this.$store.getters.getCurrentState);
      this.$store.dispatch("incrementCurrentState");
      console.log(this.$store.getters.getCurrentState);
      this.isActive = !this.isActive;
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
