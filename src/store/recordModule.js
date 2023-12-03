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
export default {
  state: () => ({
    record: {},
    records: [],
    messages: [],
    isLoading: false,
  }),

  mutations: {
    setIsLoading(state, bool) {
      state.isLoading = bool;
    },
    setRecord(state, object) {
      state.record = object;
    },
    setRecords(state, array) {
      state.records = array;
    },
    setMessages(state, messages) {
      state.messages = messages;
    },
  },

  getters: {
    getIsLoading(state) {
      return state.isLoading;
    },
    getRecord(state) {
      return state.record;
    },
    getRecords(state) {
      return state.records;
    },
    getMessages(state) {
      return state.messages;
    },
  },

  actions: {
    // one record -----------------------
    async createRecord({ commit }, object) {
      try {
        commit("setIsLoading", true);
        const response = await createRecord(object);
        if (response != undefined && response.data != undefined)
          commit("setRecord", response.data);
        commit("setMessages", response.messages);
      } catch (error) {
        commit("setMessages", [error.message]);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async updateRecord({ commit }, object) {
      try {
        commit("setIsLoading", true);
        const response = await updateRecord(object);
        if (response != undefined && response.data != undefined)
          commit("setRecord", response.data);
        commit("setMessages", response.messages);
      } catch (error) {
        commit("setMessages", [error.message]);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async fetchRecord({ commit }, id) {
      try {
        commit("setIsLoading", true);
        const response = await getRecord(id);
        if (response != undefined && response.data != undefined)
          commit("setRecord", response.data);
        commit("setMessages", response.messages);
      } catch (error) {
        commit("setMessages", [error.message]);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async deleteRecord({ commit }, id) {
      try {
        commit("setIsLoading", true);
        const response = await deleteRecord(id);
        commit("setMessages", response.messages);
        commit("setRecord", {});
      } catch (error) {
        commit("setMessages", [error.message]);
      } finally {
        commit("setIsLoading", false);
      }
    },
    // all records --------------------------
    async createAllRecord({ commit }, list) {
      try {
        commit("setIsLoading", true);
        const response = await createAllRecord(list);
        if (response != undefined && response.data != undefined)
          commit("setRecords", response.data);
        commit("setMessages", response.messages);
      } catch (error) {
        commit("setMessages", [error.message]);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async fetchAllRecord({ commit }) {
      try {
        commit("setIsLoading", true);
        const response = await getAllRecord();
        if (response != undefined && response.data != undefined)
          commit("setRecords", response.data);
        commit("setMessages", response.messages);
      } catch (error) {
        commit("setMessages", [error.message]);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async fetchAllRecordByOwnershipId({ commit }, id) {
      try {
        commit("setIsLoading", true);
        const response = await getAllRecordByOwnershipId(id);
        if (response != undefined && response.data != undefined)
          commit("setRecords", response.data);
        commit("setMessages", response.messages);
      } catch (error) {
        commit("setMessages", [error.message]);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async fetchAllRecordByOwnerId({ commit }, id) {
      try {
        commit("setIsLoading", true);
        const response = await getAllRecordByOwnerId(id);
        if (response != undefined && response.data != undefined)
          commit("setRecords", response.data);
        commit("setMessages", response.messages);
      } catch (error) {
        commit("setMessages", [error.message]);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async fetchRecordByApartmentAndFullName({ commit }, payload) {
      try {
        commit("setIsLoading", true);
        const response = await getRecordByApartmentAndFullName(
          payload.apartment,
          payload.fullName
        );
        if (response != undefined && response.data != undefined)
          commit("setRecord", response.data);
        commit("setMessages", response.messages);
      } catch (error) {
        commit("setMessages", [error.message]);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async deleteRecordByOwnerIdAndOwnershipId({ commit }, payload) {
      try {
        commit("setIsLoading", true);
        const response = await deleteRecordByOwnerIdAndOwnershipId(
          payload.ownerId,
          payload.ownershipId
        );
        if (response != undefined && response.data != undefined)
          commit("setRecord", response.data);
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
