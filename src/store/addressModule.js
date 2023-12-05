import {
  createAddress,
  updateAddress,
  getAddress,
  getAddressStart,
  deleteAddress,
} from "@/http/address";
import store from "@/store/index";

export default {
  state: () => ({
    address: {},
    addressStart: {},
  }),

  mutations: {
    setAddress(state, object) {
      state.address = object;
    },
    setAddressStart(state, object) {
      state.addressStart = object;
    },
  },

  getters: {
    getAddress(state) {
      return state.address;
    },
    getAddressStart(state) {
      return state.addressStart;
    },
  },

  actions: {
    async createAddress({ commit }, object) {
      try {
        store.state.message.isLoading = true;
        const response = await createAddress(object);
        if (response != undefined && response.data != undefined)
          commit("setAddress", response.data);
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    async updateAddress({ commit }, object) {
      try {
        store.state.message.isLoading = true;
        const response = await updateAddress(object);
        if (response != undefined && response.data != undefined)
          commit("setAddress", response.data);
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    async fetchAddress({ commit }, id) {
      try {
        store.state.message.isLoading = true;
        const response = await getAddress(id);
        if (response != undefined && response.data != undefined)
          commit("setAddress", response.data);
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    async fetchAddressStart({ commit }) {
      try {
        store.state.message.isLoading = true;
        const response = await getAddressStart();
        if (response != undefined && response.data != undefined)
          commit("setAddressStart", response.data);
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    async deleteAddress({ commit }, id) {
      try {
        store.state.message.isLoading = true;
        const response = await deleteAddress(id);
        store.state.message.messages = response.messages;
        commit("setAddress", {});
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
  },
  namespaced: true,
};
