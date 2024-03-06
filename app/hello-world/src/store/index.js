import { createStore } from "vuex";

const myEnum = {
  Start: 0,
  FillInChildsInfo: 1,
  SelectChildsWantedAbilities: 2,
};

const chapter = {
  ChapterOne: 1,
  ChapterTwo: 2,
  ChapterThree: 3,
};

export default createStore({
  state: {
    startCourse: false,
    currentState: myEnum.Start,
    currentChapter: chapter.ChapterOne,
    childsName: String,
    childsAge: 1,
  },
  getters: {
    getCurrentState(state) {
      return state.currentState;
    },
    getChildsInfo(state) {
      return state.childsName;
    },
  },
  mutations: {
    SET_START_COURSE(state) {
      state.startCourse = !state.startCourse;
    },
    INCREMENT_CURRENT_STATE(state) {
      state.currentState += 1;
    },
    SET_CHILDS_NAME(state, name) {
      state.childsName = name;
    },
    SET_CHILDS_AGE(state, age) {
      state.childsAge = age;
    },
  },
  actions: {
    setStartCourse({ commit }) {
      commit("SET_START_COURSE");
    },
    incrementCurrentState({ commit }) {
      commit("INCREMENT_CURRENT_STATE");
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
