export default {
  namespaced: true,
  state() {
    return {
      messages: [
        {
          id: "tab1",
          msgs: []
        }
      ],
      currentTab: 1,
      tabsAmount: 1
    };
  },
  mutations: {
    messagePush(state, payload) {
      state.messages[state.currentTab - 1].msgs.push(payload);
    },
    swapTab(state, payload) {
      state.currentTab = payload;
    },
    newTab(state) {
      state.tabsAmount++;
      state.messages[state.tabsAmount - 1] = {
        id: "tab" + state.tabsAmount,
        msgs: []
      };
    }
  },
  getters: {
    messages(state) {
      return state.messages;
    },
    currentTab(state) {
      return state.currentTab;
    }
  },
  actions: {}
};
