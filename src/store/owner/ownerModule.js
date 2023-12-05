import {
  createOwner,
  updateOwner,
  getOwner,
  deleteOwner,
  getAllOwner,
  countOwners,
  getOwnerByFullName,
} from "@/http/owner/owner";

import store from "@/store/index";

export default {
  state: () => ({
    owner: {},
    owners: [],
    countOwners: 0,
  }),

  mutations: {
    setOwner(state, object) {
      state.owner = object;
    },
    setOwners(state, object) {
      state.owners = object;
    },
    setCountOwners(state, number) {
      state.countOwners = number;
    },
  },

  getters: {
    getOwner(state) {
      return state.owner;
    },
    getOwners(state) {
      return state.owners;
    },
    getCountOwners(state) {
      return state.countOwners;
    },
  },

  actions: {
    // one
    async createOwner({ commit }, object) {
      try {
        store.state.message.isLoading = true;
        const response = await createOwner(object);
        if (response != undefined && response.data != undefined)
          commit("setOwner", response.data);
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    async updateOwner({ commit }, object) {
      try {
        store.state.message.isLoading = true;
        const response = await updateOwner(object);
        if (response != undefined && response.data != undefined)
          commit("setOwner", response.data);
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    async fetchOwner({ commit }, id) {
      try {
        store.state.message.isLoading = true;
        const response = await getOwner(id);
        if (response != undefined && response.data != undefined)
          commit("setOwner", response.data);
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    async deleteOwner({ commit }, id) {
      try {
        store.state.message.isLoading = true;
        const response = await deleteOwner(id);
        store.state.message.messages = response.messages;
        commit("setOwner", {});
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    // all
    async getAllOwner({ commit }) {
      try {
        store.state.message.isLoading = true;
        const response = await getAllOwner();
        if (response != undefined && response.data != undefined)
          commit("setOwners", response.data);
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    // count
    async fetchCountOwners({ commit }) {
      try {
        store.state.message.isLoading = true;
        const response = await countOwners();
        commit("setCountOwners", response.data);
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    // list owner by fullName
    async fetchOwnerByFullName({ commit }, fullName) {
      try {
        store.state.message.isLoading = true;
        const response = await getOwnerByFullName(fullName);
        commit("setOwner", response.data);
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
