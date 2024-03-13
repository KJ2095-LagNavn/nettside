<template>
  <div class="home">
    <StartCourse :class="{ hidden: activePage !== Pages.Home.StartCourse }" />
    <ChildsInfo
      :class="{ hidden: activePage !== this.Pages.Home.ChildsInfo }"
    />
  </div>
</template>

<script>
import StartCourse from "@/components/0-intro/1-StartCourse.vue";
import ChildsInfo from "@/components/0-intro/2-ChildsInfo.vue";
import { mapState } from "vuex";
import { Pages } from "@/store/enums.js";

export default {
  name: "HomeView",
  data() {
    return {
      Pages,
      activePage: Pages.Home.StartCourse,
    };
  },
  computed: mapState(["currentState"]),
  created() {
    this.unwatch = this.$store.watch(
      (state, getters) => getters.getCurrentPage,
      (newValue) => {
        this.activePage = newValue;
      }
    );
  },
  components: {
    StartCourse,
    ChildsInfo,
  },
};
</script>

<style>
.home {
  display: block;
  align-content: center;
}
.hidden {
  display: none;
}
</style>
