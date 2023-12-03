import {
  createOwnership,
  updateOwnership,
  getOwnership,
  deleteOwnership,
  createAllOwnership,
  getAllOwnership,
  countRooms,
  getAllApartmentByFullName,
  getAllBillByApartment,
  getAllOwnershipByApartment,
  getOwnershipByBill,
  getMapApartmentListIdAndBill,
} from "@/http/ownership";

export default {
  state: () => ({
    mapIdAndBill: {},
    bills: [],
    ownership: {},
    ownerships: [],
    messages: [],
    isLoading: false,
    countOwnerships: 0,
  }),

  mutations: {
    setIsLoading(state, bool) {
      state.isLoading = bool;
    },
    setBills(state, array) {
      state.bills = array;
    },
    setOwnership(state, object) {
      state.ownership = object;
    },
    setOwnerships(state, object) {
      state.ownerships = object;
    },
    setMessages(state, messages) {
      state.messages = messages;
    },
    setCountOwnerships(state, number) {
      state.countOwnerships = number;
    },
    setMapIdAndBill(state, object) {
      state.mapIdAndBill = object;
    },
  },

  getters: {
    getIsLoading(state) {
      return state.isLoading;
    },
    getOwnership(state) {
      return state.ownership;
    },
    getBills(state) {
      return state.bills;
    },
    getOwnerships(state) {
      return state.ownerships;
    },
    getMessages(state) {
      return state.messages;
    },
    getCountOwnerships(state) {
      return state.countOwnerships;
    },
    getMapIdAndBill(state) {
      return state.mapIdAndBill;
    },
  },

  actions: {
    async createOwnership({ commit }, object) {
      try {
        commit("setIsLoading", true);
        const response = await createOwnership(object);
        if (response != undefined && response.data != undefined)
          commit("setOwnership", response.data);
        commit("setMessages", response.messages);
      } catch (error) {
        commit("setMessages", [error.message]);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async updateOwnership({ commit }, object) {
      try {
        commit("setIsLoading", true);
        const response = await updateOwnership(object);
        if (response != undefined && response.data != undefined)
          commit("setOwnership", response.data);
        commit("setMessages", response.messages);
      } catch (error) {
        commit("setMessages", [error.message]);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async fetchOwnership({ commit }, id) {
      try {
        commit("setIsLoading", true);
        const response = await getOwnership(id);
        if (response != undefined && response.data != undefined)
          commit("setOwnership", response.data);
        commit("setMessages", response.messages);
      } catch (error) {
        commit("setMessages", [error.message]);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async deleteOwnership({ commit }, id) {
      try {
        commit("setIsLoading", true);
        const response = await deleteOwnership(id);
        commit("setMessages", response.messages);
        commit("setOwnership", {});
      } catch (error) {
        commit("setMessages", [error.message]);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async fetchAllOwnership({ commit }) {
      try {
        commit("setIsLoading", true);
        const response = await getAllOwnership();
        if (response != undefined && response.data != undefined)
          commit("setOwnerships", response.data);
        commit("setMessages", response.messages);
      } catch (error) {
        commit("setMessages", [error.message]);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async fetchCountRooms({ commit }) {
      try {
        commit("setIsLoading", true);
        const response = await countRooms();
        commit("setCountOwnerships", response.data);
        commit("setMessages", response.messages);
      } catch (error) {
        commit("setMessages", [error.message]);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async createJsonForDB({ commit }, list) {
      try {
        commit("setIsLoading", true);
        const response = await createAllOwnership(list);
        if (response != undefined && response.data != undefined)
          commit("setOwnerships", response.data);
        commit("setMessages", response.messages);
      } catch (error) {
        commit("setMessages", [error.message]);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async fetchAllBillByApartment({ commit }, apartment) {
      try {
        commit("setIsLoading", true);
        const response = await getAllBillByApartment(apartment);
        if (response != undefined && response.data != undefined)
          commit("setBills", response.data);
        commit("setMessages", response.messages);
      } catch (error) {
        commit("setMessages", [error.message]);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async fetchAllApartmentByFullName({ commit }, fullName) {
      try {
        commit("setIsLoading", true);
        const response = await getAllApartmentByFullName(fullName);
        if (response != undefined && response.data != undefined)
          commit("setOwnerships", response.data);
        commit("setMessages", response.message);
      } catch (error) {
        commit("setMessages", [error.message]);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async fetchOwnershipByBill({ commit }, bill) {
      try {
        commit("setIsLoading", true);
        const response = await getOwnershipByBill(bill);
        if (response != undefined && response.data != undefined)
          commit("setOwnership", response.data);
        commit("setMessages", response.message);
      } catch (error) {
        commit("setMessages", [error.message]);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async fetchMapApartmentListIdAndBill({ commit }) {
      try {
        commit("setIsLoading", true);
        const response = await getMapApartmentListIdAndBill();
        if (response != undefined && response.data != undefined)
          commit("setMapIdAndBill", response.data);
        commit("setMessages", response.message);
      } catch (error) {
        commit("setMessages", [error.message]);
      } finally {
        commit("setIsLoading", false);
      }
    },
  },

  namespaced: true,
};
