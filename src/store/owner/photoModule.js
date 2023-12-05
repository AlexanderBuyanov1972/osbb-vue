import {
  createPhoto,
  updatePhoto,
  getPhoto,
  deletePhoto,
  getAllPhoto,
} from "@/http/owner/photo";
import store from "@/store/index";

export default {
  state: () => ({
    photo: {},
    photos: [],
  }),

  mutations: {
    setPhoto(state, object) {
      state.photo = object;
    },
    setPhotos(state, array) {
      state.photos = array;
    },
  },

  getters: {
    getPhoto(state) {
      return state.photo;
    },
    getPhotos(state) {
      return state.photos;
    },
  },

  actions: {
    async createPhoto({ commit }, object) {
      try {
        store.state.message.isLoading = true;
        const response = await createPhoto(object);
        if (response != undefined && response.data != undefined)
          commit("setPhoto", response.data);
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },

    async updatePhoto({ commit }, object) {
      try {
        store.state.message.isLoading = true;
        const response = await updatePhoto(object);
        if (response != undefined && response.data != undefined)
          commit("setPhoto", response.data);
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    async fetchPhoto({ commit }, id) {
      try {
        store.state.message.isLoading = true;
        const response = await getPhoto(id);
        if (response != undefined && response.data != undefined)
          commit("setPhoto", response.data);
        store.state.message.messages = response.messages;
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    async deletePhoto({ commit }, id) {
      try {
        store.state.message.isLoading = true;
        const response = await deletePhoto(id);
        store.state.message.messages = response.messages;
        commit("setPhoto", {});
      } catch (error) {
        store.state.message.messages = [error.message];
      } finally {
        store.state.message.isLoading = false;
      }
    },
    async getAllPhoto({ commit }) {
      try {
        store.state.message.isLoading = true;
        const response = await getAllPhoto();
        if (response != undefined && response.data != undefined)
          commit("setPhotos", response.data);
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
