import {
  createVehicle,
  updateVehicle,
  getVehicle,
  deleteVehicle,
  getAllVehicle,
} from "@/http/owner/vehicle";
import store from "@/store/index";

export default {
  state: () => ({
    vehicle: {},
    vehicles: [],
  }),

  mutations: {
    setVehicle(state, object) {
      state.vehicle = object;
    },
    setVehicles(state, array) {
      state.vehicles = array;
    },
  },

  getters: {
    getVehicle(state) {
      return state.vehicle;
    },
    getVehicles(state) {
      return state.vehicles;
    },
  },

  actions: {
    async createVehicle({ commit }, object) {
      try {
        store.state.message.isLoading = true;
        const response = await createVehicle(object);
        if (response != undefined && response.data != undefined)
          commit("setVehicle", response.data);
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },

    async updateVehicle({ commit }, object) {
      try {
        store.state.message.isLoading = true;
        const response = await updateVehicle(object);
        if (response != undefined && response.data != undefined)
          commit("setVehicle", response.data);
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    async fetchVehicle({ commit }, id) {
      try {
        store.state.message.isLoading = true;
        const response = await getVehicle(id);
        if (response != undefined && response.data != undefined)
          commit("setVehicle", response.data);
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    async deleteVehicle({ commit }, id) {
      try {
        store.state.message.isLoading = true;
        const response = await deleteVehicle(id);
        store.state.message.messages = response.messages;
        commit("setVehicle", {});
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    async getAllVehicle({ commit }) {
      try {
        store.state.message.isLoading = true;
        const response = await getAllVehicle();
        if (response != undefined && response.data != undefined)
          commit("setVehicles", response.data);
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
  },
  namespaced: true,
};
