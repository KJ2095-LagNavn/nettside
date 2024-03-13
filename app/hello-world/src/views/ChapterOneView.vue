<template>
  <div class="chapterone"></div>
  <ChapterOneIntro :class="{ not_active: activePage !== 0 }" />
  <ChapterOneSelectChildProperties :class="{ not_active: activePage !== 1 }" />
</template>

<script>
import ChapterOneIntro from "@/components/1-chapter-one/1-Intro.vue";
import ChapterOneSelectChildProperties from "@/components/1-chapter-one/2-SelectChildProperties.vue";
import { Chapter } from "@/store/enums.js";

export default {
  name: "ChapterOneView",
  components: {
    ChapterOneIntro,
    ChapterOneSelectChildProperties,
  },
  methods: {
    startChapterOne() {
      this.$store.dispatch("setCurrentPage", 1);
      console.log(this.$store.getters.getCurrentChapterAndPage);
    },
  },
  data() {
    return {
      activePage: 0,
    };
  },
  created() {
    this.$store.dispatch("setCurrentChapter", Chapter.One);
    this.$store.dispatch("setCurrentPage", 0);

    this.unwatch = this.$store.watch(
      (state, getters) => getters.getCurrentChapterAndPage,
      (newValue) => {
        if (newValue.chapter === Chapter.One) {
          this.activePage = newValue.page;
        }
      }
    );
  },
};
</script>

<style>
.not_active {
  display: none;
}
</style>
