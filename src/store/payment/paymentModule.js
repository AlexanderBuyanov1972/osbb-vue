import {
  createPayment,
  getPayment,
  deletePayment,
  getAllPayment,
  getTotalSummaPayment,
  getDebtByApartment,
  getDetailsDebtByApartment,
} from "@/http/payment/payment";

export default {
  state: () => ({
    payment: {},
    payments: [],
    totalSummaPayment: 0,
    invoiceNotification: {},
    debtDetailsHeader: {},
    debtDetailsBody: [],
    messages: [],
    isLoading: false,
  }),

  mutations: {
    setIsLoading(state, bool) {
      state.isLoading = bool;
    },
    setMessages(state, messages) {
      state.messages = messages;
    },
    setPayment(state, object) {
      state.payment = object;
    },
    setPayments(state, array) {
      state.payments = array;
    },
    setTotalSummaPayment(state, num) {
      state.totalSummaPayment = num;
    },
    setInvoiceNotification(state, object) {
      state.invoiceNotification = object;
    },
    setDebtDetailsHeader(state, object) {
      state.debtDetailsHeader = object;
    },
    setDebtDetailsBody(state, array) {
      state.debtDetailsBody = array;
    },
  },
  getters: {
    getIsLoading(state) {
      return state.isLoading;
    },
    getMessages(state) {
      return state.messages;
    },
    getPayment(state) {
      return state.payment;
    },
    getPayments(state) {
      return state.payments;
    },
    getTotalSummaPayment(state) {
      return state.totalSummaPayment;
    },
    getInvoiceNotification(state) {
      return state.invoiceNotification;
    },
    getDebtDetailsHeader(state) {
      return state.debtDetailsHeader;
    },
    getDebtDetailsBody(state) {
      return state.debtDetailsBody;
    },
  },
  actions: {
    async createPayment({ commit }, object) {
      try {
        commit("setIsLoading", true);
        const response = await createPayment(object);
        if (response != undefined && response.data != undefined) {
          commit("setPayment", response.data);
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
    async fetchPayment({ commit }, id) {
      try {
        commit("setIsLoading", true);
        const response = await getPayment(id);
        if (response != undefined && response.data != undefined) {
          commit("setPayment", response.data);
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
    async deletePayment({ commit }, id) {
      try {
        commit("setIsLoading", true);
        const response = await deletePayment(id);
        commit("setMessages", response.messages);
        commit("setPayment", {});
      } catch (error) {
        commit("setMessages", [error.message]);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async fetchAllPayment({ commit }) {
      try {
        commit("setIsLoading", true);
        const response = await getAllPayment();
        if (response != undefined && response.data != undefined) {
          commit("setPayments", response.data);
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
    async fetchTotalSummaPayment({ commit }) {
      try {
        commit("setIsLoading", true);
        const response = await getTotalSummaPayment();
        if (response != undefined && response.data != undefined) {
          commit("setTotalSummaPayment", response.data);
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
    async fetchDebtByApartment({ commit }, apartment) {
      try {
        commit("setIsLoading", true);
        const response = await getDebtByApartment(apartment);
        if (response != undefined && response.data != undefined) {
          commit("setInvoiceNotification", response.data);
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
    async fetchDetailsDebtByApartment({ commit }, apartment) {
      try {
        commit("setIsLoading", true);
        const response = await getDetailsDebtByApartment(apartment);
        if (response != undefined && response.data != undefined) {
          commit("setDebtDetailsHeader", response.data[0]);
          commit("setDebtDetailsBody", response.data[1]);
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
