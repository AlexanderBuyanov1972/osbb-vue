import {
  createAllSurvey,
  updateAllSurvey,
  getAllSurvey,
  deleteAllSurveyByTitle,
  deleteAllSurveyByOwnerIdAndOwnershipId,
  getResultSurvey,
  getAllSurveyByTitleAndFullNameAndApartment,
  getAllSurveyByTitleAndFullName,
  getAllSurveyByTitleAndById,
  getAllSurveyByTitle,
  getAllTitleSurvey,
} from "@/http/survey";
import { printResultSurvey } from "@/http/print";
import store from "@/store/index";
export default {
  state: () => ({
    surveys: [],
    titles: [],
    result: {},
  }),
  mutations: {
    setSurveys(state, array) {
      state.surveys = array;
    },
    setTitles(state, array) {
      state.titles = array;
    },
    setResult(state, object) {
      state.resultDouble = object;
    },
  },
  getters: {
    getSurveys(state) {
      return state.surveys;
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
    async createAllSurvey({ commit }, list) {
      try {
        store.state.message.isLoading = true;
        const response = await createAllSurvey(list);
        if (response != undefined && response.data != undefined)
          commit("setSurveys", response.data);
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    async updateAllSurvey({ commit }, object) {
      try {
        store.state.message.isLoading = true;
        const response = await updateAllSurvey(object);
        if (response != undefined && response.data != undefined)
          commit("setSurveys", response.data);
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    async fetchAllSurvey({ commit }) {
      try {
        store.state.message.isLoading = true;
        const response = await getAllSurvey();
        if (response != undefined && response.data != undefined)
          commit("setSurveys", response.data);
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    async deleteAllSurveyByTitle({ commit }, title) {
      try {
        store.state.message.isLoading = true;
        const response = await deleteAllSurveyByTitle(title);
        store.state.message.messages = response.messages;
        commit("setSurveys", {});
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    // title and full name ------------------------
    async fetchAllSurveyByTitleAndFullName({ commit }, payload) {
      try {
        store.state.message.isLoading = true;
        const response = await getAllSurveyByTitleAndFullName(
          payload.title,
          payload.fullName
        );
        if (response != undefined && response.data != undefined)
          commit("setSurveys", response.data);
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    // title, full name and apartment ------------
    async fetchAllSurveyByTitleAndFullNameAndApartment({ commit }, payload) {
      try {
        store.state.message.isLoading = true;
        const response = await getAllSurveyByTitleAndFullNameAndApartment(
          payload.title,
          payload.fullName,
          payload.apartment
        );
        if (response != undefined && response.data != undefined)
          commit("setSurveys", response.data);
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    // title --------------------------------------
    async fetchAllSurveyByTitle({ commit }, title) {
      try {
        store.state.message.isLoading = true;
        const response = await getAllSurveyByTitle(title);
        if (response != undefined && response.data != undefined)
          commit("setSurveys", response.data);
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    // title and apartment ------------------------
    async fetchAllSurveyByTitleAndById({ commit }, payload) {
      try {
        store.state.message.isLoading = true;
        const response = await getAllSurveyByTitleAndById(
          payload.title,
          payload.id
        );
        if (response != undefined && response.data != undefined)
          commit("setSurveys", response.data);
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    // all titles ----------------------------------
    async fetchAllTitleSurvey({ commit }) {
      try {
        store.state.message.isLoading = true;
        const response = await getAllTitleSurvey();
        if (response != undefined && response.data != undefined)
          commit("setTitles", ["Выберите тему опроса", ...response.data]);
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    // delete all by owner id and ownership id ------------
    async deleteAllSurveyByOwnerIdAndOwnershipId({ commit }, payload) {
      try {
        store.state.message.isLoading = true;
        const response = await deleteAllSurveyByOwnerIdAndOwnershipId(
          payload.ownerId,
          payload.ownershipId
        );
        if (response != undefined && response.data != undefined)
          commit("setTitles", ["Выберите тему опроса", ...response.data]);
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    // result --------------------------------------
    async fetchResultSurvey({ commit }, title) {
      try {
        store.state.message.isLoading = true;
        const response = await getResultSurvey(title);
        if (response != undefined && response.data != undefined)
          commit("setResult", response.data);
        else commit("setResult", undefined);
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    // result print -------------------------
    async printResultSurvey({ commit }, title) {
      try {
        store.state.message.isLoading = true;
        const response = await printResultSurvey(title);
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
  },
  namespaced: true,
};
