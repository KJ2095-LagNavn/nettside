<template>
  <div class="chapterone"></div>
  <ChapterOneIntro :class="{ hidden: activePage !== Pages.ChapterOne.Intro }" />
  <ChapterOneSelectChildProperties
    :class="{
      hidden: activePage !== Pages.ChapterOne.SelectChildsWantedAbilities,
    }"
  />
  <ChapterOneSelectWhatChildAllowed
    :class="{
      hidden: activePage !== Pages.ChapterOne.SelectWhatChildAllowed,
    }"
  />
  <ChapterOneSelectWhatYouAllowed
    :class="{
      hidden: activePage !== Pages.ChapterOne.SelectWhatYouAllowed,
    }"
  />
</template>

<script>
import ChapterOneIntro from "@/components/1-chapter-one/1-Intro.vue";
import ChapterOneSelectChildProperties from "@/components/1-chapter-one/2-SelectChildProperties.vue";
import ChapterOneSelectWhatChildAllowed from "@/components/1-chapter-one/3-SelectWhatChildAllowed.vue";
import ChapterOneSelectWhatYouAllowed from "@/components/1-chapter-one/4-SelectWhatYouAllowed.vue";
import { Pages } from "@/store/enums.js";

export default {
  name: "ChaptersView",
  components: {
    ChapterOneIntro,
    ChapterOneSelectChildProperties,
    ChapterOneSelectWhatChildAllowed,
    ChapterOneSelectWhatYouAllowed,
  },
  methods: {},
  data() {
    return {
      Pages,
      activePage: Pages.ChapterOne.Intro,
    };
  },
  created() {
    this.$store.dispatch("setCurrentPage", Pages.ChapterOne.Intro);

    this.unwatch = this.$store.watch(
      (state, getters) => getters.getCurrentPage,
      (newValue) => {
        this.activePage = newValue;
      }
    );
  },
};
</script>

<style>
.hidden {
  display: none;
}
</style>
