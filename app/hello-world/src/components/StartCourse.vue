<template>
  <div class="startCourse" :class="{ active: isActive }">
    <h1>Kurs i Risikofylt Lek</h1>
    <button @click="startCourse">Start Kurset</button>
  </div>
</template>

<script>
export default {
  name: "StartCourseComponent",
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    startCourse() {
      this.$store.dispatch("setStartCourse");
      this.$store.dispatch("incrementCurrentState");
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
.active {
  display: none;
}
</style>
