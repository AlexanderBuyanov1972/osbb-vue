import {
  createQuestionnaire,
  updateQuestionnaire,
  getQuestionnaire,
  deleteQuestionnaire,
  createAllQuestionnaire,
  updateAllQuestionnaire,
  getAllQuestionnaire,
  deleteAllQuestionnaire,
  generateListQuestionnaire,
} from "@/http/questionnaire";
import { getQuestionnaireByTitleAndFullname } from "@/http/selects";
export default {
  state: () => ({
    questionnaire: {
      id: 1,
      title: "",
      dateDispatch: null,
      dateReceiving: null,
      apartment: "",
      fullname: "",
      byWhom: "",
      question: "",
      answer: null,
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
        commit("setMessages", error.message);
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
        commit("setMessages", error.message);
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
        commit("setMessages", error.message);
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
        commit("setMessages", error.message);
      } finally {
        commit("setIsLoading", false);
      }
    },

    async createAllQuestionnaire({ commit }, object) {
      try {
        commit("setIsLoading", true);
        const response = await createAllQuestionnaire(object);
        if (response != undefined && response.data != undefined) {
          commit("setQuestionnaires", response.data);
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
    async updateAllQuestionnaire({ commit }, object) {
      try {
        commit("setIsLoading", true);
        const response = await updateAllQuestionnaire(object);
        if (response != undefined && response.data != undefined) {
          commit("setQuestionnaires", response.data);
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
        commit("setMessages", error.message);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async deleteAllQuestionnaire({ commit }) {
      try {
        commit("setIsLoading", true);
        const response = await deleteAllQuestionnaire();
        commit("setMessages", response.messages);
        commit("setQuestionnaires", {});
      } catch (error) {
        commit("setMessages", error.message);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async generateListQuestionnaire({ commit }, object) {
      try {
        commit("setIsLoading", true);
        const response = await generateListQuestionnaire(object);
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
    async fetchQuestionnaireByTitleAndFullname({ commit }, payload) {
      try {
        commit("setIsLoading", true);
        const response = await getQuestionnaireByTitleAndFullname(
          payload.title,
          payload.fullname
        );
        if (response != undefined && response.data != undefined) {
          commit("setQuestionnaires", response.data);
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
