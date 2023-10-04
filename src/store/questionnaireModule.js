import {
  createQuestionnaire,
  updateQuestionnaire,
  getQuestionnaire,
  deleteQuestionnaire,
  createAllQuestionnaire,
  updateAllQuestionnaire,
  getAllQuestionnaire,
  deleteAllQuestionnaire,
  getResultQuestionnaire,
} from "@/http/questionnaire";
import {
  getAllQuestionnaireByTitleAndFullNameAndApartment,
  getAllQuestionnaireByTitleAndFullName,
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
      fullName: "",
      byWhom: "",
      question: "",
      answer: null,
    },
    questionnaires: [],
    messages: [],
    titles: [],
    isLoading: false,
    result: {},
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
    setResult(state, object) {
      state.resultDouble = object;
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
    getResult(state) {
      return state.resultDouble;
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

    async createAllQuestionnaire({ commit }, list) {
      try {
        commit("setIsLoading", true);
        const response = await createAllQuestionnaire(list);
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

    async fetchAllQuestionnaireByTitleAndFullName({ commit }, payload) {
      try {
        commit("setIsLoading", true);
        const response = await getAllQuestionnaireByTitleAndFullName(
          payload.title,
          payload.fullName
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
    async fetchAllQuestionnaireByTitleAndFullNameAndApartment(
      { commit },
      payload
    ) {
      try {
        commit("setIsLoading", true);
        const response =
          await getAllQuestionnaireByTitleAndFullNameAndApartment(
            payload.title,
            payload.fullName,
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
          commit("setTitles", ["Выберите тему опроса", ...response.data]);
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
    async fetchResultQuestionnaire({ commit }, title) {
      try {
        commit("setIsLoading", true);
        const response = await getResultQuestionnaire(title);
        if (response != undefined && response.data != undefined) {
          commit("setResult", response.data);
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
