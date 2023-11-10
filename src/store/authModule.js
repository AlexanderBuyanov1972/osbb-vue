import {
  registration,
  login,
  logout,
  refresh,
  check,
  updateUser,
  getUser,
  deleteUser,
} from "@/http/auth";
import {
  setAccessToken,
  setRefreshToken,
  setLink,
  removeAccessToken,
  removeRefreshToken,
  removeLink,
} from "@/http/localStorage";
import { PAGE_REGISTRATION } from "@/router/apiRouter";

export default {
  state: () => ({
    user: {
      id: 0,
      username: "",
      password: "",
      email: "",
      activationLink: "",
      activated: "",
      enabled: false,
      createdAt: "",
      updatedAt: "",
      role: "",
    },
    isRegistration: false,
    isLogin: false,
    isAdmin: false,
    messages: [],
    isLoading: false,
  }),

  mutations: {
    setIsLoading(state, bool) {
      state.isLoading = bool;
    },
    setIsRegistration(state, bool) {
      state.isRegistration = bool;
    },
    setIsLogin(state, bool) {
      state.isLogin = bool;
    },
    setIsAdmin(state, bool) {
      state.isAdmin = bool;
    },
    setUser(state, object) {
      state.user = object;
    },
    setMessages(state, messages) {
      state.messages = messages;
    },
  },

  getters: {
    getIsLoading(state) {
      return state.isLoading;
    },
    getIsRegistration(state) {
      return state.isRegistration;
    },
    getIsLogin(state) {
      return state.isLogin;
    },
    getIsAdmin(state) {
      return state.isAdmin;
    },
    getUser(state) {
      return state.user;
    },
    getMessages(state) {
      return state.messages;
    },
  },

  actions: {
    async registration({ commit }, object) {
      try {
        commit("setIsLoading", true);
        const response = await registration(object);
        const data = response.data;
        commit("setMessages", data.messages);
        if (response.status === 200) {
          commit("setUser", data.data);
          commit("setIsRegistration", true);
          setLink(data.data.activationLink);
        }
      } catch (error) {
        commit("setMessages", [
          error.message,
          "Такой e-mail или username уже зарегистрирован в системе",
        ]);
      } finally {
        commit("setIsLoading", false);
      }
    },

    async login({ commit }, object) {
      try {
        commit("setIsLoading", true);
        const response = await login(object);
        const data = response.data;
        commit("setMessages", data.messages);
        if (response.status === 200) {
          commit("setUser", data.data.userDto);
          commit("setIsLogin", true);
          if (data.data.userDto.role === "ADMIN") {
            commit("setIsAdmin", true);
          }
          setAccessToken(data.data.accessToken);
          setRefreshToken(data.data.refreshToken);
          setLink(data.data.userDto.activationLink)
        }
      } catch (error) {
        alert("ERROR");
        commit("setMessages", [
          "Ошибка авторизации",
          "Зарегистрируйтесь в системе",
        ]);
        $router.push(PAGE_REGISTRATION);
      } finally {
        commit("setIsLoading", false);
      }
    },

    async logout({ commit }) {
      try {
        commit("setIsLoading", true);
        const response = await logout();
        if (response.status === 200) {
          commit("setIsLogin", false);
          commit("setIsAdmin", false);
          removeAccessToken();
          removeRefreshToken();
          commit("setMessages", [
            ...response.data.messages,
            "Вы не авторизированы",
            "Для входа в систему пройдите авторизацию",
          ]);
        }
      } catch (error) {
        commit("setMessages", [error.message]);
      } finally {
        commit("setIsLoading", false);
      }
    },

    async check({ commit }, link) {
      try {
        commit("setIsLoading", true);
        const response = await check(link);
        const data = response.data;
        commit("setMessages", data.messages);
        if (response.status === 200) {
          commit("setUser", data.data.userDto);
          commit("setIsLogin", true);
          if (data.data.userDto.role === "ADMIN") {
            commit("setIsAdmin", true);
          }
          setAccessToken(data.data.accessToken);
          setRefreshToken(data.data.refreshToken);
          setLink(data.data.userDto.activationLink)
        }
      } catch (error) {
        commit("setMessages", [error.message]);
      } finally {
        commit("setIsLoading", false);
      }
    },

    async refresh({ commit }) {
      try {
        commit("setIsLoading", true);
        const response = await refresh();
        const data = response.data;
        commit("setMessages", data.messages);
        if (response.status === 200) {
          commit("setUser", data.data.userDto);
          commit("setIsLogin", true);
          if (data.data.userDto.role === "ADMIN") {
            commit("setIsAdmin", true);
          }
          setAccessToken(data.data.accessToken);
          setRefreshToken(data.data.refreshToken);
          setLink(data.data.userDto.activationLink)
        }
      } catch (error) {
        commit("setMessages", [error.message]);
      } finally {
        commit("setIsLoading", false);
      }
    },

    async updateUser({ commit }, object) {
      try {
        commit("setIsLoading", true);
        const response = await updateUser(object);
        const data = response.data;
        commit("setMessages", data.messages);
        if (response.status === 200) {
          commit("setUser", data.data);
          commit("setMessages", data.messages);
        }
      } catch (error) {
        commit("setMessages", [error.message]);
      } finally {
        commit("setIsLoading", false);
      }
    },

    async getUser({ commit }, id) {
      try {
        commit("setIsLoading", true);
        const response = await getUser(id);
        const data = response.data;
        commit("setMessages", data.messages);
        if (response.status === 200) {
          commit("setUser", response.data);
          commit("setMessages", data.messages);
        }
      } catch (error) {
        commit("setMessages", [error.message]);
      } finally {
        commit("setIsLoading", false);
      }
    },

    async deleteUser({ commit }, id) {
      try {
        commit("setIsLoading", true);
        const response = await deleteUser(id);
        commit("setMessages", response.data.messages);
        commit("setUser", {});
        commit("setIsRegistration", false);
        commit("setIsLogin", false);
        commit("setIsAdmin", false);
        removeAccessToken();
        removeRefreshToken();
        removeLink();
      } catch (error) {
        commit("setMessages", [error.message]);
      } finally {
        commit("setIsLoading", false);
      }
    },
  },

  namespaced: true,
};

// response data -----> logout ---------------------------------
// messages:["Logout successfully"]

// response data -----> registration ---------------------------
// "username": "alex",
// "email": "alex@gmail.com",
// "role": "ADMIN",
// "activated": false,
// "activationLink": "b7069a82f2f24ed7838e7170dd31e405"

// response data -----> login, check, refresh ------------------
//      "accessToken": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbGV4QGdtYWlsLmNvbSIsIkF1dGhvcml6YXRpb24iOlsiQURNSU4iXSwiaWF0IjoxNjk5Mzg5NzUzLCJleHAiOjE2OTk0NzYxNTN9.Z5zML4m5Z9faHNr8VjTXRPnO9ztSu0xhQlyroO0f2Xk",
// "accessTokenIssuedAt": "2023-11-07T20:42:33.000+00:00",
// "accessTokenExpiredAt": "2023-11-08T20:42:33.000+00:00",
// "refreshToken": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbGV4QGdtYWlsLmNvbSIsIkF1dGhvcml6YXRpb24iOlsiQURNSU4iXSwicGFzc3dvcmQiOiIxMjM0NSIsImlhdCI6MTY5OTM4OTc1MywiZXhwIjoxNzAwMjUzNzUzfQ.vPwNBlYTYJzvvlPWJHb6H02_sHacQa4ark2aG8fku6c",
// "refreshTokenIssuedAt": "2023-11-07T20:42:33.000+00:00",
// "refreshTokenExpiredAt": "2023-11-17T20:42:33.000+00:00",
// "userDto": {
//     "username": "alex",
//     "email": "alex@gmail.com",
//     "role": "ADMIN",
//     "activated": false,
//     "activationLink": "b7069a82f2f24ed7838e7170dd31e405"
