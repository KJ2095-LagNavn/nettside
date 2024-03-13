<template>
  <div class="chapterone"></div>
  <ChapterOneIntro :class="{ hidden: activePage !== Pages.ChapterOne.Intro }" />
  <ChapterOneSelectChildProperties
    :class="{
      hidden: activePage !== Pages.ChapterOne.SelectChildsWantedAbilities,
    }"
  />
  <Chapter2IntroComponent
    :class="{ hidden: activePage !== this.Pages.ChapterTwo.Intro }"
  />
  <ClimbTreeComponent
    :class="{ hidden: activePage !== this.Pages.ChapterTwo.ClimbTree }"
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
import { Pages } from "@/store/enums.js";
import { mapState } from "vuex";

export default {
  name: "ChapterOneView",
  components: {
    ChapterOneIntro,
    ChapterOneSelectChildProperties,
    Chapter2IntroComponent,
    ClimbTreeComponent,
    MakeTreeHutComponent,
  },
  methods: {
    // startChapterOne() {
    //   this.$store.dispatch(
    //     "setCurrentPage",
    //     Pages.ChapterOne.SelectChildsWantedAbilities
    //   );
    //   console.log(this.$store.getters.getCurrentPage);
    // },
  },
  data() {
    return {
      Pages,
      activePage: Pages.ChapterOne.Intro,
    };
  },
  computed: mapState(["currentState"]),
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
