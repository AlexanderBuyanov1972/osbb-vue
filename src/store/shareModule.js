import {
  createShare,
  editShare,
  getShare,
  deleteShare,
  createAllShare,
  updateAllShare,
  getAllShare,
  deleteAllShare,
  getShareByApartmentAndFullName,
} from "@/http/share";

export default {
  state: () => ({
    share: {
      id: 0,
      value: 0.0,
      owner: {},
      ownership: {},
    },
    shares: [],
    messages: [],
    isLoading: false,
  }),

  mutations: {
    setIsLoading(state, bool) {
      state.isLoading = bool;
    },
    setMessages(state, messages) {
      state.messages = messages;
    },
    setShare(state, object) {
      state.share = object;
    },
    setShares(state, array) {
      state.shares = array;
    },
  },

  getters: {
    getIsLoading(state) {
      return state.isLoading;
    },
    getMessages(state) {
      return state.messages;
    },
    getShare(state) {
      return state.share;
    },
    getShares(state) {
      return state.shares;
    },
  },

  actions: {
    async createShare({ commit }, object) {
      try {
        commit("setIsLoading", true);
        const response = await createShare(object);
        if (response != undefined && response.data != undefined) {
          commit("setShare", response.data);
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
    async updateShare({ commit }, object) {
      try {
        commit("setIsLoading", true);
        const response = await editShare(object);
        if (response != undefined && response.data != undefined) {
          commit("setShare", response.data);
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
    async fetchShare({ commit }, id) {
      try {
        commit("setIsLoading", true);
        const response = await getShare(id);
        if (response != undefined && response.data != undefined) {
          commit("setShare", response.data);
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
    async fecthShareByApartmentAndFullName({ commit }, payload) {
      try {
        commit("setIsLoading", true);
        const response = await getShareByApartmentAndFullName(
          payload.apartment,
          payload.fullName
        );
        if (response != undefined && response.data != undefined) {
          commit("setShare", response.data);
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
    async deleteShare({ commit }, id) {
      try {
        commit("setIsLoading", true);
        const response = await deleteShare(id);
        commit("setMessages", response.messages);
        commit("setShare", {});
      } catch (error) {
        commit("setMessages", [error.message]);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async createAllShare({ commit }, list) {
      try {
        commit("setIsLoading", true);
        const response = await createAllShare(list);
        if (response != undefined && response.data != undefined) {
          commit("setShares", response.data);
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
    async updateAllShare({ commit }, list) {
      try {
        commit("setIsLoading", true);
        const response = await updateAllShare(list);
        if (response != undefined && response.data != undefined) {
          commit("setShares", response.data);
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
    async fetchAllShare({ commit }) {
      try {
        commit("setIsLoading", true);
        const response = await getAllShare();
        if (response != undefined && response.data != undefined) {
          commit("setShares", response.data);
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
    async deleteAllShare({ commit }) {
      try {
        commit("setIsLoading", true);
        const response = await deleteAllShare();
        if (response != undefined && response.data != undefined) {
          commit("setShares", []);
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
  },
  namespaced: true,
};
