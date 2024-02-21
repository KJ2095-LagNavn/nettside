<template>
  <div class="home">
    <ButtonsComponent text1="Write button text here" />
  </div>
</template>

<script>
// @ is an alias to /src
import ButtonsComponent from "@/components/ButtonsComponent.vue";

export default {
  name: "HomeView",
  components: {
    ButtonsComponent,
  },
};
</script>
