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
  <Chapter2IntroComponent
    :class="{ hidden: activePage !== this.Pages.ChapterTwo.Intro }"
  />
  <ClimbTreeComponent
    :class="{ hidden: activePage !== this.Pages.ChapterTwo.ClimbTree }"
  />
  <ClimbsUpTreeComponent
    :class="{ hidden: activePage !== this.Pages.ChapterTwo.ClimbUpTree }"
    videoSrc="../assets/videos/puppy.mp4"
    title="Barnet klatrer opp"
  />
  <ClimbsUpTreeComponent
    :class="{ hidden: activePage !== this.Pages.ChapterTwo.ClimbDownTree }"
    videoSrc="../assets/videos/testvideo.mp4"
    title="Barnet klatrer ned"
  />
  <MakeTreeHutComponent
    :class="{ hidden: activePage !== this.Pages.ChapterTwo.MakeTreeHut }"
  />
</template>

<script>
import ChapterOneIntro from "@/components/1-chapter-one/1-Intro.vue";
import ChapterOneSelectChildProperties from "@/components/1-chapter-one/2-SelectChildProperties.vue";
import Chapter2IntroComponent from "@/components/2-chapter-two/Chapter2IntroComponent.vue";
import ClimbTreeComponent from "@/components/2-chapter-two/ClimbTreeComponent.vue";
import MakeTreeHutComponent from "@/components/2-chapter-two/MakeTreeHutComponent.vue";
import ClimbsUpTreeComponent from "@/components/2-chapter-two/ClimbsUpTreeComponent.vue";
import ChapterOneSelectWhatChildAllowed from "@/components/1-chapter-one/3-SelectWhatChildAllowed.vue";
import ChapterOneSelectWhatYouAllowed from "@/components/1-chapter-one/4-SelectWhatYouAllowed.vue";
import { Pages } from "@/store/enums.js";

export default {
  name: "ChaptersView",
  components: {
    ChapterOneIntro,
    ChapterOneSelectChildProperties,
    Chapter2IntroComponent,
    ClimbTreeComponent,
    ClimbsUpTreeComponent,
    MakeTreeHutComponent,
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
