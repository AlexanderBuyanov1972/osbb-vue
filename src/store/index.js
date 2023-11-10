import { createStore } from "vuex";
import passport from "@/store/owner/passportModule";
import auth from "@/store/authModule";
import address from "@/store/ownership/addressModule";
import owner from "@/store/owner/ownerModule";
import ownership from "@/store/ownership/ownershipModule";
import registry from "@/store/registryModule";
import photo from "@/store/owner/photoModule";
import questionnaire from "@/store/questionnaireModule";
import record from "@/store/recordModule";
import share from "@/store/shareModule";
import payment from "@/store/payment/paymentModule";
import rate from "@/store/payment/rateModule";

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
