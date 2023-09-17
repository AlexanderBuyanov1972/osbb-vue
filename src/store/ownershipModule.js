import {
  createOwnership,
  updateOwnership,
  getOwnership,
  deleteOwnership,
  getAllOwnership,
  countRooms,
  createAllOwnership,
  getIdOwnershipByApartment,
} from "@/http/ownership";

export default {
  state: () => ({
    ownership: {
      id: 0,
      typeRoom: "",
      totalArea: 0.0,
      livingArea: 0.0,
      documentConfirmsRightOwn: "",
      numberRooms: 0,
      loggia: false,
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
    },
    idOwnership: 0,
    ownerships: [],
    messages: [],
    isLoading: false,
    countOwnerships: 0,
  }),

  mutations: {
    setIsLoading(state, bool) {
      state.isLoading = bool;
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
    setIdOwnership(state, number) {
      state.idOwnership = number;
    },
  },

  getters: {
    getIsLoading(state) {
      return state.isLoading;
    },
    getOwnership(state) {
      return state.ownership;
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
    getIdOwnership(state) {
      return state.idOwnership;
    },
  },

  actions: {
    async createOwnership({ commit }, object) {
      try {
        commit("setIsLoading", true);
        const response = await createOwnership(object);
        if (response != undefined && response.data != undefined) {
          commit("setOwnership", response.data);
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
    async updateOwnership({ commit }, object) {
      try {
        commit("setIsLoading", true);
        const response = await updateOwnership(object);
        if (response != undefined && response.data != undefined) {
          commit("setOwnership", response.data);
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
    async fetchOwnership({ commit }, id) {
      try {
        commit("setIsLoading", true);
        const response = await getOwnership(id);
        if (response != undefined && response.data != undefined) {
          commit("setOwnership", response.data);
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
    async getAllOwnership({ commit }) {
      try {
        commit("setIsLoading", true);
        const response = await getAllOwnership();
        if (response != undefined && response.data != undefined) {
          commit("setOwnerships", response.data);
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
        if (response != undefined && response.data != undefined) {
          commit("setOwnerships", response.data);
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
    async fetchIdOwnershipByIdApartment({ commit }, apartment) {
      try {
        commit("setIsLoading", true);
        const response = await getIdOwnershipByApartment(apartment);
        if (response != undefined && response.data != undefined) {
          commit("setIdOwnership", response.data);
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
  },

  namespaced: true,
};
