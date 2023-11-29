import {
  createAllSurvey,
  updateAllSurvey,
  getAllSurvey,
  deleteAllSurveyByTitle,
  deleteAllSurveyByOwnerIdAndOwnershipId,
  getResultSurvey,
  getAllSurveyByTitleAndFullNameAndApartment,
  getAllSurveyByTitleAndFullName,
  getAllSurveyByTitleAndByApartment,
  getAllSurveyByTitle,
  getAllTitleSurvey,
} from "@/http/survey";
import { printResultSurvey } from "@/http/print";
export default {
  state: () => ({
    surveys: [],
    messages: [],
    // message: "",
    titles: [],
    isLoading: false,
    result: {},
  }),
  mutations: {
    setIsLoading(state, bool) {
      state.isLoading = bool;
    },
    setSurveys(state, array) {
      state.surveys = array;
    },
    setMessages(state, messages) {
      state.messages = messages;
    },
    // setMessage(state, message) {
    //   state.message = message;
    // },
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
    getSurveys(state) {
      return state.surveys;
    },
    getMessages(state) {
      return state.messages;
    },
    // getMessage(state) {
    //   return state.message;
    // },
    getTitles(state) {
      return state.titles;
    },
    getResult(state) {
      return state.resultDouble;
    },
  },
  actions: {
    // all -------------------------
    async createAllSurvey({ commit }, list) {
      try {
        commit("setIsLoading", true);
        const response = await createAllSurvey(list);
        if (response != undefined && response.data != undefined) {
          commit("setSurveys", response.data);
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
    async updateAllSurvey({ commit }, object) {
      try {
        commit("setIsLoading", true);
        const response = await updateAllSurvey(object);
        if (response != undefined && response.data != undefined) {
          commit("setSurveys", response.data);
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
    async fetchAllSurvey({ commit }) {
      try {
        commit("setIsLoading", true);
        const response = await getAllSurvey();
        if (response != undefined && response.data != undefined) {
          commit("setSurveys", response.data);
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
    async deleteAllSurveyByTitle({ commit }, title) {
      try {
        commit("setIsLoading", true);
        const response = await deleteAllSurveyByTitle(title);
        commit("setMessages", response.messages);
        commit("setSurveys", {});
      } catch (error) {
        commit("setMessages", [error.message]);
      } finally {
        commit("setIsLoading", false);
      }
    },
    // title and full name ------------------------
    async fetchAllSurveyByTitleAndFullName({ commit }, payload) {
      try {
        commit("setIsLoading", true);
        const response = await getAllSurveyByTitleAndFullName(
          payload.title,
          payload.fullName
        );
        if (response != undefined && response.data != undefined) {
          commit("setSurveys", response.data);
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
    async fetchAllSurveyByTitleAndFullNameAndApartment(
      { commit },
      payload
    ) {
      try {
        commit("setIsLoading", true);
        const response =
          await getAllSurveyByTitleAndFullNameAndApartment(
            payload.title,
            payload.fullName,
            payload.apartment
          );
        if (response != undefined && response.data != undefined) {
          commit("setSurveys", response.data);
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
    async fetchAllSurveyByTitle({ commit }, title) {
      try {
        commit("setIsLoading", true);
        const response = await getAllSurveyByTitle(title);
        if (response != undefined && response.data != undefined) {
          commit("setSurveys", response.data);
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
    async fetchAllSurveyByTitleAndByApartment({ commit }, payload) {
      try {
        commit("setIsLoading", true);
        const response = await getAllSurveyByTitleAndByApartment(
          payload.title,
          payload.apartment
        );
        if (response != undefined && response.data != undefined) {
          commit("setSurveys", response.data);
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
    async fetchAllTitleSurvey({ commit }) {
      try {
        commit("setIsLoading", true);
        const response = await getAllTitleSurvey();
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
    async deleteAllSurveyByOwnerIdAndOwnershipId({ commit }, payload) {
      try {
        commit("setIsLoading", true);
        const response = await deleteAllSurveyByOwnerIdAndOwnershipId(
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
    async fetchResultSurvey({ commit }, title) {
      try {
        commit("setIsLoading", true);
        const response = await getResultSurvey(title);
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
    // result print -------------------------
    async printResultSurvey({ commit }, title) {
      try {
        commit("setIsLoading", true);
        const response = await printResultSurvey(title);
        commit("setMessages", response.messages);
      } catch (error) {
        commit("setMessages", [error.message]);
      } finally {
        commit("setIsLoading", false);
      }
    },
  },
  namespaced: true,
};
