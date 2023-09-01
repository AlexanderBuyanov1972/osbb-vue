import {
  createOwnership,
  updateOwnership,
  getOwnership,
  deleteOwnership,
  getAllOwnership,
  getOneOwnershipAndListOwner,
} from "@/http/ownership";

export default {
  state: () => ({
    ownership: {
      id: 0,
      typeRoom: null,
      areaRoomThatIsInProperty: 0,
      documentConfirmsRightOwn: null,
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
    ownerships: [],
    messages: [],
    isLoading: false,
    oneOwnershipAndListOwner: [],
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
    setOneOwnershipAndListOwner(state, object) {
      state.oneOwnershipAndListOwner = object;
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
    getOneOwnershipAndListOwner(state) {
      return state.oneOwnershipAndListOwner;
    },
  },

  actions: {
    async createOwnership({ commit }, object) {
      try {
        commit("setIsLoading", true);
        const data = await createOwnership(object);
        if (Array.isArray(data)) {
          commit("setOwnership", data[0]);
          commit("setMessages", ["OK"]);
        } else {
          commit("setMessages", data.messages);
        }
      } catch (error) {
        alert("Error !!! OwnershipModule --> createOwnership");
      } finally {
        commit("setIsLoading", false);
      }
    },

    async updateOwnership({ commit }, object) {
      try {
        commit("setIsLoading", true);
        const data = await updateOwnership(object);
        if (Array.isArray(data)) {
          commit("setOwnership", data[0]);
          commit("setMessages", ["OK"]);
        } else {
          commit("setMessages", data.messages);
        }
      } catch (error) {
        alert("Error !!! OwnershipModule --> updateOwnership");
      } finally {
        commit("setIsLoading", false);
      }
    },
    async fetchOwnership({ commit }, id) {
      try {
        commit("setIsLoading", true);
        const data = await getOwnership(id);
        if (Array.isArray(data)) {
          commit("setOwnership", data[0]);
          commit("setMessages", ["OK"]);
        } else {
          commit("setMessages", data.messages);
        }
      } catch (error) {
        alert("Error !!! OwnershipModule --> getOwnership");
      } finally {
        commit("setIsLoading", false);
      }
    },
    async deleteOwnership({ commit }, id) {
      try {
        commit("setIsLoading", true);
        const data = await deleteOwnership(id);
        commit("setMessages", data.messages);
        commit("setOwnership", {});
      } catch (error) {
        alert("Error !!! OwnershipModule --> deleteOwnership");
      } finally {
        commit("setIsLoading", false);
      }
    },
    async getAllOwnership({ commit }) {
      try {
        commit("setIsLoading", true);
        const data = await getAllOwnership();
        if (Array.isArray(data)) {
          commit("setOwnerships", data);
          commit("setMessages", ["OK"]);
        } else {
          commit("setMessages", data.messages);
        }
      } catch (error) {
        alert("Error !!! OwnershipModule --> getAllOwnership");
      } finally {
        commit("setIsLoading", false);
      }
    },
    async fetchOneOwnershipAndListOwner({ commit }, id) {
      try {
        commit("setIsLoading", true);
        const data = await getOneOwnershipAndListOwner(id);
        if (Array.isArray(data)) {
          commit("setOneOwnershipAndListOwner", data[0]);
          commit("setMessages", ["OK"]);
        } else {
          commit("setMessages", data.messages);
        }
      } catch (error) {
        alert("Error !!! OwnershipModule --> fetchOneOwnershipAndListOwner");
      } finally {
        commit("setIsLoading", false);
      }
    },
  },
  namespaced: true,
};
