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
  getOwnershipByBill,
  getMapApartmentListIdAndBill,
} from "@/http/ownership";

import store from "@/store/index";

export default {
  state: () => ({
    mapIdAndBill: {},
    bills: [],
    ownership: {},
    ownerships: [],
    countOwnerships: 0,
  }),

  mutations: {
    setBills(state, array) {
      state.bills = array;
    },
    setOwnership(state, object) {
      state.ownership = object;
    },
    setOwnerships(state, object) {
      state.ownerships = object;
    },
    setCountOwnerships(state, number) {
      state.countOwnerships = number;
    },
    setMapIdAndBill(state, object) {
      state.mapIdAndBill = object;
    },
  },

  getters: {
    getOwnership(state) {
      return state.ownership;
    },
    getBills(state) {
      return state.bills;
    },
    getOwnerships(state) {
      return state.ownerships;
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
        store.state.message.isLoading = true;
        const response = await createOwnership(object);
        if (response != undefined && response.data != undefined)
          commit("setOwnership", response.data);
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    async updateOwnership({ commit }, object) {
      try {
        store.state.message.isLoading = true;
        const response = await updateOwnership(object);
        if (response != undefined && response.data != undefined)
          commit("setOwnership", response.data);
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    async fetchOwnership({ commit }, id) {
      try {
        store.state.message.isLoading = true;
        const response = await getOwnership(id);
        if (response != undefined && response.data != undefined)
          commit("setOwnership", response.data);
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    async deleteOwnership({ commit }, id) {
      try {
        store.state.message.isLoading = true;
        const response = await deleteOwnership(id);
        store.state.message.messages = response.messages;
        commit("setOwnership", {});
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    //----------------------------------------------------------
    async fetchAllOwnership({ commit }) {
      try {
        store.state.message.isLoading = true;
        const response = await getAllOwnership();
        if (response != undefined && response.data != undefined)
          commit("setOwnerships", response.data);
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    //--------------------------------------------------------------------
    async fetchCountRooms({ commit }) {
      try {
        store.state.message.isLoading = true;
        const response = await countRooms();
        commit("setCountOwnerships", response.data);
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    async createJsonForDB({ commit }, list) {
      try {
        store.state.message.isLoading = true;
        const response = await createAllOwnership(list);
        if (response != undefined && response.data != undefined)
          commit("setOwnerships", response.data);
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    async fetchAllBillByApartment({ commit }, apartment) {
      try {
        store.state.message.isLoading = true;
        const response = await getAllBillByApartment(apartment);
        if (response != undefined && response.data != undefined)
          commit("setBills", response.data);
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    async fetchAllApartmentByFullName({ commit }, fullName) {
      try {
        store.state.message.isLoading = true;
        const response = await getAllApartmentByFullName(fullName);
        if (response != undefined && response.data != undefined)
          commit("setOwnerships", response.data);
        store.state.message.messages = response.message;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    async fetchOwnershipByBill({ commit }, bill) {
      try {
        store.state.message.isLoading = true;
        const response = await getOwnershipByBill(bill);
        if (response != undefined && response.data != undefined)
          commit("setOwnership", response.data);
        store.state.message.messages = response.message;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    async fetchMapApartmentListIdAndBill({ commit }) {
      try {
        store.state.message.isLoading = true;
        const response = await getMapApartmentListIdAndBill();
        if (response != undefined && response.data != undefined)
          commit("setMapIdAndBill", response.data);
        store.state.message.messages = response.message;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
  },

  namespaced: true,
};
