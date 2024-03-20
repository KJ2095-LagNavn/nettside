<template>
  <div>
    <h1>
      Hvilke aktiviteter fikk <b>du</b> lov til å gjøre når du var
      {{ childData.age }} år?
    </h1>
    <p>(Velg maks 4)</p>
    <MultiChoiceComponent
      v-bind:buttonNames="whatChildAllowed"
      v-bind:maxSelections="4"
      class="multiChoiceComponent"
      @changedSelection="saveSelectedActivities"
    />
    <ButtonsComponent :buttonName="'Neste'" @clicked="nextPage" />
  </div>
</template>

<script>
import ButtonsComponent from "@/components/ButtonsComponent.vue";
import MultiChoiceComponent from "@/components/MultiChoiceComponent.vue";
import { Pages } from "@/store/enums";
import { mapState } from "vuex";

export default {
  name: "ChapterOneSelectWhatYouAllowed",
  computed: {
    ...mapState(["childData"]),
  },
  data() {
    return {
      whatChildAllowed: [
        "Lese bøker",
        "Se på TV",
        "Spille TV-spill",
        "Leke i nabolaget",
        "Klatre i trær",
        "Være på telefonen",
        "Tegne og male",
        "Leke innendørs",
        "Ha venner på besøk",
        "Være på besøk hos venner",
        "Bygge trehytte e.l.",
        "Sykle",
      ],
    };
  },
  components: {
    MultiChoiceComponent,
    ButtonsComponent,
  },
  methods: {
    nextPage() {
      this.$store.dispatch(
        "setCurrentPage",
        Pages.ChapterOne.ChildhoodMemories
      );
    },
    saveSelectedActivities(selectedActivities) {
      this.$store.dispatch("setSelectedChildActivities", selectedActivities);
      console.log(this.$store.state.partOne.selectedChildActivities);
    },
  },
};
</script>
