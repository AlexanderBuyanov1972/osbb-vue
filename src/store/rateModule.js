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
import store from "@/store/index";
export default {
  state: () => ({
    rate: {},
    rates: [],
  }),
  mutations: {
    setRate(state, object) {
      state.rate = object;
    },
    setRates(state, array) {
      state.rates = array;
    },
  },
  getters: {
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
        store.state.message.isLoading = true;
        const response = await createRate(object);
        if (response != undefined && response.data != undefined)
          commit("setRate", response.data);
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    async updateRate({ commit }, object) {
      try {
        store.state.message.isLoading = true;
        const response = await updateRate(object);
        if (response != undefined && response.data != undefined)
          commit("setRate", response.data);
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    async getRate({ commit }, id) {
      try {
        store.state.message.isLoading = true;
        const response = await getRate(id);
        if (response != undefined && response.data != undefined)
          commit("setRate", response.data);
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    async deleteRate({ commit }, id) {
      try {
        store.state.message.isLoading = true;
        const response = await deleteRate(id);
        store.state.message.messages = response.messages;
        commit("setRate", {});
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    async createAllRate({ commit }, object) {
      try {
        store.state.message.isLoading = true;
        const response = await createAllRate(object);
        if (response != undefined && response.data != undefined)
          commit("setRates", response.data);
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    async updateAllRate({ commit }, object) {
      try {
        store.state.message.isLoading = true;
        const response = await updateAllRate(object);
        if (response != undefined && response.data != undefined)
          commit("setRates", response.data);
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    async getAllRate({ commit }) {
      try {
        store.state.message.isLoading = true;
        const response = await getAllRate();
        if (response != undefined && response.data != undefined)
          commit("setRates", response.data);
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    async deleteAllRate({ commit }, id) {
      try {
        store.state.message.isLoading = true;
        const response = await deleteAllRate(id);
        store.state.message.messages = response.messages;
        commit("setRates", []);
        commit("setRate", {});
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
  },
  namespaced: true,
};
