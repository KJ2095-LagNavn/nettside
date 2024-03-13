<template>
  <p id="textbox">
    {{ text }}
  </p>
</template>

<script>
export default {
  props: {
    text: String,
  },
};
</script>

<style>
#textbox {
  border-radius: 8px;
  background-color: bisque;
}
</style>
