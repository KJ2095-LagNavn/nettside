import { createStore } from "vuex";
import { Pages } from "@/store/enums.js";

export default createStore({
  state: {
    startCourse: false,
    currentPage: Pages.ChapterOne.Intro,
    childData: {
      name: String,
      age: 1,
    },
    partOne: {
      selectedChildAbilities: [],
      selectedChildActivities: [],
      selectedParentActivities: [],
      childhoodMemories: "",
      childhoodMemories2: "",
    },
  },
  getters: {
    getCurrentPage(state) {
      return state.currentPage;
    },
    getChildData(state) {
      return state.childData;
    },
    getPartOne(state) {
      return state.partOne;
    },
  },
  mutations: {
    SET_START_COURSE(state) {
      state.startCourse = !state.startCourse;
    },
    SET_CURRENT_PAGE(state, page) {
      state.currentPage = page;
    },
    SET_CHILDS_NAME(state, name) {
      state.childData.name = name;
    },
    SET_CHILDS_AGE(state, age) {
      state.childData.age = age;
    },
    SET_SELECTED_CHILD_ABILITIES(state, abilities) {
      state.partOne.selectedChildAbilities = abilities;
    },
    SET_SELECTED_CHILD_ACTIVITIES(state, activities) {
      state.partOne.selectedChildActivities = activities;
    },
    SET_SELECTED_PARENT_ACTIVITIES(state, activities) {
      state.partOne.selectedParentActivities = activities;
    },
    SET_CHILDHOOD_MEMORIES(state, memories) {
      state.partOne.childhoodMemories = memories;
    },
    SET_CHILDHOOD_MEMORIES_2(state, memories) {
      state.partOne.childhoodMemories2 = memories;
    },
  },
  actions: {
    setStartCourse({ commit }) {
      commit("SET_START_COURSE");
    },
    incrementCurrentState({ commit }) {
      commit("INCREMENT_CURRENT_STATE");
    },
    setCurrentChapter({ commit }, chapter) {
      commit("SET_CURRENT_CHAPTER", chapter);
    },
    setCurrentPage({ commit }, page) {
      commit("SET_CURRENT_PAGE", page);
    },
    setChildsName({ commit }, name) {
      commit("SET_CHILDS_NAME", name);
    },
    setChildsAge({ commit }, age) {
      commit("SET_CHILDS_AGE", age);
    },
    setSelectedChildAbilities({ commit }, abilities) {
      commit("SET_SELECTED_CHILD_ABILITIES", abilities);
    },
    setSelectedChildActivities({ commit }, activities) {
      commit("SET_SELECTED_CHILD_ACTIVITIES", activities);
    },
    setSelectedParentActivities({ commit }, activities) {
      commit("SET_SELECTED_PARENT_ACTIVITIES", activities);
    },
    setChildhoodMemories({ commit }, memories) {
      commit("SET_CHILDHOOD_MEMORIES", memories);
    },
    setChildhoodMemories2({ commit }, memories) {
      commit("SET_CHILDHOOD_MEMORIES_2", memories);
    },
  },
  modules: {},
});
