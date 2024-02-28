<template>
  <div class="home">
    <MultiChoiceComponent v-bind:buttonNames="['a', 'b', 'Maiken']" />
    <StartCourse :class="{ active: isStartActive }" />
    <ChildsInfo :class="{ active: isChildsInfoActive }" />
  </div>
</template>

<script>
// @ is an alias to /src
import MultiChoiceComponent from "@/components/MultiChoiceComponent.vue";
import StartCourse from "@/components/StartCourse.vue";
import ChildsInfo from "@/components/ChildsInfo.vue";
import { mapState } from "vuex";

export default {
  name: "HomeView",
  data() {
    return {
      started: false,
      isStartActive: false,
      isChildsInfoActive: true,
    };
  },
  computed: mapState(["currentState"]),
  created() {
    this.unwatch = this.$store.watch(
      (state, getters) => getters.getCurrentState,
      (newValue, oldValue) => {
        if (newValue == 1 && oldValue == 0) {
          this.isChildsInfoActive = !this.isChildsInfoActive;
          this.isStartActive = !this.isStartActive;
          console.log("Setting childsinfo");
          ChildsInfo.data.isActive = false;
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
    findChange() {
      while (!this.data.started) {
        if (this.$store.getters.getCurrentState == 1) {
          this.data.started = true;
        }
      }
    },
    async checkForChange() {
      await this.findChange();
      console.log("complete");
    },
  },
};
</script>

<style>
.home {
  display: block;
  align-content: center;
}
.active {
  display: none;
}
</style>
