import {
  createPlaceWork,
  updatePlaceWork,
  getPlaceWork,
  deletePlaceWork,
  getAllPlaceWork,
} from "@/http/owner/placeWork";
import store from "@/store/index";

export default {
  state: () => ({
    placeWork: {},
    placeWorks: [],
  }),

  mutations: {
    setPlaceWork(state, object) {
      state.placeWork = object;
    },
    setPlaceWorks(state, array) {
      state.placeWorks = array;
    },
  },

  getters: {
    getPlaceWork(state) {
      return state.placeWork;
    },
    getPlaceWorks(state) {
      return state.placeWorks;
    },
  },

  actions: {
    async createPlaceWork({ commit }, object) {
      try {
        store.state.message.isLoading = true;
        const response = await createPlaceWork(object);
        if (response != undefined && response.data != undefined)
          commit("setPlaceWork", response.data);
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    async updatePlaceWork({ commit }, object) {
      try {
        store.state.message.isLoading = true;
        const response = await updatePlaceWork(object);
        if (response != undefined && response.data != undefined)
          commit("setPlaceWork", response.data);
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    async fetchPlaceWork({ commit }, id) {
      try {
        store.state.message.isLoading = true;
        const response = await getPlaceWork(id);
        if (response != undefined && response.data != undefined)
          commit("setPlaceWork", response.data);
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    async deletePlaceWork({ commit }, id) {
      try {
        store.state.message.isLoading = true;
        const response = await deletePlaceWork(id);
        store.state.message.messages = response.messages;
        commit("setPlaceWork", {});
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    async getAllPlaceWork({ commit }) {
      try {
        store.state.message.isLoading = true;
        const response = await getAllPlaceWork();
        if (response != undefined && response.data != undefined)
          commit("setPlaceWorks", response.data);
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
