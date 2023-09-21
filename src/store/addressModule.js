import {
  createAddress,
  updateAddress,
  getAddress,
  deleteAddress,
} from "@/http/address";

export default {
  state: () => ({
    address: {
      id: 0,
      zipCode: "",
      country: "",
      region: "",
      city: "",
      street: "",
      house: "",
      entrance: "",
      floor: "",
      apartment: "",
    },
    messages: [],
    isLoading: false,
  }),

  mutations: {
    setIsLoading(state, bool) {
      state.isLoading = bool;
    },
    setAddress(state, object) {
      state.address = object;
    },
    setMessages(state, messages) {
      state.messages = messages;
    },
  },

  getters: {
    getIsLoading(state) {
      return state.isLoading;
    },
    getAddress(state) {
      return state.address;
    },
    getMessages(state) {
      return state.messages;
    },
  },

  actions: {
    async createAddress({ commit }, object) {
      try {
        commit("setIsLoading", true);
        const response = await createAddress(object);
        if (response != undefined && response.data != undefined) {
          commit("setAddress", response.data);
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
    async updateAddress({ commit }, object) {
      try {
        commit("setIsLoading", true);
        const response = await updateAddress(object);
        if (response != undefined && response.data != undefined) {
          commit("setAddress", response.data);
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
    async fetchAddress({ commit }, id) {
      try {
        commit("setIsLoading", true);
        const response = await getAddress(id);
        if (response != undefined && response.data != undefined) {
          commit("setAddress", response.data);
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
    async deleteAddress({ commit }, id) {
      try {
        commit("setIsLoading", true);
        const response = await deleteAddress(id);
        commit("setMessages", response.messages);
        commit("setAddress", {});
      } catch (error) {
        commit("setMessages", [error.message]);
      } finally {
        commit("setIsLoading", false);
      }
    },
  },
  namespaced: true,
};
