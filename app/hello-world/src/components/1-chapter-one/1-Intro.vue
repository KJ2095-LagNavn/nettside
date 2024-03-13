<template>
  <div class="chapteroneintro">
    <h1>Kapittel 1</h1>
    <h2>"Hensikt"</h2>
    <ButtonsComponent :buttonName="'Start kapittel 1'" @clicked="nextPage" />
  </div>
</template>

<script>
import ButtonsComponent from "@/components/ButtonsComponent.vue";

export default {
  name: "ChapterOneIntro",
  components: {
    ButtonsComponent,
  },
  methods: {
    nextPage() {
      this.$store.dispatch("setCurrentPage", 1);
      console.log(this.$store.getters.getCurrentChapterAndPage);
    },
  },
};
</script>
