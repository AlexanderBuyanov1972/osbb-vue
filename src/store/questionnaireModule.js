import {
  createAllQuestionnaire,
  updateAllQuestionnaire,
  getAllQuestionnaire,
  deleteAllQuestionnaireByTitle,
  getResultQuestionnaire,
  deleteAllQuestionnaireByOwnerIdAndOwnershipId,
} from "@/http/polls/questionnaire";
import {
  getAllQuestionnaireByTitleAndFullNameAndApartment,
  getAllQuestionnaireByTitleAndFullName,
  getAllQuestionnaireByTitleAndByApartment,
  getAllQuestionnaireByTitle,
  getAllTitleOfQuestionnaire,
} from "@/http/polls/selects";
export default {
  state: () => ({
    questionnaires: [],
    messages: [],
    message: "",
    titles: [],
    isLoading: false,
    result: {},
  }),
  mutations: {
    setIsLoading(state, bool) {
      state.isLoading = bool;
    },
    setQuestionnaires(state, array) {
      state.questionnaires = array;
    },
    setMessages(state, messages) {
      state.messages = messages;
    },
    setMessage(state, message) {
      state.message = message;
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
    getQuestionnaires(state) {
      return state.questionnaires;
    },
    getMessages(state) {
      return state.messages;
    },
    getMessage(state) {
      return state.message;
    },
    getTitles(state) {
      return state.titles;
    },
    getResult(state) {
      return state.resultDouble;
    },
  },
  actions: {
    // all -------------------------
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
    async deleteAllQuestionnaireByTitle({ commit }, title) {
      try {
        commit("setIsLoading", true);
        const response = await deleteAllQuestionnaireByTitle(title);
        commit("setMessages", response.messages);
        commit("setQuestionnaires", {});
      } catch (error) {
        commit("setMessages", [error.message]);
      } finally {
        commit("setIsLoading", false);
      }
    },
    // title and full name ------------------------
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
    // title, full name and apartment ------------
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
    // title --------------------------------------
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
    // title and apartment ------------------------
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
    // all titles ----------------------------------
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
    // delete all by owner id and ownership id ------------
    async deleteAllQuestionnaireByOwnerIdAndOwnershipId({ commit }, payload) {
      try {
        commit("setIsLoading", true);
        const response = await deleteAllQuestionnaireByOwnerIdAndOwnershipId(
          payload.ownerId,
          payload.ownershipId
        );
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
    // result --------------------------------------
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
        commit("setMessages", [error.message]);
      } finally {
        commit("setIsLoading", false);
      }
    },
  },
  namespaced: true,
};
