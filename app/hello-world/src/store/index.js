import { createStore } from "vuex";

const myEnum = {
  Start: 0,
  FillInChildsInfo: 1,
  SelectChildsWantedAbilities: 2,
};

export default createStore({
  state: {
    startCourse: false,
    currentState: myEnum.Start,
    childsName: String,
    childsAge: 1,
  },
  getters: {},
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
