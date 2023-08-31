import { createStore } from "vuex";
import password from "@/store/passwordModule";
import user from "@/store/userModule";
import address from "@/store/addressModule";
import role from "@/store/roleModule";
import owner from "@/store/ownerModule";
import ownership from "@/store/ownershipModule";
import registry from "@/store/registryModule";


export default createStore({
  modules: {
    password,
    user,
    address,
    role,
    owner,
    ownership,
    registry
  },
});
