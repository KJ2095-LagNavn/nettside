<template>
  <div>
    <h1>
      Kryss av for de fire aktiviteter som {{ childData.name }} gjør mest i
      løpet av en vanlig uke?
    </h1>
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
        Pages.ChapterOne.SelectWhatYouAllowed
      );
    },
  },
};
</script>
