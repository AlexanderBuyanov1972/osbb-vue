import { createStore } from "vuex";
import passport from "@/store/passportModule";
import user from "@/store/userModule";
import address from "@/store/addressModule";
import role from "@/store/roleModule";
import owner from "@/store/ownerModule";
import ownership from "@/store/ownershipModule";
import registry from "@/store/registryModule";
import photo from "@/store/photoModule";
import questionnaire from "@/store/questionnaireModule";
import result from "@/store/resultModule";

export default createStore({
  modules: {
    passport,
    user,
    address,
    role,
    owner,
    ownership,
    registry,
    photo,
    questionnaire,
    result,
  },
});
