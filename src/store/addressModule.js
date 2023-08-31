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
        const data = await createAddress(object);
        if (Array.isArray(data)) {
          commit("setAddress", data[0]);
          commit("setMessages", ["OK"]);
        } else {
          commit("setMessages", data.messages);
        }
      } catch (error) {
        alert("Error !!! AddressModule --> createAddress");
      } finally {
        commit("setIsLoading", false);
      }
    },

    async updateAddress({ commit }, object) {
      try {
        commit("setIsLoading", true);
        const data = await updateAddress(object);
        if (Array.isArray(data)) {
          commit("setAddress", data[0]);
          commit("setMessages", ["OK"]);
        } else {
          commit("setMessages", data.messages);
        }
      } catch (error) {
        alert("Error !!! AddressModule --> updateAddress");
      } finally {
        commit("setIsLoading", false);
      }
    },
    async getAddress({ commit }, id) {
      try {
        commit("setIsLoading", true);
        const data = await getAddress(id);
        if (Array.isArray(data)) {
          commit("setAddress", data[0]);
          commit("setMessages", ["OK"]);
        } else {
          commit("setMessages", data.messages);
        }
      } catch (error) {
        alert("Error !!! AddressModule --> getAddress");
      } finally {
        commit("setIsLoading", false);
      }
    },
    async deleteAddress({ commit }, id) {
      try {
        commit("setIsLoading", true);
        const data = await deleteAddress(id);
        commit("setMessages", data.messages);
        commit("setAddress", {});
      } catch (error) {
        alert("Error !!! AddressModule --> deleteAddress");
      } finally {
        commit("setIsLoading", false);
      }
    },
  },
  namespaced: true,
};
