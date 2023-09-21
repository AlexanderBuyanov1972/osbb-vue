import { getResultQuestionnaire } from "@/http/questionnaire";

export default {
  state: () => ({
    resultDouble: {},
    resultOwner: {},
    counterDouble: {},
    counterOwner: {},
    messages: [],
    isLoading: false,
  }),

  mutations: {
    setIsLoading(state, bool) {
      state.isLoading = bool;
    },
    setMessages(state, messages) {
      state.messages = messages;
    },
    setResultDouble(state, object) {
      state.resultDouble = object;
    },
    setCounterDouble(state, object) {
      state.counterDouble = object;
    },
    setResultOwner(state, object) {
      state.resultOwner = object;
    },
    setCounterOwner(state, object) {
      state.counterOwner = object;
    },
  },

  getters: {
    getIsLoading(state) {
      return state.isLoading;
    },
    getMessages(state) {
      return state.messages;
    },
    getResultDouble(state) {
      return state.resultDouble;
    },
    getCounterDouble(state) {
      return state.counterDouble;
    },

    getResultOwner(state) {
      return state.resultOwner;
    },
    getCounterOwner(state) {
      return state.counterOwner;
    },
  },

  actions: {
    async fetchResultQuestionnaire({ commit }, title) {
      let response = null;
      try {
        commit("setIsLoading", true);
        response = await getResultQuestionnaire(title);
        if (response != undefined && response.data != undefined) {
          commit("setResultOwner", response.data[0]);
          commit("setResultDouble", response.data[1]);
          commit("setCounterOwner", response.data[2]);
          commit("setCounterDouble", response.data[3]);
          commit("setMessages", response.messages);
        } else {
          commit("setMessages", response.messages);
        }
      } catch (error) {
        response != undefined
          ? commit("setMessages", [error.message, ...response.messages])
          : commit("setMessages", [error.message]);
      } finally {
        commit("setIsLoading", false);
      }
    },
  },

  namespaced: true,
};
