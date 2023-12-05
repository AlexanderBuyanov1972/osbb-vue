import {
  createPassport,
  updatePassport,
  getPassport,
  deletePassport,
} from "@/http/owner/passport";

import store from "@/store/index";

export default {
  state: () => ({
    passport: {},
  }),

  mutations: {
    setPassport(state, object) {
      state.passport = object;
    },
  },

  getters: {
    getPassport(state) {
      return state.passport;
    },
  },

  actions: {
    async createPassport({ commit }, object) {
      try {
        store.state.message.isLoading = true;
        const response = await createPassport(object);
        if (response != undefined && response.data != undefined)
          commit("setPassport", response.data);
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },

    async updatePassport({ commit }, object) {
      try {
        store.state.message.isLoading = true;
        const response = await updatePassport(object);
        if (response != undefined && response.data != undefined)
          commit("setPassport", response.data);
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    async fetchPassport({ commit }, id) {
      try {
        store.state.message.isLoading = true;
        const response = await getPassport(id);
        if (response != undefined && response.data != undefined)
          commit("setPassport", response.data);
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    async deletePassport({ commit }, id) {
      try {
        store.state.message.isLoading = true;
        const response = await deletePassport(id);
        store.state.message.messages = response.messages;
        commit("setPassport", {});
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
  },
  namespaced: true,
};
