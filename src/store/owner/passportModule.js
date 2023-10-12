import {
  createPassport,
  updatePassport,
  getPassport,
  deletePassport,
} from "@/http/owner/passport";

export default {
  state: () => ({
    passport: {
      id: 0,
      numberPassport: "",
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
    setPassport(state, object) {
      state.passport = object;
    },
    setMessages(state, messages) {
      state.messages = messages;
    },
  },

  getters: {
    getIsLoading(state) {
      return state.isLoading;
    },
    getPassport(state) {
      return state.passport;
    },
    getMessages(state) {
      return state.messages;
    },
  },

  actions: {
    async createPassport({ commit }, object) {
      try {
        commit("setIsLoading", true);
        const response = await createPassport(object);
        if (response != undefined && response.data != undefined) {
          commit("setPassport", response.data);
          commit("setMessages", response.messages);
        } else {
          commit("setMessages", response.messages);
        }
      } catch (error) {
        commit("setMessages", error.message);
      } finally {
        commit("setIsLoading", false);
      }
    },

    async updatePassport({ commit }, object) {
      try {
        commit("setIsLoading", true);
        const response = await updatePassport(object);
        if (response != undefined && response.data != undefined) {
          commit("setPassport", response.data);
          commit("setMessages", response.messages);
        } else {
          commit("setMessages", response.messages);
        }
      } catch (error) {
        commit("setMessages", error.message);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async fetchPassport({ commit }, id) {
      try {
        commit("setIsLoading", true);
        const response = await getPassport(id);
        if (response != undefined && response.data != undefined) {
          commit("setPassport", response.data);
          commit("setMessages", response.messages);
        } else {
          commit("setMessages", response.messages);
        }
      } catch (error) {
        commit("setMessages", error.message);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async deletePassport({ commit }, id) {
      try {
        commit("setIsLoading", true);
        const response = await deletePassport(id);
        commit("setMessages", response.messages);
        commit("setPassport", {});
      } catch (error) {
        commit("setMessages", error.message);
      } finally {
        commit("setIsLoading", false);
      }
    },
  },
  namespaced: true,
};
