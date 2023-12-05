export default {
  state: () => ({
    messages: [],
    isLoading: false,
  }),
  mutations: {
    setMessages(state, messages) {
      state.messages = messages;
    },
    setIsLoading(state, bool) {
      state.isLoading = bool;
    },
  },
  getters: {
    getMessages(state) {
      return state.messages;
    },
    getIsLoading(state) {
      return state.isLoading;
    },
  },
  actions: {},
  namespaced: true,
};
