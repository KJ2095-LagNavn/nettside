<template>
  <div class="childsinfo">
    <h1>Hva heter barnet ditt?</h1>
    <input v-model="childsName" />
    <h1>Hvor gammelt er barnet?</h1>
    <input v-model.number="age" />
    <div>
      <button @click="sumbit">Klar!</button>
    </div>
  </div>
</template>

<script>
import router from "@/router/index";
import { Chapter } from "@/store/enums";
export default {
  name: "ChildsInfo",
  data() {
    return {
      childsName: null,
      age: 1,
    };
  },
  methods: {
    sumbit() {
      this.$store.dispatch("setChildsAge", this.age);
      this.$store.dispatch("setChildsName", this.childsName);
      this.isActive = !this.isActive;
      this.$store.dispatch("setCurrentChapter", Chapter.One);
      this.$store.dispatch("setCurrentPage", 0);
      router.push({ path: "/chapter-one" });
    },
  },
};
</script>
<style>
.childsinfo {
  padding: 3em;
  margin: 3em;
  background-color: #ececec;
  border-radius: 25px;
  width: 50%;
  height: 30%;
  position: relative;
}
</style>
