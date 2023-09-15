import {
  createSelect,
  updateSelect,
  getSelect,
  deleteSelect,
  getAllSelect,
} from "@/http/select";

export default {
  state: () => ({
    select: {
      id: 0,
      question: "",
      answer: "",
    },
    selects: [],
    messages: [],
    isLoading: false,
  }),

  mutations: {
    setIsLoading(state, bool) {
      state.isLoading = bool;
    },
    setSelect(state, object) {
      state.select = object;
    },
    setSelects(state, array) {
      state.selects = array;
    },
    setMessages(state, messages) {
      state.messages = messages;
    },
  },

  getters: {
    getIsLoading(state) {
      return state.isLoading;
    },
    getSelect(state) {
      return state.select;
    },
    getSelects(state) {
      return state.selects;
    },
    getMessages(state) {
      return state.messages;
    },
  },

  actions: {
    async createSelect({ commit }, object) {
      try {
        commit("setIsLoading", true);
        const response = await createSelect(object);
        if (response != undefined && response.data != undefined) {
          commit("setSelect", response.data);
          commit("setMessages", response.messages);
        } else {
          commit("setMessages", response.messages);
        }
      } catch (error) {
        commit("setMessages", [...error.messages]);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async updateSelect({ commit }, object) {
      try {
        commit("setIsLoading", true);
        const response = await updateSelect(object);
        if (response != undefined && response.data != undefined) {
          commit("setSelect", response.data);
          commit("setMessages", response.messages);
        } else {
          commit("setMessages", response.messages);
        }
      } catch (error) {
        commit("setMessages", [...error.messages]);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async fetchSelect({ commit }, id) {
      try {
        commit("setIsLoading", true);
        const response = await getSelect(id);
        if (response != undefined && response.data != undefined) {
          commit("setSelect", response.data);
          commit("setMessages", response.messages);
        } else {
          commit("setMessages", response.messages);
        }
      } catch (error) {
        commit("setMessages", [...error.messages]);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async deleteSelect({ commit }, id) {
      try {
        commit("setIsLoading", true);
        const response = await deleteSelect(id);
        commit("setMessages", response.messages);
        commit("setSelect", {});
      } catch (error) {
        commit("setMessages", [...error.messages]);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async getAllSelect({ commit }) {
      try {
        commit("setIsLoading", true);
        const response = await getAllSelect();
        if (response != undefined && response.data != undefined) {
          commit("setSelects", response.data);
          commit("setMessages", response.messages);
        } else {
          commit("setMessages", response.messages);
        }
      } catch (error) {
        commit("setMessages", [...error.messages]);
      } finally {
        commit("setIsLoading", false);
      }
    },
  },
  namespaced: true,
};
