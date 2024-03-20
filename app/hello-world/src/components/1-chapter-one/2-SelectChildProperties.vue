<template>
  <div>
    <h1>Hvilke egenskaper vil du {{ childData.name.toString() }} skal ha?</h1>
    <p>(Velg maks 4)</p>
    <MultiChoiceComponent
      v-bind:buttonNames="wantedChildProperties"
      v-bind:maxSelections="4"
      class="childProperties"
      @changedSelection="saveSelectedProperties"
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
        "Selvsikker",
        "Modig",
        "Nysgjerrig",
        "Selvstendig",
        "Uavhengig",
        "Lidenskapelig",
        "Resilient",
        "Snill",
        "Ydmyk",
        "Hjelpende",
        "Rettferdig",
        "Dedikert",
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
    saveSelectedProperties(selectedProperties) {
      this.$store.dispatch("setSelectedChildAbilities", selectedProperties);
      console.log(this.$store.state.partOne.selectedChildAbilities);
    },
    nextPage() {
      this.$store.dispatch(
        "setCurrentPage",
        Pages.ChapterOne.SelectWhatChildAllowed
      );
    },
  },
};
</script>
