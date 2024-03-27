import { createStore } from "vuex";
import { Pages } from "@/store/enums.js";

export default createStore({
  state: {
    startCourse: false,
    childsName: String,
    childsAge: 1,
    firstClimbing: String,
    currentPageNumber: 0,
    currentPage: Pages.ChapterOne.Intro,
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
    getChildsInfo(state) {
      return state.childsName;
    },
    getCurrentChapterAndPage(state) {
      return { chapter: state.currentChapter, page: state.currentPageNumber };
    },
    getCurrentPage(state) {
      return state.currentPage;
    },
    getChildData(state) {
      return state.childData;
    },
    getFirstClimbing(state) {
      return state.firstClimbing;
    },
  },
  mutations: {
    SET_START_COURSE(state) {
      state.startCourse = !state.startCourse;
    },
    SET_CHILDS_NAME(state, name) {
      state.childData.name = name;
    },
    SET_CHILDS_AGE(state, age) {
      state.childData.age = age;
    },
    SET_FIRST_CLIMBING(state, upOrDown) {
      state.firstClimbing = upOrDown;
    },
    SET_CURRENT_PAGE(state, page) {
      state.currentPage = page;
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
    setFirstClimbing({ commit }, upOrDown) {
      commit("SET_FIRST_CLIMBING", upOrDown);
    },
  },
  modules: {},
});
