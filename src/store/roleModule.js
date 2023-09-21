import { createRole, updateRole, getRole, deleteRole } from "@/http/role";

export default {
  state: () => ({
    role: {
      id: 0,
      name: "",
    },
    messages: [],
    isLoading: false,
  }),

  mutations: {
    setIsLoading(state, bool) {
      state.isLoading = bool;
    },
    setRole(state, object) {
      state.role = object;
    },
    setMessages(state, messages) {
      state.messages = messages;
    },
  },

  getters: {
    getIsLoading(state) {
      return state.isLoading;
    },
    getRole(state) {
      return state.role;
    },
    getMessages(state) {
      return state.messages;
    },
  },

  actions: {
    async createRole({ commit }, object) {
      try {
        commit("setIsLoading", true);
        const response = await createRole(object);
        if (response != undefined && response.data != undefined) {
          commit("setRole", response.data);
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

    async updateRole({ commit }, object) {
      try {
        commit("setIsLoading", true);
        const response = await updateRole(object);
        if (response != undefined && response.data != undefined) {
          commit("setRole", response.data);
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
    async getRole({ commit }, id) {
      try {
        commit("setIsLoading", true);
        const response = await getRole(id);
        if (response != undefined && response.data != undefined) {
          commit("setRole", response.data);
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
    async deleteRole({ commit }, id) {
      try {
        commit("setIsLoading", true);
        const response = await deleteRole(id);
        commit("setMessages", response.messages);
        commit("setRole", {});
      } catch (error) {
        commit("setMessages", [error.message]);
      } finally {
        commit("setIsLoading", false);
      }
    },
  },
  namespaced: true,
};
