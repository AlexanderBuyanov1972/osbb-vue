import {
  createPayment,
  getPayment,
  deletePayment,
  getAllPayment,
  getBalance,
  getBalanceHouse,
  getDebtByApartment,
  getDetailsDebtByApartment,
  printPdfDebtByApartment,
  printPdfListDebtByApartment,
} from "@/http/payment/payment";
export default {
  state: () => ({
    payment: {},
    payments: [],
    balance: 0,
    balanceHouse: [],
    debt: {},
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
    setBalanceHouse(state, array) {
      state.balanceHouse = array;
    },
    setBalance(state, num) {
      state.balance = num;
    },
    setDebt(state, object) {
      state.debt = object;
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
    getBalance(state) {
      return state.balance;
    },
    getBalanceHouse(state) {
      return state.balanceHouse;
    },
    getDebt(state) {
      return state.debt;
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
        Coming;
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
        Coming;
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
    async fetchBalance({ commit }) {
      try {
        commit("setIsLoading", true);
        const response = await getBalance();
        if (response != undefined && response.data != undefined) {
          commit("setBalance", response.data);
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
          commit("setDebt", response.data);
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
    async fetchBalanceHouse({ commit }) {
      try {
        commit("setIsLoading", true);
        const response = await getBalanceHouse();
        if (response != undefined && response.data != undefined) {
          commit("setBalanceHouse", response.data);
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
    async printDebtByApartment({ commit }, object) {
      try {
        commit("setIsLoading", true);
        const response = await printPdfDebtByApartment(object);
        if (response != undefined && response.data != undefined) {
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
    async printListDebtByApartment({ commit }) {
      try {
        commit("setIsLoading", true);
        const response = await printPdfListDebtByApartment();
        if (response != undefined && response.data != undefined) {
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
