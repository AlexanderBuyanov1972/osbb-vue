import {
  createQuestionnaire,
  updateQuestionnaire,
  getQuestionnaire,
  deleteQuestionnaire,
  getAllQuestionnaire,
} from "@/http/questionnaire";
export default {
  state: () => ({
    questionnaire: {
      id: 0,
      title: "",
      dateDispatch: "",
      dateReceiving: "",
      selects: [],
    },
    questionnaires: [],
    messages: [],
    isLoading: false,
  }),
  mutations: {
    setIsLoading(state, bool) {
      state.isLoading = bool;
    },
    setQuestionnaire(state, object) {
      state.questionnaire = object;
    },
    setQuestionnaires(state, array) {
      state.questionnaires = array;
    },
    setMessages(state, messages) {
      state.messages = messages;
    },
  },
  getters: {
    getIsLoading(state) {
      return state.isLoading;
    },
    getQuestionnaire(state) {
      return state.questionnaire;
    },
    getQuestionnaires(state) {
      return state.questionnaires;
    },
    getMessages(state) {
      return state.messages;
    },
  },
  actions: {
    async createQuestionnaire({ commit }, object) {
      try {
        commit("setIsLoading", true);
        const response = await createQuestionnaire(object);
        if (response != undefined && response.data != undefined) {
          commit("setQuestionnaire", response.data);
          commit("setMessages", response.messages);
        } else {
          commit("setMessages", response.messages);
        }
      } catch (error) {
        commit("setMessages", [...error.messages]);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async updateQuestionnaire({ commit }, object) {
      try {
        commit("setIsLoading", true);
        const response = await updateQuestionnaire(object);
        if (response != undefined && response.data != undefined) {
          commit("setQuestionnaire", response.data);
          commit("setMessages", response.messages);
        } else {
          commit("setMessages", response.messages);
        }
      } catch (error) {
        commit("setMessages", [...error.messages]);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async fetchQuestionnaire({ commit }, id) {
      try {
        commit("setIsLoading", true);
        const response = await getQuestionnaire(id);
        if (response != undefined && response.data != undefined) {
          commit("setQuestionnaire", response.data);
          commit("setMessages", response.messages);
        } else {
          commit("setMessages", response.messages);
        }
      } catch (error) {
        commit("setMessages", [...error.messages]);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async deleteQuestionnaire({ commit }, id) {
      try {
        commit("setIsLoading", true);
        const response = await deleteQuestionnaire(id);
        commit("setMessages", response.messages);
        commit("setQuestionnaire", {});
      } catch (error) {
        commit("setMessages", [...error.messages]);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async getAllQuestionnaire({ commit }) {
      try {
        commit("setIsLoading", true);
        const response = await getAllQuestionnaire();
        if (response != undefined && response.data != undefined) {
          commit("setQuestionnaires", response.data);
          commit("setMessages", response.messages);
        } else {
          commit("setMessages", response.messages);
        }
      } catch (error) {
        commit("setMessages", [...error.messages]);
      } finally {
        commit("setIsLoading", false);
      }
    },
  },
  namespaced: true,
};
