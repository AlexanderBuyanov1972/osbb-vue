import {
  queryNewBill,
  queryListHeatSupplyForApartment,
  queryReport_2023_11,
  queryListApartmentBillFullNamePhoneNumber,
  queryBalanceHouse,
} from "@/http/queries";

import store from "@/store/index";

export default {
  state: () => ({}),
  mutations: {},
  getters: {},

  actions: {
    async queryListHeatSupplyForApartment({ commit }) {
      try {
        store.state.message.isLoading = true;
        const response = await queryListHeatSupplyForApartment();
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    async queryNewBill({ commit }) {
      try {
        store.state.message.isLoading = true;
        const response = await queryNewBill();
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    async queryReport_2023_11({ commit }) {
      try {
        store.state.message.isLoading = true;
        const response = await queryReport_2023_11();
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    async queryListApartmentBillFullNamePhoneNumber({ commit }) {
      try {
        store.state.message.isLoading = true;
        const response = await queryListApartmentBillFullNamePhoneNumber();
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    async queryBalanceHouse({ commit }) {
      try {
        store.state.message.isLoading = true;
        const response = await queryBalanceHouse();
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
