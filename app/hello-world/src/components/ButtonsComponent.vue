<template>
    <div>
        <button @click="setChoice">{{ text1 }}</button>
    </div>
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
