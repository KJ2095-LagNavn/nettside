<template>
  <div class="home">
    <MultiChoiceComponent v-bind:buttonNames="['a', 'b', 'Maiken']" />
    <StartCourse :class="{ not_active: activePage !== 0 }" />
    <ChildsInfo :class="{ not_active: activePage !== 1 }" />
  </div>
</template>

<script>
import MultiChoiceComponent from "@/components/MultiChoiceComponent.vue";
import StartCourse from "@/components/0-intro/StartCourse.vue";
import ChildsInfo from "@/components/0-intro/ChildsInfo.vue";
import { mapState } from "vuex";
import { Chapter } from "@/store/enums.js";

export default {
  name: "HomeView",
  data() {
    return {
      activePage: 0,
    };
  },
  computed: mapState(["currentState"]),
  created() {
    this.unwatch = this.$store.watch(
      (state, getters) => getters.getChapterAndPage,
      (newValue) => {
        if (newValue.chapter === Chapter.Intro) {
          this.activePage = newValue.page;
        }
      }
    );
  },
  components: {
    MultiChoiceComponent,
    StartCourse,
    ChildsInfo,
  },
  methods: {
    //insert methods here
  },
};
</script>

<style>
.home {
  display: block;
  align-content: center;
}
.not_active {
  display: none;
}
</style>
