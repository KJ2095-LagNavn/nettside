<template>
  <div>
    <div v-for="(buttonName, index) in buttonNames" :key="index" class="bubble">
      <ButtonsComponent
        :buttonName="buttonName"
        :isClicked="isButtonClicked(buttonName)"
        @clicked="handleButtonClick"
      />
    </div>
  </div>
</template>

<script>
import ButtonsComponent from "@/components/ButtonsComponent.vue";

export default {
  props: {
    buttonNames: Array,
    maxSelections: {
      type: Number,
      default: 5, // Set a default value of 5
    },
  },

  data() {
    return {
      clickedButtons: [],
    };
  },
  methods: {
    handleButtonClick(buttonName) {
      const index = this.clickedButtons.indexOf(buttonName);
      if (index > -1) {
        // Button already clicked, remove it from the array
        this.clickedButtons.splice(index, 1);
      } else if (this.clickedButtons.length < this.maxSelections) {
        // Button not clicked yet, add it to the array if less than maxSelections are selected
        this.clickedButtons.push(buttonName);
      } else {
        // Handle the case where more than maxSelections buttons would be selected
        console.warn(`Maximum of ${this.maxSelections} selections allowed.`);
        // Implement user feedback mechanism here (e.g., toast notification)
      }
    },
    isButtonClicked(buttonName) {
      return this.clickedButtons.includes(buttonName);
    },
  },
  components: {
    ButtonsComponent,
  },
};
</script>

<style>
.bubble {
  margin: 10px;
}
button.is-clicked {
  background-color: #36a85f;
}
</style>
