import {
  createOwnership,
  updateOwnership,
  getOwnership,
  deleteOwnership,
  getAllOwnership,
  countRooms,
  createAllOwnership,
  getOwnershipByApartment,
  getRoomByApartment,
} from "@/http/ownership";

export default {
  state: () => ({
    ownership: {},
    ownerships: [],
    messages: [],
    isLoading: false,
    countOwnerships: 0,
    room: {},
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
    setRoom(state, object) {
      state.room = object;
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
    getRoom(state) {
      return state.room;
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
    async fetchOwnershipByApartment({ commit }, apartment) {
      try {
        commit("setIsLoading", true);
        const response = await getOwnershipByApartment(apartment);
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
    async fetchRoomByApartment({ commit }, apartment) {
      try {
        commit("setIsLoading", true);
        const response = await getRoomByApartment(apartment);
        if (response != undefined && response.data != undefined) {
          commit("setRoom", response.data);
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
