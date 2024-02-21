<script>
import ButtonsComponent from "@/components/ButtonsComponent.vue";

export default {
  name: "MultiChoiceComponent",
  props: {
    buttonNames: Array, // Accept an array of strings for button names
  },
  methods: {
    setChoice(event) {
      console.log(event);
    },
  },
  components: {
    ButtonsComponent,
  },
};
</script>

<template>
  <div>
    <div v-for="(buttonName, index) in buttonNames" :key="index">
      <ButtonsComponent :text1="buttonName" />
    </div>
  </div>
</template>
