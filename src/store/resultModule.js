import { getResultQuestionnaire } from "@/http/questionnaire";

export default {
  state: () => ({
    resultDouble: {},
    resultOwner: {},
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
    setResultOwner(state, object) {
      state.resultOwner = object;
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
    getResultOwner(state) {
      return state.resultOwner;
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
          commit("setMessages", response.messages);
        } else {
          commit("setMessages", response.messages);
        }
      } catch (error) {
        commit("setMessages", error.message);
      } finally {
        commit("setIsLoading", false);
      }
    },
  },

  namespaced: true,
};
