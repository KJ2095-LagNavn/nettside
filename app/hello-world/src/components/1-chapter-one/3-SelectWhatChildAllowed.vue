<template>
  <div>
    <h1>Hva får {{ childData.name.toString() }} lov til å gjøre?</h1>
    <p>(Velg maks 4)</p>
    <MultiChoiceComponent
      v-bind:buttonNames="whatChildAllowed"
      v-bind:maxSelections="4"
      class="multiChoiceComponent"
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
  name: "ChapterOneSelectWhatChildAllowed",
  computed: {
    ...mapState(["childData"]),
  },
  data() {
    return {
      whatChildAllowed: [
        "Klatre høyt i trær",
        "Gå alene til skolen",
        "Være ute etter mørkets frembrudd",
        "Være på sosiale medier",
        "Spille dataspill",
        "Se på TV",
        "Være med venner hjem",
        "Være med venner ute",
        "Være med venner på overnatting",
        "Være med venner på hyttetur",
        "Være med venner på ferie",
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
        Pages.ChapterOne.SelectWhatYouAllowed
      );
    },
  },
};
</script>
