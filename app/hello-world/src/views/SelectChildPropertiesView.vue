<template>
  <h1>Hvilke egenskaper vil du barnet skal ha?</h1>
  <MultiChoiceComponent
    v-bind:buttonNames="wantedChildProperties"
    v-bind:maxSelections="4"
    class="childProperties"
  />
  <ButtonsComponent :buttonName="Neste" :isClicked="false" />
</template>

<script>
import ButtonsComponent from "@/components/ButtonsComponent.vue";
import MultiChoiceComponent from "@/components/MultiChoiceComponent.vue";
export default {
  name: "HomeView",
  data() {
    return {
      wantedChildProperties: [
        "Selvstendig",
        "Kreativ",
        "Sosial",
        "Fysisk aktiv",
        "Språklig",
        "Matematisk",
        "Musikalsk",
        "Kunstnerisk",
        "Naturinteressert",
        "Teknologisk",
        "Nysgjerrig",
        "Leseinteressert",
        "Skriveinteressert",
        "Tallinteressert",
        "Fargeinteressert",
        "Forminteressert",
        "Lydinteressert",
        "Bildeinteressert",
      ],
    };
  },
  components: {
    MultiChoiceComponent,
    ButtonsComponent,
  },
  props: {
    courseStarted: Boolean,
  },
};
</script>

<style>
.home {
  display: block;
  align-content: center;
}
.childProperties {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
  margin: 10px;
  padding: 60px;
}
.childProperties button {
  background-color: #2c3e50;
  margin: 2px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: larger;
  padding: 10px 5px;
  border-radius: 8px;
  color: white;
  width: 100%;
}
.childProperties button:hover {
  background-color: #34495e;
}
.childProperties button.is-clicked {
  background-color: #36a85f;
}
.childProperties button.is-clicked:hover {
  background-color: #2ecc71;
}
</style>
