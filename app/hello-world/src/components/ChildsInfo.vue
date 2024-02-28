<template>
  <div class="childsinfo">
    <h1>Hva heter barnet ditt?</h1>
    <input v-model="childsName" />
    <h1>Hvor gammel er barnet?</h1>
    <input v-model.number="age" />
    <div>
      <button @click="sumbit">Klar!</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChildsInfo",
  data() {
    return {
      childsName: null,
      age: 1,
    };
  },
  methods: {
    setName() {
      this.$store.dispatch("setChildsName", this.childsName);
    },
    setAge() {
      this.$store.dispatch("setChildsAge", this.age);
    },
    sumbit() {
      this.setAge();
      this.setName();
      this.isActive = !this.isActive;
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
