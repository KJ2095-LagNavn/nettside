<template>
  <div class="home">
    <MultiChoiceComponent v-bind:buttonNames="['a', 'b', 'Maiken']" />
    <StartCourse :class="{ active: isStartActive }" />
    <ChildsInfo :class="{ active: isChildsInfoActive }" />
  </div>
</template>

<script>
import MultiChoiceComponent from "@/components/MultiChoiceComponent.vue";
import StartCourse from "@/components/StartCourse.vue";
import ChildsInfo from "@/components/ChildsInfo.vue";
import { mapState } from "vuex";

export default {
  name: "HomeView",
  data() {
    return {
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
        }
      }
    );
  },
  components: {
    MultiChoiceComponent,
    StartCourse,
    ChildsInfo,
    SelectChildPropertiesView,
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
.active {
  display: none;
}
</style>
