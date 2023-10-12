import {
  createPhoto,
  updatePhoto,
  getPhoto,
  deletePhoto,
  getAllPhoto,
} from "@/http/owner/photo";

export default {
  state: () => ({
    photo: {
      id: 0,
      url: "",
      name: "",
    },
    photos: [],
    messages: [],
    isLoading: false,
  }),

  mutations: {
    setIsLoading(state, bool) {
      state.isLoading = bool;
    },
    setPhoto(state, object) {
      state.photo = object;
    },
    setPhotos(state, array) {
      state.photos = array;
    },
    setMessages(state, messages) {
      state.messages = messages;
    },
  },

  getters: {
    getIsLoading(state) {
      return state.isLoading;
    },
    getPhoto(state) {
      return state.photo;
    },
    getPhotos(state) {
      return state.photos;
    },
    getMessages(state) {
      return state.messages;
    },
  },

  actions: {
    async createPhoto({ commit }, object) {
      try {
        commit("setIsLoading", true);
        const response = await createPhoto(object);
        if (response != undefined && response.data != undefined) {
          commit("setPhoto", response.data);
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

    async updatePhoto({ commit }, object) {
      try {
        commit("setIsLoading", true);
        const response = await updatePhoto(object);
        if (response != undefined && response.data != undefined) {
          commit("setPhoto", response.data);
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
    async fetchPhoto({ commit }, id) {
      try {
        commit("setIsLoading", true);
        const response = await getPhoto(id);
        if (response != undefined && response.data != undefined) {
          commit("setPhoto", response.data);
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
    async deletePhoto({ commit }, id) {
      try {
        commit("setIsLoading", true);
        const response = await deletePhoto(id);
        commit("setMessages", response.messages);
        commit("setPhoto", {});
      } catch (error) {
        commit("setMessages", [error.message]);
      } finally {
        commit("setIsLoading", false);
      }
    },
    async getAllPhoto({ commit }) {
      try {
        commit("setIsLoading", true);
        const response = await getAllPhoto();
        if (response != undefined && response.data != undefined) {
          commit("setPhotos", response.data);
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
