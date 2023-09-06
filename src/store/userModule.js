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
        const data = await createUser(object);
        if (Array.isArray(data)) {
          commit("setUser", data[0]);
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

    async updateUser({ commit }, object) {
      try {
        commit("setIsLoading", true);
        const data = await updateUser(object);
        if (Array.isArray(data)) {
          commit("setUser", data[0]);
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
    async getUser({ commit }, id) {
      try {
        commit("setIsLoading", true);
        const data = await getUser(id);
        if (Array.isArray(data)) {
          commit("setUser", data[0]);
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
    async deleteUser({ commit }, id) {
      try {
        commit("setIsLoading", true);
        const data = await deleteUser(id);
        commit("setMessages", data.messages);
        commit("setUser", {});
      } catch (error) {
        commit("setMessages", ["Сервер не отвечает."]);
      } finally {
        commit("setIsLoading", false);
      }
    },
  },
  namespaced: true,
};
