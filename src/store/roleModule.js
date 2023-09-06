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
        const data = await createRole(object);
        if (Array.isArray(data)) {
          commit("setRole", data[0]);
          commit("setMessages", ["OK"]);
        } else {
          commit("setMessages", data.messages);
        }
      } catch (error) {
        commit("setMessages", ["Сервер не отвечает."]);
      } finally {
        commit("setIsLoading", false);
      }
    },

    async updateRole({ commit }, object) {
      try {
        commit("setIsLoading", true);
        const data = await updateRole(object);
        if (Array.isArray(data)) {
          commit("setRole", data[0]);
          commit("setMessages", ["OK"]);
        } else {
          commit("setMessages", data.messages);
        }
      } catch (error) {
        commit("setMessages", ["Сервер не отвечает."]);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async getRole({ commit }, id) {
      try {
        commit("setIsLoading", true);
        const data = await getRole(id);
        if (Array.isArray(data)) {
          commit("setRole", data[0]);
          commit("setMessages", ["OK"]);
        } else {
          commit("setMessages", data.messages);
        }
      } catch (error) {
        commit("setMessages", ["Сервер не отвечает."]);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async deleteRole({ commit }, id) {
      try {
        commit("setIsLoading", true);
        const data = await deleteRole(id);
        commit("setMessages", data.messages);
        commit("setRole", {});
      } catch (error) {
        commit("setMessages", ["Сервер не отвечает."]);
      } finally {
        commit("setIsLoading", false);
      }
    },
  },
  namespaced: true,
};
