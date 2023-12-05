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

import store from "@/store/index";

export default {
  state: () => ({
    payment: {},
    payments: [],
    balance: 0,
    balanceHouse: [],
    debtDetails: {},
  }),
  mutations: {
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
        store.state.message.isLoading = true;
        const response = await createPayment(object);
        if (response != undefined && response.data != undefined)
          commit("setPayment", response.data);
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
        Coming;
      } finally {
        store.state.message.isLoading = false;
      }
    },
    async fetchPayment({ commit }, id) {
      try {
        store.state.message.isLoading = true;
        const response = await getPayment(id);
        if (response != undefined && response.data != undefined)
          commit("setPayment", response.data);
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    async deletePayment({ commit }, id) {
      try {
        store.state.message.isLoading = true;
        const response = await deletePayment(id);
        store.state.message.messages = response.messages;
        commit("setPayment", {});
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    // все объекты -------------------------------
    async fetchAllPayment({ commit }) {
      try {
        store.state.message.isLoading = true;
        const response = await getAllPayment();
        if (response != undefined && response.data != undefined)
          commit("setPayments", response.data);
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    // разные ------------------------------------
    async fetchBalance({ commit }) {
      try {
        store.state.message.isLoading = true;
        const response = await getBalance();
        if (response != undefined && response.data != undefined)
          commit("setBalance", response.data);
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    // получить долг по id помещения -----------------
    async fetchDebtById({ commit }, id) {
      try {
        store.state.message.isLoading = true;
        const response = await getDebtById(id);
        if (response != undefined && response.data != undefined)
          commit("setDebtDetails", response.data);
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    // получить детализированный долг по id помещения ---
    async fetchDetailsDebtById({ commit }, id) {
      try {
        store.state.message.isLoading = true;
        const response = await getDetailsDebtById(id);
        if (response != undefined && response.data != undefined)
          commit("setDebtDetails", response.data);
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    // получить баланс дома -------------------
    async fetchBalanceHouse({ commit }) {
      try {
        store.state.message.isLoading = true;
        const response = await getBalanceHouse();
        if (response != undefined && response.data != undefined)
          commit("setBalanceHouse", response.data);
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    // на печать квитанцию
    async printDebt({ commit }, object) {
      try {
        store.state.message.isLoading = true;
        const response = await printDebt(object);
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    // печатать всем квитанции о долге на разные pdf файлы
    async printAllDebt({ commit }) {
      try {
        store.state.message.isLoading = true;
        const response = await printAllDebt();
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    // печатать всем квитанции о долге на один pdf файл
    async printAllInOneDebt({ commit }) {
      try {
        store.state.message.isLoading = true;
        const response = await printAllInOneDebt();
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    // печатать детализированный долг по id помещения
    async printDebtDetailsById({ commit }, apartment) {
      try {
        store.state.message.isLoading = true;
        const response = await printDebtDetailsById(apartment);
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    // печатать на все помещения детализированный долг на разные файлы
    async printAllDebtDetails({ commit }) {
      try {
        store.state.message.isLoading = true;
        const response = await printAllDebtDetails();
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    // печатать домовой баланс
    async printBalanceHouse({ commit }) {
      try {
        store.state.message.isLoading = true;
        const response = await printBalanceHouse();
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
  },
  namespaced: true,
};
