import {
  createOwner,
  updateOwner,
  getOwner,
  deleteOwner,
  getAllOwner,
} from "@/http/owner";

export default {
  state: () => ({
    owner: {
      id: 0,
      firstName: "",
      secondName: "",
      lastName: "",
      gender: "",
      email: "",
      phoneNumber: "",
      password: {
        id: 0,
        passwordID: "",
        numberEntry: "",
        dateIssue: "",
        issuingAuthority: "",
        registrationNumberCardPayerTaxes: "",
      },
      ownerships: [],
    },
    owners: [],
    messages: [],
    isLoading: false,
  }),

  mutations: {
    setIsLoading(state, bool) {
      state.isLoading = bool;
    },
    setOwner(state, object) {
      state.owner = object;
    },
    setOwners(state, object) {
      state.owners = object;
    },
    setMessages(state, messages) {
      state.messages = messages;
    },
  },

  getters: {
    getIsLoading(state) {
      return state.isLoading;
    },
    getOwner(state) {
      return state.owner;
    },
    getOwners(state) {
      return state.owners;
    },
    getMessages(state) {
      return state.messages;
    },
  },

  actions: {
    async createOwner({ commit }, object) {
      try {
        commit("setIsLoading", true);
        const data = await createOwner(object);
        if (Array.isArray(data)) {
          commit("setOwner", data[0]);
          commit("setMessages", ["OK"]);
        } else {
          commit("setMessages", data.messages);
        }
      } catch (error) {
        alert("Error !!! OwnerModule --> createOwner");
      } finally {
        commit("setIsLoading", false);
      }
    },
    async updateOwner({ commit }, object) {
      try {
        commit("setIsLoading", true);
        const data = await updateOwner(object);
        if (Array.isArray(data)) {
          commit("setOwner", data[0]);
          commit("setMessages", ["OK"]);
        } else {
          commit("setMessages", data.messages);
        }
      } catch (error) {
        alert("Error !!! OwnerModule --> updateOwner");
      } finally {
        commit("setIsLoading", false);
      }
    },
    async fetchOwner({ commit }, id) {
      try {
        commit("setIsLoading", true);
        const data = await getOwner(id);
        if (Array.isArray(data)) {
          commit("setOwner", data[0]);
          commit("setMessages", ["OK"]);
        } else {
          commit("setMessages", data.messages);
        }
      } catch (error) {
        alert("Error !!! OwnerModule --> fetchOwner");
      } finally {
        commit("setIsLoading", false);
      }
    },
    async deleteOwner({ commit }, id) {
      try {
        commit("setIsLoading", true);
        const data = await deleteOwner(id);
        commit("setMessages", data.messages);
        commit("setOwner", {});
      } catch (error) {
        alert("Error !!! OwnerModule --> deleteOwner");
      } finally {
        commit("setIsLoading", false);
      }
    },
    async getAllOwner({ commit }) {
      try {
        commit("setIsLoading", true);
        const data = await getAllOwner();
        if (Array.isArray(data)) {
          commit("setOwners", data);
          commit("setMessages", ["OK"]);
        } else {
          commit("setMessages", data.messages);
        }
      } catch (error) {
        alert("Error !!! OwnerModule --> getAllOwner");
      } finally {
        commit("setIsLoading", false);
      }
    },
  },
  namespaced: true,
};
