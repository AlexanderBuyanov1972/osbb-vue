import {
  createOwner,
  updateOwner,
  getOwner,
  deleteOwner,
  getAllOwner,
  countOwners,
} from "@/http/owner";

export default {
  state: () => ({
    owner: {
      id: 0,
      firstName: "",
      secondName: "",
      lastName: "",
      dateBirth: "",
      gender: "",
      familyStatus: "",
      email: "",
      phoneNumber: "",
      password: {
        id: 0,
        passwordID: "",
        numberEntry: "",
        dateIssue: "",
        issuingAuthority: "",
        registrationNumberCardPayerTaxes: "",
      },
      ownerships: [],
    },
    owners: [],
    messages: [],
    isLoading: false,
    countOwners: 0,
  }),

  mutations: {
    setIsLoading(state, bool) {
      state.isLoading = bool;
    },
    setOwner(state, object) {
      state.owner = object;
    },
    setOwners(state, object) {
      state.owners = object;
    },
    setMessages(state, messages) {
      state.messages = messages;
    },
    setCountOwners(state, number) {
      state.countOwners = number;
    },
  },

  getters: {
    getIsLoading(state) {
      return state.isLoading;
    },
    getOwner(state) {
      return state.owner;
    },
    getOwners(state) {
      return state.owners;
    },
    getMessages(state) {
      return state.messages;
    },
    getCountOwners(state) {
      return state.countOwners;
    },
  },

  actions: {
    async createOwner({ commit }, object) {
      try {
        commit("setIsLoading", true);
        const response = await createOwner(object);
        if (Array.isArray(response)) {
          commit("setOwner", response[0].data[0]);
          commit("setMessages", response[0].messages);
        } else {
          commit("setMessages", response.messages);
        }
      } catch (error) {
        commit("setMessages", ["Сервер не отвечает."]);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async updateOwner({ commit }, object) {
      try {
        commit("setIsLoading", true);
        const response = await updateOwner(object);
        if (Array.isArray(response)) {
          commit("setOwner", response[0].data[0]);
          commit("setMessages", response[0].messages);
        } else {
          commit("setMessages", response.messages);
        }
      } catch (error) {
        commit("setMessages", ["Сервер не отвечает."]);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async fetchOwner({ commit }, id) {
      try {
        commit("setIsLoading", true);
        const response = await getOwner(id);
        if (Array.isArray(response)) {
          commit("setOwner", response[0].data[0]);
          commit("setMessages", response[0].messages);
        } else {
          commit("setMessages", response.messages);
        }
      } catch (error) {
        commit("setMessages", ["Сервер не отвечает."]);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async deleteOwner({ commit }, id) {
      try {
        commit("setIsLoading", true);
        const data = await deleteOwner(id);
        commit("setMessages", data.messages);
        commit("setOwner", {});
      } catch (error) {
        commit("setMessages", ["Сервер не отвечает."]);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async getAllOwner({ commit }) {
      try {
        commit("setIsLoading", true);
        const response = await getAllOwner();
        if (Array.isArray(response)) {
          commit("setOwners", response[0].data);
          commit("setMessages", response[0].messages);
        } else {
          commit("setMessages", response.messages);
        }
      } catch (error) {
        commit("setMessages", ["Сервер не отвечает."]);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async fetchCountOwners({ commit }) {
      try {
        commit("setIsLoading", true);
        const data = await countOwners();
        commit("setCountOwners", data);
        commit("setMessages", [
          "Существующее количество собственников - " + data,
        ]);
      } catch (error) {
        commit("setMessages", ["Сервер не отвечает."]);
      } finally {
        commit("setIsLoading", false);
      }
    },
  },
  namespaced: true,
};
