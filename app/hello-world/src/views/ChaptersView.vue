<template>
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
  <ChoiceMadeComponent
    :class="{ hidden: activePage !== this.Pages.ChapterTwo.ClimbUpTree }"
    videoSrc="../assets/videos/puppy.mp4"
    title="Barnet klatrer opp"
  />
  <ChoiceMadeComponent
    :class="{ hidden: activePage !== this.Pages.ChapterTwo.ClimbDownTree }"
    videoSrc="../assets/videos/testvideo.mp4"
    title="Barnet klatrer ned"
  />
  <MakeTreeHutComponent
    :class="{ hidden: activePage !== this.Pages.ChapterTwo.MakeTreeHut }"
  />
  <ChoiceMadeComponent
    :class="{ hidden: activePage !== this.Pages.ChapterTwo.ChildMadeTreeHut }"
    videoSrc="../assets/videos/puppy.mp4"
    title="Barnet gjør jobben selv"
  />
  <ChoiceMadeComponent
    :class="{ hidden: activePage !== this.Pages.ChapterTwo.ParentMadeTreeHut }"
    videoSrc="../assets/videos/testvideo.mp4"
    title="Du gjør jobben selv"
  />
  <ChapterTwoTent
    :class="{ hidden: activePage !== this.Pages.ChapterTwo.TentSleepover }"
  />
  <ChoiceMadeComponent
    :class="{ hidden: activePage !== this.Pages.ChapterTwo.Sleepover }"
    videoSrc="../assets/videos/testvideo.mp4"
    title="Du sier ja"
  />
  <ChoiceMadeComponent
    :class="{ hidden: activePage !== this.Pages.ChapterTwo.NoSleepover }"
    videoSrc="../assets/videos/puppy.mp4"
    title="Du sier nei"
  />
</template>

<script>
import ChapterOneIntro from "@/components/1-chapter-one/1-Intro.vue";
import ChapterOneSelectChildProperties from "@/components/1-chapter-one/2-SelectChildProperties.vue";
import Chapter2IntroComponent from "@/components/2-chapter-two/Chapter2IntroComponent.vue";
import ClimbTreeComponent from "@/components/2-chapter-two/ClimbTreeComponent.vue";
import MakeTreeHutComponent from "@/components/2-chapter-two/MakeTreeHutComponent.vue";
import ChapterOneSelectWhatChildAllowed from "@/components/1-chapter-one/3-SelectWhatChildAllowed.vue";
import ChapterOneSelectWhatYouAllowed from "@/components/1-chapter-one/4-SelectWhatYouAllowed.vue";
import ChapterTwoTent from "@/components/2-chapter-two/ChapterTwoTent.vue";
import ChoiceMadeComponent from "@/components/2-chapter-two/ChoiceMadeComponent.vue";
import { Pages } from "@/store/enums.js";

export default {
  name: "ChaptersView",
  components: {
    ChapterOneIntro,
    ChapterOneSelectChildProperties,
    Chapter2IntroComponent,
    ClimbTreeComponent,
    MakeTreeHutComponent,
    ChapterOneSelectWhatChildAllowed,
    ChapterOneSelectWhatYouAllowed,
    ChapterTwoTent,
    ChoiceMadeComponent,
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
