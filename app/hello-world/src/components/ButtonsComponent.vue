<template>
  <button @click="setChoice">{{ text1 }}</button>
</template>

<script>
export default {
  name: "ButtonsComponent",
  props: {
    text1: String,
  },
  methods: {
    setChoice(event) {
      console.log(event);
    },
  },
};
</script>
