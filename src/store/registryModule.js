import { getRegistryOwners, getRegistryOwnerships } from "@/http/registry";

export default {
  state: () => ({
    registryOwnerships: [],
    registryOwners: [],
    buildingCharacteristics: {
      countRooms: "",
      countApartment: "",
      countNonResidentialRoom: "",
      summaAreaRooms: "",
      summaAreaApartment: "",
      summaAreaNonResidentialRoom: "",
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
        commit(
          "setRegistryOwners",
          response.data.setFullNameOwnerAndListOwnership
        );
        commit(
          "setBuildingCharacteristics",
          response.data.buildingCharacteristics
        );
        commit("setMessages", response.messages);
      } catch (error) {
        commit("setMessages", ["Сервер не отвечает."]);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async fetchRegistryOwnerships({ commit }) {
      try {
        commit("setIsLoading", true);
        const response = await getRegistryOwnerships();
        commit(
          "setRegistryOwnerships",
          response.data.setOwnershipAndListFullNameOwners
        );
        commit(
          "setBuildingCharacteristics",
          response.data.buildingCharacteristics
        );
        commit("setMessages", response.messages);
      } catch (error) {
        commit("setMessages", ["Сервер не отвечает."]);
      } finally {
        commit("setIsLoading", false);
      }
    },
  },
  namespaced: true,
};
