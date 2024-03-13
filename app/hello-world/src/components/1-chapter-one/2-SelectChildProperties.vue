<template>
  <div>
    <h1>Hvilke egenskaper vil du {{ childData.name.toString() }} skal ha?</h1>
    <p>(Velg maks 4)</p>
    <MultiChoiceComponent
      v-bind:buttonNames="wantedChildProperties"
      v-bind:maxSelections="4"
      class="childProperties"
    />
    <ButtonsComponent :buttonName="'Neste'" @clicked="nextPage" />
  </div>
</template>

<script>
import ButtonsComponent from "@/components/ButtonsComponent.vue";
import MultiChoiceComponent from "@/components/MultiChoiceComponent.vue";
import { mapState } from "vuex";
import { Pages } from "@/store/enums";
export default {
  name: "ChapterOneSelectChildProperties",
  computed: {
    ...mapState(["childData"]),
  },
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
  methods: {
    nextPage() {
      this.$store.dispatch(
        "setCurrentPage",
        Pages.ChapterOne.SelectWhatChildAllowed
      );
      console.log(this.$store.getters.getCurrentPage);
    },
  },
};
</script>
