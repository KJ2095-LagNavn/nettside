<template>
  <div>
    <h1>Din barndom</h1>
    <p>Hvilke aktiviteter husker du best fra din barndom?</p>
    <textarea placeholder="Skriv her..."></textarea>
    <ButtonsComponent :buttonName="'Neste'" @clicked="nextPage" />
  </div>
</template>

<script>
import ButtonsComponent from "@/components/ButtonsComponent.vue";
import { mapState } from "vuex";
import { Pages } from "@/store/enums";

export default {
  name: "ChapterOneChildhoodMemories",
  computed: {
    ...mapState(["childData"]),
  },
  data() {
    return {
      childhoodMemory: "",
    };
  },
  components: {
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
