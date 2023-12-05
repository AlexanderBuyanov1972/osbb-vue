import {
  getRegistryOwners,
  getRegistryOwnerships,
  getBuildingCharacteristics,
} from "@/http/registry";
import store from "@/store/index";

export default {
  state: () => ({
    registry: [],
    buildingCharacteristics: {
      countOwners: 0,
      countRooms: 0,
      countApartment: 0,
      countNonResidentialRoom: 0,
      summaTotalArea: 0.0,
      summaTotalAreaApartment: 0.0,
      summaLivingAreaApartment: 0.0,
      summaTotalAreaNonResidentialRoom: 0.0,

      addressDto: {
        city: "",
        street: "",
        house: "",
      },
    },
  }),

  mutations: {
    setBuildingCharacteristics(state, object) {
      state.buildingCharacteristics = object;
    },
    setRegistry(state, object) {
      state.registry = object;
    },
  },

  getters: {
    getBuildingCharacteristics(state) {
      return state.buildingCharacteristics;
    },
    getRegistry(state) {
      return state.registry;
    },
  },

  actions: {
    async fetchRegistryOwners({ commit }) {
      try {
        store.state.message.isLoading = true;
        const response = await getRegistryOwners();
        commit("setRegistry", response.data);
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    async fetchRegistryOwnerships({ commit }) {
      try {
        store.state.message.isLoading = true;
        const response = await getRegistryOwnerships();
        commit("setRegistry", response.data);
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    async fetchBuildingCharacteristics({ commit }) {
      try {
        store.state.message.isLoading = true;
        const response = await getBuildingCharacteristics();
        commit("setBuildingCharacteristics", response.data);
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
