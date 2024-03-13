<template>
  <div class="multiChoiceComponent">
    <div v-for="(buttonName, index) in buttonNames" :key="index">
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
  name: "MultiChoiceComponent",
  props: {
    buttonNames: Array,
    maxSelections: {
      type: Number,
      default: 4, // Set a default value of 5
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
.multiChoiceComponent {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  margin: 10px;
  padding: 60px;
}
.multiChoiceComponent button {
  background-color: #2c3e50;
  margin: 2px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: larger;
  padding: 10px 5px;
  border-radius: 8px;
  color: white;
  width: 100%;
}
.multiChoiceComponent button:hover {
  background-color: #34495e;
}
.multiChoiceComponent button.is-clicked {
  background-color: #36a85f;
}
.multiChoiceComponent button.is-clicked:hover {
  background-color: #2ecc71;
}
</style>
