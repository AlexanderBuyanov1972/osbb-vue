import {
  createOwnership,
  updateOwnership,
  getOwnership,
  deleteOwnership,
  getAllOwnership,
  countRooms,
} from "@/http/ownership";

export default {
  state: () => ({
    ownership: {
      id: 0,
      typeRoom: "",
      totalArea: "",
      livingArea: "",
      documentConfirmsRightOwn: "",
      numberRooms: "",
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
        commit("setMessages", ["Сервер не отвечает."]);
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
        commit("setMessages", ["Сервер не отвечает."]);
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
        commit("setMessages", ["Сервер не отвечает."]);
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
        commit("setMessages", ["Сервер не отвечает."]);
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
        commit("setMessages", ["Сервер не отвечает."]);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async fetchCountRooms({ commit }) {
      try {
        commit("setIsLoading", true);
        const data = await countRooms();
        commit("setCountOwnerships", data);
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
