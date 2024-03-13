<template>
  <div>
    <h1>
      Hva fikk <bold>du</bold> lov til å gjøre når du var
      {{ childData.age }} år?
    </h1>
    <p>(Velg maks 4)</p>
    <MultiChoiceComponent
      v-bind:buttonNames="whatChildAllowed"
      v-bind:maxSelections="4"
      class="multiChoiceComponent"
    />
    <ButtonsComponent :buttonName="'Neste'" :isClicked="false" />
  </div>
</template>

<script>
import ButtonsComponent from "@/components/ButtonsComponent.vue";
import MultiChoiceComponent from "@/components/MultiChoiceComponent.vue";
import { mapState } from "vuex";
export default {
  name: "ChapterOneSelectWhatYouAllowed",
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
      childsAge: this.$store.getters.getChildsAge,
    };
  },
  components: {
    MultiChoiceComponent,
    ButtonsComponent,
  },
};
</script>
