import { createUser, updateUser, getUser, deleteUser } from "@/http/user";

export default {
  state: () => ({
    user: {
      id: 0,
      username: "",
      password: "",
      enabled: false,
      createdAt: "",
      updatedAt: "",
      roles: [],
    },
    messages: [],
    isLoading: false,
  }),

  mutations: {
    setIsLoading(state, bool) {
      state.isLoading = bool;
    },
    setUser(state, object) {
      state.user = object;
    },
    setMessages(state, messages) {
      state.messages = messages;
    },
  },

  getters: {
    getIsLoading(state) {
      return state.isLoading;
    },
    getUser(state) {
      return state.user;
    },
    getMessages(state) {
      return state.messages;
    },
  },

  actions: {
    async createUser({ commit }, object) {
      try {
        commit("setIsLoading", true);
        const response = await createUser(object);
        if (response != undefined && response.data != undefined) {
          commit("setUser", response.data);
          commit("setMessages", response.messages);
        } else {
          commit("setMessages", response.messages);
        }
      } catch (error) {
        commit("setMessages", [...error.messages]);
      } finally {
        commit("setIsLoading", false);
      }
    },

    async updateUser({ commit }, object) {
      try {
        commit("setIsLoading", true);
        const response = await updateUser(object);
        if (response != undefined && response.data != undefined) {
          commit("setUser", response.data);
          commit("setMessages", response.messages);
        } else {
          commit("setMessages", response.messages);
        }
      } catch (error) {
        commit("setMessages", [...error.messages]);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async getUser({ commit }, id) {
      try {
        commit("setIsLoading", true);
        const response = await getUser(id);
        if (response != undefined && response.data != undefined) {
          commit("setUser", response.data);
          commit("setMessages", response.messages);
        } else {
          commit("setMessages", response.messages);
        }
      } catch (error) {
        commit("setMessages", [...error.messages]);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async deleteUser({ commit }, id) {
      try {
        commit("setIsLoading", true);
        const response = await deleteUser(id);
        commit("setMessages", response.messages);
        commit("setUser", {});
      } catch (error) {
        commit("setMessages", [...error.messages]);
      } finally {
        commit("setIsLoading", false);
      }
    },
  },
  namespaced: true,
};
