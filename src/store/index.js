import { createStore } from "vuex";
import passport from "@/store/owner/passportModule";
import auth from "@/store/authModule";
import address from "@/store/addressModule";
import owner from "@/store/owner/ownerModule";
import ownership from "@/store/ownershipModule";
import registry from "@/store/registryModule";
import photo from "@/store/owner/photoModule";
import questionnaire from "@/store/questionnaireModule";
import record from "@/store/recordModule";
import share from "@/store/shareModule";
import payment from "@/store/paymentModule";
import rate from "@/store/rateModule";

export default createStore({
  modules: {
    passport,
    auth,
    address,
    owner,
    ownership,
    registry,
    photo,
    questionnaire,
    record,
    share,
    payment,
    rate,
  },
});
