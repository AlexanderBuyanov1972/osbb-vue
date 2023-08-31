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
        const data = await createPassword(object);
        if (Array.isArray(data)) {
          commit("setPassword", data[0]);
          commit("setMessages", ["OK"]);
        } else {
          commit("setMessages", data.messages);
        }
      } catch (error) {
        alert("Error !!! PasswordModule --> createPassword");
      } finally {
        commit("setIsLoading", false);
      }
    },

    async updatePassword({ commit }, object) {
      try {
        commit("setIsLoading", true);
        const data = await updatePassword(object);
        if (Array.isArray(data)) {
          commit("setPassword", data[0]);
          commit("setMessages", ["OK"]);
        } else {
          commit("setMessages", data.messages);
        }
      } catch (error) {
        alert("Error !!! PasswordModule --> updatePassword");
      } finally {
        commit("setIsLoading", false);
      }
    },
    async getPassword({ commit }, id) {
      try {
        commit("setIsLoading", true);
        const data = await getPassword(id);
        if (Array.isArray(data)) {
          commit("setPassword", data[0]);
          commit("setMessages", ["OK"]);
        } else {
          commit("setMessages", data.messages);
        }
      } catch (error) {
        alert("Error !!! PasswordModule --> getPassword");
      } finally {
        commit("setIsLoading", false);
      }
    },
    async deletePassword({ commit }, id) {
      try {
        commit("setIsLoading", true);
        const data = await deletePassword(id);
        commit("setMessages", data.messages);
        commit("setPassword", {});
      } catch (error) {
        alert("Error !!! PasswordModule --> deletePassword");
      } finally {
        commit("setIsLoading", false);
      }
    },
  },
  namespaced: true,
};
