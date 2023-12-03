import {
  createPayment,
  getPayment,
  deletePayment,
  getAllPayment,
  getBalance,
  getBalanceHouse,
  getDebtById,
  getDetailsDebtById,
} from "@/http/payment";
import {
  printDebt,
  printAllDebt,
  printAllInOneDebt,
  printDebtDetailsById,
  printAllDebtDetails,
  printBalanceHouse,
} from "@/http/print";
export default {
  state: () => ({
    payment: {},
    payments: [],
    balance: 0,
    balanceHouse: [],
    debtDetails: {},
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
    setDebtDetails(state, array) {
      state.debtsDetails = array;
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
    getDebtDetails(state) {
      return state.debtsDetails;
    },
  },
  actions: {
    // один объект -------------------------------
    async createPayment({ commit }, object) {
      try {
        commit("setIsLoading", true);
        const response = await createPayment(object);
        if (response != undefined && response.data != undefined)
          commit("setPayment", response.data);
        commit("setMessages", response.messages);
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
        if (response != undefined && response.data != undefined)
          commit("setPayment", response.data);
        commit("setMessages", response.messages);
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
    // все объекты -------------------------------
    async fetchAllPayment({ commit }) {
      try {
        commit("setIsLoading", true);
        const response = await getAllPayment();
        if (response != undefined && response.data != undefined)
          commit("setPayments", response.data);
        commit("setMessages", response.messages);
      } catch (error) {
        commit("setMessages", [error.message]);
      } finally {
        commit("setIsLoading", false);
      }
    },
    // разные ------------------------------------
    async fetchBalance({ commit }) {
      try {
        commit("setIsLoading", true);
        const response = await getBalance();
        if (response != undefined && response.data != undefined)
          commit("setBalance", response.data);
        commit("setMessages", response.messages);
      } catch (error) {
        commit("setMessages", [error.message]);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async fetchDebtById({ commit }, id) {
      try {
        commit("setIsLoading", true);
        const response = await getDebtById(id);
        if (response != undefined && response.data != undefined)
          commit("setDebtDetails", response.data);
        commit("setMessages", response.messages);
      } catch (error) {
        commit("setMessages", [error.message]);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async fetchDetailsDebtById({ commit }, id) {
      try {
        commit("setIsLoading", true);
        const response = await getDetailsDebtById(id);
        if (response != undefined && response.data != undefined)
          commit("setDebtDetails", response.data);
        commit("setMessages", response.messages);
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
        if (response != undefined && response.data != undefined)
          commit("setBalanceHouse", response.data);
        commit("setMessages", response.messages);
      } catch (error) {
        commit("setMessages", [error.message]);
      } finally {
        commit("setIsLoading", false);
      }
    },
    // на печать -----------------------------------
    async printDebt({ commit }, object) {
      try {
        commit("setIsLoading", true);
        const response = await printDebt(object);
        commit("setMessages", response.messages);
      } catch (error) {
        commit("setMessages", [error.message]);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async printAllDebt({ commit }) {
      try {
        commit("setIsLoading", true);
        const response = await printAllDebt();
        commit("setMessages", response.messages);
      } catch (error) {
        commit("setMessages", [error.message]);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async printAllInOneDebt({ commit }) {
      try {
        commit("setIsLoading", true);
        const response = await printAllInOneDebt();
        commit("setMessages", response.messages);
      } catch (error) {
        commit("setMessages", [error.message]);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async printDebtDetailsById({ commit }, apartment) {
      try {
        commit("setIsLoading", true);
        const response = await printDebtDetailsById(apartment);
        commit("setMessages", response.messages);
      } catch (error) {
        commit("setMessages", [error.message]);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async printAllDebtDetails({ commit }) {
      try {
        commit("setIsLoading", true);
        const response = await printAllDebtDetails();
        commit("setMessages", response.messages);
      } catch (error) {
        commit("setMessages", [error.message]);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async printBalanceHouse({ commit }) {
      try {
        commit("setIsLoading", true);
        const response = await printBalanceHouse();
        commit("setMessages", response.messages);
      } catch (error) {
        commit("setMessages", [error.message]);
      } finally {
        commit("setIsLoading", false);
      }
    },
  },
  namespaced: true,
};
