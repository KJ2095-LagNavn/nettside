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
    :class="{ hidden: activePage !== this.Pages.ChapterTwo.ClimbedUpTree }"
    :videoSrc="'../../assets/videos/puppy.mp4'"
    :componentTitle="'Barnet klatrer opp'"
  />
  <ChoiceMadeComponent
    :class="{ hidden: activePage !== this.Pages.ChapterTwo.ClimbedDownTree }"
    :videoSrc="'../../assets/videos/testvideo.mp4'"
    :componentTitle="'Barnet klatrer ned'"
  />
  <SeeNextOutcome
    :class="{ hidden: activePage !== this.Pages.ChapterTwo.ClimbedUpTreeNext }"
    :videoSrc="'../../assets/videos/testvideo.mp4'"
    :componentTitle="'Barnet klatrer opp'"
  />
  <SeeNextOutcome
    :class="{
      hidden: activePage !== this.Pages.ChapterTwo.ClimbedDownTreeNext,
    }"
    :videoSrc="'../../assets/videos/puppy.mp4'"
    :componentTitle="'Barnet klatrer ned'"
  />
  <MakeTreeHutComponent
    :class="{ hidden: activePage !== this.Pages.ChapterTwo.MakeTreeHut }"
  />
  <ChoiceMadeComponent
    :class="{ hidden: activePage !== this.Pages.ChapterTwo.ChildMadeTreeHut }"
    :videoSrc="'../../assets/videos/puppy.mp4'"
    :componentTitle="'Barnet gjør jobben selv'"
  />
  <ChoiceMadeComponent
    :class="{ hidden: activePage !== this.Pages.ChapterTwo.ParentMadeTreeHut }"
    :videoSrc="'../../assets/videos/testvideo.mp4'"
    :componentTitle="'Du gjør jobben selv'"
  />
  <SeeNextOutcome
    :class="{
      hidden: activePage !== this.Pages.ChapterTwo.ParentMadeTreeHutNext,
    }"
    :videoSrc="'../../assets/videos/testvideo.mp4'"
    :componentTitle="'Du gjør jobben selv'"
  />
  <SeeNextOutcome
    :class="{
      hidden: activePage !== this.Pages.ChapterTwo.ChildMadeTreeHutNext,
    }"
    :videoSrc="'../../assets/videos/puppy.mp4'"
    :componentTitle="'Barnet gjør jobben selv'"
  />
  <ChapterTwoTent
    :class="{ hidden: activePage !== this.Pages.ChapterTwo.TentSleepover }"
  />
  <ChoiceMadeComponent
    :class="{ hidden: activePage !== this.Pages.ChapterTwo.Sleepover }"
    :videoSrc="'../../assets/videos/testvideo.mp4'"
    :componentTitle="'Du sier ja'"
  />
  <ChoiceMadeComponent
    :class="{ hidden: activePage !== this.Pages.ChapterTwo.NoSleepover }"
    :videoSrc="'../../assets/videos/puppy.mp4'"
    :componentTitle="'Du sier nei'"
  />
  <SeeNextOutcome
    :class="{
      hidden: activePage !== this.Pages.ChapterTwo.NoSleepoverNext,
    }"
    :videoSrc="'../../assets/videos/testvideo.mp4'"
    :componentTitle="'Du sier nei'"
  />
  <SeeNextOutcome
    :class="{
      hidden: activePage !== this.Pages.ChapterTwo.SleepoverNext,
    }"
    :videoSrc="'../../assets/videos/puppy.mp4'"
    :componentTitle="'Du sier ja'"
  />
  <ChapterThreeIntroComponent
    :class="{
      hidden: activePage !== this.Pages.ChapterThree.Intro,
    }"
  />
  <ConcernsComponent
    :class="{
      hidden: activePage !== this.Pages.ChapterThree.Concerns,
    }"
  />
  <ForThoughtComponent
    :class="{
      hidden: activePage !== this.Pages.ChapterThree.ForThought,
    }"
  />
  <GoalsComponent
    :class="{
      hidden: activePage !== this.Pages.ChapterThree.Goals,
    }"
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
import SeeNextOutcome from "@/components/2-chapter-two/SeeNextOutcome.vue";
import ChapterThreeIntroComponent from "@/components/3-chapter-three/ChapterThreeIntroComponent.vue";
import ConcernsComponent from "@/components/3-chapter-three/ConcernsComponent.vue";
import ForThoughtComponent from "@/components/3-chapter-three/ForThoughtComponent.vue";
import GoalsComponent from "@/components/3-chapter-three/GoalsComponent.vue";

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
    SeeNextOutcome,
    ChapterThreeIntroComponent,
    ChoiceMadeComponent,
    ConcernsComponent,
    ForThoughtComponent,
    GoalsComponent,
  },
  props: {
    climbTree1: String,
    climbTree2: String,
  },
  methods: {},
  data() {
    return {
      Pages,
      activePage: Pages.ChapterTwo.Intro,
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
