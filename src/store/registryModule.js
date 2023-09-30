import {
  getRegistryOwners,
  getRegistryOwnerships,
  getBuildingCharacteristics,
} from "@/http/registry";

export default {
  state: () => ({
    registryOwnerships: [],
    registryOwners: [],
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
    messages: [],
    isLoading: false,
  }),

  mutations: {
    setIsLoading(state, bool) {
      state.isLoading = bool;
    },
    setBuildingCharacteristics(state, object) {
      state.buildingCharacteristics = object;
    },
    setRegistryOwners(state, object) {
      state.registryOwners = object;
    },
    setRegistryOwnerships(state, object) {
      state.registryOwnerships = object;
    },
    setMessages(state, messages) {
      state.messages = messages;
    },
  },

  getters: {
    getIsLoading(state) {
      return state.isLoading;
    },
    getBuildingCharacteristics(state) {
      return state.buildingCharacteristics;
    },
    getRegistryOwners(state) {
      return state.registryOwners;
    },
    getRegistryOwnerships(state) {
      return state.registryOwnerships;
    },
    getMessages(state) {
      return state.messages;
    },
  },

  actions: {
    async fetchRegistryOwners({ commit }) {
      try {
        commit("setIsLoading", true);
        const response = await getRegistryOwners();
        commit("setRegistryOwners", response.data);
        commit("setMessages", response.messages);
      } catch (error) {
        commit("setMessages", [error.message]);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async fetchRegistryOwnerships({ commit }) {
      try {
        commit("setIsLoading", true);
        const response = await getRegistryOwnerships();
        commit("setRegistryOwnerships", response.data);
        commit("setMessages", response.messages);
      } catch (error) {
        commit("setMessages", [error.message]);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async fetchBuildingCharacteristics({ commit }) {
      try {
        commit("setIsLoading", true);
        const response = await getBuildingCharacteristics();
        commit("setBuildingCharacteristics", response);
      } catch (error) {
        commit("setMessages", [error.message]);
      } finally {
        commit("setIsLoading", false);
      }
    },
  },
  namespaced: true,
};
