import { createStore } from "vuex";
import dices from "@/store/dices";
import messenger from "@/store/messenger";

export default createStore({
  state() {
    return {};
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    dices,
    messenger
  }
});
