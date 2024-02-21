<template>
  <div class="home">
    <MultiChoiceComponent v-bind:buttonNames="['a', 'b', 'Maiken']" />
  </div>
</template>

<script>
// @ is an alias to /src
import MultiChoiceComponent from "@/components/MultiChoiceComponent.vue";
export default {
  name: "HomeView",
  components: {
    MultiChoiceComponent,
  },
};
</script>
