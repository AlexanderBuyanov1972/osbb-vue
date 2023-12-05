import {
  createRecord,
  updateRecord,
  getRecord,
  deleteRecord,
  createAllRecord,
  getAllRecord,
  getAllRecordByOwnershipId,
  getAllRecordByOwnerId,
  getRecordByApartmentAndFullName,
  deleteRecordByOwnerIdAndOwnershipId,
} from "@/http/record";

import store from "@/store/index";

export default {
  state: () => ({
    record: {},
    records: [],
  }),
  mutations: {
    setRecord(state, object) {
      state.record = object;
    },
    setRecords(state, array) {
      state.records = array;
    },
  },
  getters: {
    getRecord(state) {
      return state.record;
    },
    getRecords(state) {
      return state.records;
    },
  },

  actions: {
    // one record -----------------------
    async createRecord({ commit }, object) {
      try {
        store.state.message.isLoading = true;
        const response = await createRecord(object);
        if (response != undefined && response.data != undefined)
          commit("setRecord", response.data);
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    async updateRecord({ commit }, object) {
      try {
        store.state.message.isLoading = true;
        const response = await updateRecord(object);
        if (response != undefined && response.data != undefined)
          commit("setRecord", response.data);
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    async fetchRecord({ commit }, id) {
      try {
        store.state.message.isLoading = true;
        const response = await getRecord(id);
        if (response != undefined && response.data != undefined)
          commit("setRecord", response.data);
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    async deleteRecord({ commit }, id) {
      try {
        store.state.message.isLoading = true;
        const response = await deleteRecord(id);
        store.state.message.messages = response.messages;
        commit("setRecord", {});
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    // all records --------------------------
    async createAllRecord({ commit }, list) {
      try {
        store.state.message.isLoading = true;
        const response = await createAllRecord(list);
        if (response != undefined && response.data != undefined)
          commit("setRecords", response.data);
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    async fetchAllRecord({ commit }) {
      try {
        store.state.message.isLoading = true;
        const response = await getAllRecord();
        if (response != undefined && response.data != undefined)
          commit("setRecords", response.data);
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    async fetchAllRecordByOwnershipId({ commit }, id) {
      try {
        store.state.message.isLoading = true;
        const response = await getAllRecordByOwnershipId(id);
        if (response != undefined && response.data != undefined)
          commit("setRecords", response.data);
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    async fetchAllRecordByOwnerId({ commit }, id) {
      try {
        store.state.message.isLoading = true;
        const response = await getAllRecordByOwnerId(id);
        if (response != undefined && response.data != undefined)
          commit("setRecords", response.data);
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    async fetchRecordByApartmentAndFullName({ commit }, payload) {
      try {
        store.state.message.isLoading = true;
        const response = await getRecordByApartmentAndFullName(
          payload.apartment,
          payload.fullName
        );
        if (response != undefined && response.data != undefined)
          commit("setRecord", response.data);
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    async deleteRecordByOwnerIdAndOwnershipId({ commit }, payload) {
      try {
        store.state.message.isLoading = true;
        const response = await deleteRecordByOwnerIdAndOwnershipId(
          payload.ownerId,
          payload.ownershipId
        );
        if (response != undefined && response.data != undefined)
          commit("setRecord", response.data);
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
