import { createStore } from "vuex";
import passport from "@/store/passportModule";
import user from "@/store/userModule";
import address from "@/store/addressModule";
import role from "@/store/roleModule";
import owner from "@/store/ownerModule";
import ownership from "@/store/ownershipModule";
import registry from "@/store/registryModule";
import select from "@/store/selectModule";
import photo from "@/store/photoModule";
import questionnaire from "@/store/questionnaireModule";

export default createStore({
  modules: {
    passport,
    user,
    address,
    role,
    owner,
    ownership,
    registry,
    select,
    photo,
    questionnaire,
  },
});
