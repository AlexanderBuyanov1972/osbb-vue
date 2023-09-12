import {
  createPassword,
  updatePassword,
  getPassword,
  deletePassword,
} from "@/http/password";

export default {
  state: () => ({
    password: {
      id: 0,
      passwordID: "",
      numberEntry: "",
      dateIssue: "",
      issuingAuthority: "",
      registrationNumberCardPayerTaxes: "",
    },
    messages: [],
    isLoading: false,
  }),

  mutations: {
    setIsLoading(state, bool) {
      state.isLoading = bool;
    },
    setPassword(state, object) {
      state.password = object;
    },
    setMessages(state, messages) {
      state.messages = messages;
    },
  },

  getters: {
    getIsLoading(state) {
      return state.isLoading;
    },
    getPassword(state) {
      return state.password;
    },
    getMessages(state) {
      return state.messages;
    },
  },

  actions: {
    async createPassword({ commit }, object) {
      try {
        commit("setIsLoading", true);
        const response = await createPassword(object);
        if (response != undefined && response.data != undefined) {
          commit("setPassword", response.data);
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

    async updatePassword({ commit }, object) {
      try {
        commit("setIsLoading", true);
        const response = await updatePassword(object);
        if (response != undefined && response.data != undefined) {
          commit("setPassword", response.data);
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
    async fetchPassword({ commit }, id) {
      try {
        commit("setIsLoading", true);
        const response = await getPassword(id);
        if (response != undefined && response.data != undefined) {
          commit("setPassword", response.data);
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
    async deletePassword({ commit }, id) {
      try {
        commit("setIsLoading", true);
        const response = await deletePassword(id);
        commit("setMessages", response.messages);
        commit("setPassword", {});
      } catch (error) {
        commit("setMessages", [...error.messages]);
      } finally {
        commit("setIsLoading", false);
      }
    },
  },
  namespaced: true,
};
