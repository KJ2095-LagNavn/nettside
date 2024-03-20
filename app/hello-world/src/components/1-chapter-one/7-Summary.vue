<template>
  <div>
    <h1>Comparison of Allowed Activities</h1>
    <p>
      As a child, you were allowed to:
      <span v-for="activity in yourAllowedActivities" :key="activity">{{
        activity
      }}</span>
    </p>
    <p>
      The child is allowed to:
      <span v-for="activity in childAllowedActivities" :key="activity">{{
        activity
      }}</span>
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    yourAllowedActivities() {
      // Access your allowed activities from the store
      return this.$store.state.yourAllowedActivities;
    },
    childAllowedActivities() {
      // Access the child's allowed activities from the store
      return this.$store.state.childAllowedActivities;
    },
  },
};
</script>
