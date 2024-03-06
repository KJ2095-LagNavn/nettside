import { createStore } from "vuex";
import { MyEnum, Chapter } from "@/store/enums.js";

export default createStore({
  state: {
    startCourse: false,
    currentState: MyEnum.Start,
    currentChapter: Chapter.Intro,
    currentPageNumber: 0,
    childData: {
      name: String,
      age: 1,
      selectedChildProperties: [],
    },
  },
  getters: {
    getCurrentState(state) {
      return state.currentState;
    },
    getCurrentChapterAndPage(state) {
      return { chapter: state.currentChapter, page: state.currentPageNumber };
    },
    getChildData(state) {
      return state.childData;
    },
  },
  mutations: {
    SET_START_COURSE(state) {
      state.startCourse = !state.startCourse;
    },
    INCREMENT_CURRENT_STATE(state) {
      state.currentState += 1;
    },
    SET_CURRENT_CHAPTER(state, chapter) {
      state.currentChapter = chapter;
    },
    SET_CURRENT_PAGE(state, page) {
      state.currentPageNumber = page;
    },
    SET_CHILDS_NAME(state, name) {
      state.childData.name = name;
    },
    SET_CHILDS_AGE(state, age) {
      state.childData.age = age;
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
  },
  modules: {},
});
