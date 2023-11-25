import {
  createRate,
  updateRate,
  getRate,
  deleteRate,
  createAllRate,
  updateAllRate,
  getAllRate,
  deleteAllRate,
} from "@/http/rate";
export default {
  state: () => ({
    rate: {},
    rates: [],
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
    setRate(state, object) {
      state.rate = object;
    },
    setRates(state, array) {
      state.rates = array;
    },
  },
  getters: {
    getIsLoading(state) {
      return state.isLoading;
    },
    getMessages(state) {
      return state.messages;
    },
    getRate(state) {
      return state.rate;
    },
    getRates(state) {
      return state.rates;
    },
  },
  actions: {
    async createRate({ commit }, object) {
      try {
        commit("setIsLoading", true);
        const response = await createRate(object);
        if (response != undefined && response.data != undefined) {
          commit("setRate", response.data);
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
    async updateRate({ commit }, object) {
      try {
        commit("setIsLoading", true);
        const response = await updateRate(object);
        if (response != undefined && response.data != undefined) {
          commit("setRate", response.data);
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
    async getRate({ commit }, id) {
      try {
        commit("setIsLoading", true);
        const response = await getRate(id);
        if (response != undefined && response.data != undefined) {
          commit("setRate", response.data);
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
    async deleteRate({ commit }, id) {
      try {
        commit("setIsLoading", true);
        const response = await deleteRate(id);
        commit("setMessages", response.messages);
        commit("setRate", {});
      } catch (error) {
        commit("setMessages", [error.message]);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async createAllRate({ commit }, object) {
      try {
        commit("setIsLoading", true);
        const response = await createAllRate(object);
        if (response != undefined && response.data != undefined) {
          commit("setRates", response.data);
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
    async updateAllRate({ commit }, object) {
      try {
        commit("setIsLoading", true);
        const response = await updateAllRate(object);
        if (response != undefined && response.data != undefined) {
          commit("setRates", response.data);
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
    async getAllRate({ commit }) {
      try {
        commit("setIsLoading", true);
        const response = await getAllRate();
        if (response != undefined && response.data != undefined) {
          commit("setRates", response.data);
          // commit("setMessages", response.messages);
        } else {
          commit("setMessages", response.messages);
        }
      } catch (error) {
        commit("setMessages", [error.message]);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async deleteAllRate({ commit }, id) {
      try {
        commit("setIsLoading", true);
        const response = await deleteAllRate(id);
        commit("setMessages", response.messages);
        commit("setRates", []);
        commit("setRate", {});
      } catch (error) {
        commit("setMessages", [error.message]);
      } finally {
        commit("setIsLoading", false);
      }
    },
  },
  namespaced: true,
};
