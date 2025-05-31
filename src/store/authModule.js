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
    setID,
    removeAccessToken,
    removeRefreshToken,
    removeLink,
} from "@/http/localStorage";
import {PAGE_REGISTRATION} from "@/router/apiRouter";
import store from "@/store/index";

export default {
    state: () => ({
        user: {
            id: 0,
            username: "",
            email: "",
            activationLink: "",
            activated: "",
            roles: [],
        },
        isRegistration: false,
        isLogin: false,
        isAdmin: false,
    }),

    mutations: {
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
    },

    getters: {
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
    },

    actions: {
        async registration({commit}, object) {
            try {
                store.state.message.isLoading = true;
                const response = await registration(object);
                const data = response.data;
                console.log(data)
                store.state.message.messages = data.messages;
                if (response.status === 200) {
                    commit("setUser", data.data);
                    commit("setIsRegistration", true);
                    setID(data.data.id);
                    setLink(data.data.activationLink);
                    if (data.data.roles[0] === "ADMIN") {
                        commit("setIsAdmin", true);
                    }
                }
            } catch (error) {
                store.state.message.messages = [
                    error.message,
                    "Такой e-mail или username уже зарегистрирован в системе",
                ];
            } finally {
                store.state.message.isLoading = false;
            }
        },

        async login({commit}, object) {
            try {
                store.state.message.isLoading = true;
                const response = await login(object);
                const data = response.data;
                store.state.message.messages = data.messages;
                if (response.status === 200) {
                    commit("setIsLogin", true);
                    console.log(response.data)
                    setAccessToken(data.data.accessToken);
                    setRefreshToken(data.data.refreshToken);
                }
            } catch (error) {
                store.state.message.messages = [
                    error.message,
                    "Ошибка авторизации",
                    "Зарегистрируйтесь в системе",
                ];
                $router.push(PAGE_REGISTRATION);
            } finally {
                store.state.message.isLoading = false;
            }
        },

        async logout({commit}) {
            try {
                store.state.message.isLoading = true;
                const response = await logout();
                if (response.status === 200) {
                    commit("setIsLogin", false);
                    commit("setIsAdmin", false);
                    removeAccessToken();
                    removeRefreshToken();
                    store.state.message.messages = [
                        ...response.data.messages,
                        "Вы не авторизированы",
                        "Для входа в систему пройдите авторизацию",
                    ];
                }
            } catch (error) {
                store.state.message.messages = [error.message];
            } finally {
                store.state.message.isLoading = false;
            }
        },

        async check({commit}, link) {
            try {
                store.state.message.isLoading = true;
                const response = await check(link);
                const data = response.data;
                store.state.message.messages = data.messages;
                if (response.status === 200) {
                    commit("setUser", data.data.userDto);
                    commit("setIsLogin", true);
                    if (data.data.userDto.role === "ADMIN") {
                        commit("setIsAdmin", true);
                    }
                    setAccessToken(data.data.accessToken);
                    setRefreshToken(data.data.refreshToken);
                    setLink(data.data.userDto.activationLink);
                }
            } catch (error) {
                store.state.message.messages = [error.message];
            } finally {
                store.state.message.isLoading = false;
            }
        },

        async refresh({commit}) {
            try {
                store.state.message.isLoading = true;
                const response = await refresh();
                const data = response.data;
                store.state.message.messages = data.messages;
                if (response.status === 200) {
                    commit("setUser", data.data.userDto);
                    commit("setIsLogin", true);
                    if (data.data.userDto.role === "ADMIN") {
                        commit("setIsAdmin", true);
                    }
                    setAccessToken(data.data.accessToken);
                    setRefreshToken(data.data.refreshToken);
                    setLink(data.data.userDto.activationLink);
                }
            } catch (error) {
                store.state.message.messages = [error.message];
            } finally {
                store.state.message.isLoading = false;
            }
        },

        async updateUser({commit}, object) {
            try {
                store.state.message.isLoading = true;
                const response = await updateUser(object);
                const data = response.data;
                if (response.status === 200) commit("setUser", data.data);
                store.state.message.messages = data.messages;
            } catch (error) {
                store.state.message.messages = [error.message];
            } finally {
                store.state.message.isLoading = false;
            }
        },

        async getUser({commit}, id) {
            try {
                store.state.message.isLoading = true;
                const response = await getUser(id);
                const data = response.data;
                if (response.status === 200)
                    commit("setUser", response.data);
                store.state.message.messages = data.messages;
            } catch (error) {
                store.state.message.messages = [error.message];
            } finally {
                store.state.message.isLoading = false;
            }
        },

        async deleteUser({commit}, id) {
            try {
                store.state.message.isLoading = true;
                const response = await deleteUser(id);
                store.state.message.messages = response.data.messages;
                commit("setUser", {});
                commit("setIsRegistration", false);
                commit("setIsLogin", false);
                commit("setIsAdmin", false);
                removeAccessToken();
                removeRefreshToken();
                removeLink();
            } catch (error) {
                store.state.message.messages = [error.message];
            } finally {
                store.state.message.isLoading = false;
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
