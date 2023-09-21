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
import {
  getAllQuestionnaireByTitleAndFullname,
  getAllQuestionnaireByTitleAndByApartment,
  getAllQuestionnaireByTitle,
  getAllTitleOfQuestionnaire,
} from "@/http/selects";
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
    titles: [],
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
    setTitles(state, array) {
      state.titles = array;
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
    getTitles(state) {
      return state.titles;
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
        commit("setMessages", [error.message]);
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
        commit("setMessages", [error.message]);
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
        commit("setMessages", [error.message]);
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
        commit("setMessages", [error.message]);
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
        commit("setMessages", [error.message]);
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
        commit("setMessages", [error.message]);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async fetchAllQuestionnaire({ commit }) {
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
        commit("setMessages", [error.message]);
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
        commit("setMessages", [error.message]);
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
        commit("setMessages", [error.message]);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async fetchAllQuestionnaireByTitleAndFullname({ commit }, payload) {
      try {
        commit("setIsLoading", true);
        const response = await getAllQuestionnaireByTitleAndFullname(
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
        commit("setMessages", [error.message]);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async fetchAllQuestionnaireByTitle({ commit }, title) {
      try {
        commit("setIsLoading", true);
        const response = await getAllQuestionnaireByTitle(title);
        if (response != undefined && response.data != undefined) {
          commit("setQuestionnaires", response.data);
          commit("setMessages", response.messages);
        } else {
          commit("setMessages", response.messages);
        }
      } catch (error) {
        commit("setMessages", [error.message]);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async fetchAllQuestionnaireByTitleAndByApartment({ commit }, payload) {
      try {
        commit("setIsLoading", true);
        const response = await getAllQuestionnaireByTitleAndByApartment(
          payload.title,
          payload.apartment
        );
        if (response != undefined && response.data != undefined) {
          commit("setQuestionnaires", response.data);
          commit("setMessages", response.messages);
        } else {
          commit("setMessages", response.messages);
        }
      } catch (error) {
        commit("setMessages", [error.message]);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async fetchAllTitleOfQuestionnaire({ commit }) {
      try {
        commit("setIsLoading", true);
        const response = await getAllTitleOfQuestionnaire();
        if (response != undefined && response.data != undefined) {
          commit("setTitles", response.data);
          commit("setMessages", response.messages);
        } else {
          commit("setMessages", response.messages);
        }
      } catch (error) {
        commit("setMessages", [error.message]);
      } finally {
        commit("setIsLoading", false);
      }
    },
  },
  namespaced: true,
};
