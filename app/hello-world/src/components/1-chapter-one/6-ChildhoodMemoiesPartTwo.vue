<template>
  <div>
    <h1>Din barndom</h1>
    <p>
      Skriv ned to positive og to negative inntrykk du sitter igjen med når du
      tenker tilbake på denne/disse aktivitetene
    </p>
    <textarea
      placeholder="Skriv her..."
      class="tekstboks"
      @change="saveChildhoodMemory"
      v-model="childhoodMemory"
    ></textarea>
    <ButtonsComponent :buttonName="'Neste'" @clicked="nextPage" />
  </div>
</template>

<script>
import ButtonsComponent from "@/components/ButtonsComponent.vue";
import { mapState } from "vuex";
import { Pages } from "@/store/enums";

export default {
  name: "ChapterOneChildhoodMemoriesPartTwo",
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
      this.$store.dispatch("setCurrentPage", Pages.ChapterOne.Summary);
    },
    saveChildhoodMemory() {
      this.$store.dispatch("setChildhoodMemories2", this.childhoodMemory);
      console.log(this.$store.state.partOne.childhoodMemory);
    },
  },
};
</script>

<style>
.tekstboks {
  width: 50%;
  height: 200px;
  margin: 20px 0;
  resize: none;
  font-size: 1.5em;
  display: block;
}

.button {
  margin-top: 20px;
}
</style>
