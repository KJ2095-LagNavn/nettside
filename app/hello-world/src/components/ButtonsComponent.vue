<template>
  <button :class="{ 'is-clicked': isClicked }" @click="handleClick">
    {{ buttonName }}
  </button>
</template>

<script>
export default {
  name: "ButtonsComponent",
  props: {
    buttonName: String,
    isClicked: Boolean, // Indicates if the button has been clicked
  },
  methods: {
    handleClick() {
      this.$emit("clicked", this.buttonName); // Emit an event with the button text
      console.log(this.buttonName);
    },
  },
};
</script>
