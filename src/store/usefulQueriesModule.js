import {
  queryListHeatSupplyForApartment,
  queryReport_2023_11,
} from "@/http/queries";
import { printNewBill } from "@/http/print";

export default {
  state: () => ({
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
  },
  getters: {
    getIsLoading(state) {
      return state.isLoading;
    },
    getMessages(state) {
      return state.messages;
    },
  },

  actions: {
    async queryListHeatSupplyForApartment({ commit }) {
      try {
        commit("setIsLoading", true);
        const response = await queryListHeatSupplyForApartment();
        commit("setMessages", response.messages);
      } catch (error) {
        commit("setMessages", [error.message]);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async queryNewBill({ commit }) {
      try {
        commit("setIsLoading", true);
        const response = await printNewBill();
        commit("setMessages", response.messages);
      } catch (error) {
        commit("setMessages", [error.message]);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async queryReport_2023_11({ commit }) {
      try {
        commit("setIsLoading", true);
        const response = await queryReport_2023_11();
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