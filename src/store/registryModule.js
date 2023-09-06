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
        const data = await getRegistryOwners();
        commit("setRegistryOwners", data.setFullNameOwnerAndListOwnership);
        commit("setBuildingCharacteristics", data.buildingCharacteristics);
        commit("setMessages", ["OK"]);
      } catch (error) {
        commit("setMessages", ["Сервер не отвечает."]);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async fetchRegistryOwnerships({ commit }) {
      try {
        commit("setIsLoading", true);
        const data = await getRegistryOwnerships();
        commit("setRegistryOwnerships", data.setOwnershipAndListFullNameOwners);
        commit("setBuildingCharacteristics", data.buildingCharacteristics);
        commit("setMessages", ["OK"]);
      } catch (error) {
        commit("setMessages", ["Сервер не отвечает."]);
      } finally {
        commit("setIsLoading", false);
      }
    },
  },
  namespaced: true,
};
